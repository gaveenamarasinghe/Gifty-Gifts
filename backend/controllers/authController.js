/**
 * Auth Controller
 * Firebase Authentication + Firestore
 */

const crypto = require("crypto");

const { auth, db, COLLECTIONS } = require("../config/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler, signToken } = require("../utils/helpers");
const { sendVerificationEmail, sendWelcomeEmail, send } = require("../services/emailService");

// Roles allowed to be set at registration or via the role-update endpoint.
// Keeping this as an allow-list prevents arbitrary strings (e.g. "admin")
// from being written into Firebase custom claims or Firestore.
const ALLOWED_ROLES = ["customer", "vendor"];
const DEFAULT_ROLE = "customer";

function isValidRole(role) {
  return ALLOWED_ROLES.includes(role);
}

/**
 * POST /api/auth/register
 */
const register = asyncHandler(async (req, res) => {
  const { uid, email, name, role, vendor } = req.body;

  if (!uid || !email || !name) {
    return res.status(400).json({ message: "Missing user information" });
  }

  // role is optional in the request (e.g. legacy clients); default to
  // "customer" if not provided, but reject anything that isn't a
  // recognized role.
  let resolvedRole = DEFAULT_ROLE;

  if (role !== undefined) {
    if (!isValidRole(role)) {
      return res.status(400).json({
        message: `Invalid role. Must be one of: ${ALLOWED_ROLES.join(", ")}`,
      });
    }
    resolvedRole = role;
  }

  const firebaseUser = await auth.getUser(uid);

  const existingUser = await store.findById(COLLECTIONS.users, uid);

  if (existingUser) {
    return res.status(409).json({ message: "User already registered" });
  }

  await auth.setCustomUserClaims(uid, { role: resolvedRole });

  const verificationToken = crypto.randomBytes(32).toString("hex");
  const verificationTokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24h

  const baseUserProfile = {
    email,
    name,
    role: resolvedRole,
    photoURL: firebaseUser.photoURL || null,
    phone: null,
    emailVerified: false,
    verificationToken,
    verificationTokenExpires,
  };

  const userProfile =
    resolvedRole === "vendor"
      ? {
          ...baseUserProfile,
          vendor: {
            shopName: vendor?.shopName || null,
            shopDescription: vendor?.shopDescription || null,
            address: vendor?.address || null,
            openHours: vendor?.openHours || null,
            phone: vendor?.phone || null,
            name: vendor?.name || vendor?.shopName || null,
            location: vendor?.location || vendor?.address || null,
            hours: vendor?.hours || vendor?.openHours || null,
            email: vendor?.email || email,
            website: vendor?.website || null,
          },
        }
      : baseUserProfile;

  const profile = await store.create(COLLECTIONS.users, userProfile, uid);

  try {
    await sendVerificationEmail(email, name, verificationToken);
  } catch (error) {
    console.error("Verification email could not be sent:", error);
  }

  res.status(201).json({
    message: "Account created. Please verify your email.",
    user: profile,
    token: signToken({ uid, role: resolvedRole }),
  });
});

/**
 * GET /api/auth/verify-email
 *
 * IMPORTANT: This route must be idempotent / safe to hit more than once.
 * Email clients and corporate security scanners (Outlook Safe Links, Gmail
 * link scanning, etc.) often auto-fetch links inside emails BEFORE the user
 * clicks them. If the token is deleted on first use, that scanner request
 * silently "uses up" the token, and the user's real click then fails with
 * an "invalid token" error even though the account is actually verified.
 *
 * Fix: never null out the token. Instead, check `emailVerified` first and
 * treat a repeat hit on an already-verified user as a success, not an error.
 */
const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.query;
  const clientUrl = process.env.CLIENT_URL;

  if (!token) {
    return res.redirect(`${clientUrl}/verify-email?status=error`);
  }

  const snapshot = await db
    .collection(COLLECTIONS.users)
    .where("verificationToken", "==", token)
    .limit(1)
    .get();

  if (snapshot.empty) {
    // No user currently holds this token. This can legitimately happen if
    // the token string is wrong/tampered with, OR if the account was
    // already verified under an older flow that nulled the token.
    // We can't distinguish those cases anymore once the token is gone,
    // so we surface a generic invalid-link message here.
    return res.redirect(`${clientUrl}/verify-email?status=invalid`);
  }

  const doc = snapshot.docs[0];
  const user = { id: doc.id, ...doc.data() };

  // Already verified (e.g. scanner pre-fetched the link, or user clicked
  // twice) -> treat as success instead of failing.
  if (user.emailVerified) {
    return res.redirect(`${clientUrl}/verify-email?status=already-verified`);
  }

  if (user.verificationTokenExpires && user.verificationTokenExpires < Date.now()) {
    return res.redirect(`${clientUrl}/verify-email?status=expired`);
  }

  await store.update(COLLECTIONS.users, user.id, {
    emailVerified: true,
    // NOTE: we intentionally do NOT null the token here (see comment above).
    // The token becomes harmless once emailVerified is true, since this
    // route short-circuits to "already-verified" for any further hits.
  });

  await auth.updateUser(user.id, { emailVerified: true });

  try {
    await sendWelcomeEmail(user.email, user.name);
  } catch (error) {
    console.error("Welcome email could not be sent:", error);
  }

  return res.redirect(`${clientUrl}/verify-email?status=success`);
});

/**
 * POST /api/auth/login
 */
const login = asyncHandler(async (req, res) => {
  const { idToken } = req.body;

  const decoded = await auth.verifyIdToken(idToken);

  let profile = await store.findById(COLLECTIONS.users, decoded.uid);

  if (!profile) {
    profile = await store.create(
      COLLECTIONS.users,
      {
        email: decoded.email,
        name: decoded.name || "Gifty User",
        role: DEFAULT_ROLE,
        photoURL: decoded.picture || null,
        emailVerified: true,
      },
      decoded.uid,
    );
  }

  res.json({
    user: profile,
    token: signToken({ uid: decoded.uid, role: profile.role }),
  });
});

/**
 * GET /api/auth/me
 */
const me = asyncHandler(async (req, res) => {
  const user = await store.findById(COLLECTIONS.users, req.user.uid);
  res.json({ user });
});

/**
 * POST /api/auth/forgot-password
 */
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const link = await auth.generatePasswordResetLink(email, {
    url: `${process.env.CLIENT_URL}/reset-password`,
  });

  await send(
    email,
    "Reset your Gifty password",
    `
    <h2>Password Reset</h2>
    <p>Click below to reset your password.</p>
    <a href="${link}">Reset Password</a>
    `,
  );

  res.json({ message: "Password reset email sent" });
});

/**
 * PATCH /api/auth/role/:uid
 */
const setRole = asyncHandler(async (req, res) => {
  const { uid } = req.params;
  const { role } = req.body;

  if (!isValidRole(role)) {
    return res.status(400).json({
      message: `Invalid role. Must be one of: ${ALLOWED_ROLES.join(", ")}`,
    });
  }

  await auth.setCustomUserClaims(uid, { role });

  const user = await store.update(COLLECTIONS.users, uid, { role });

  res.json({ user });
});

module.exports = {
  register,
  verifyEmail,
  login,
  me,
  forgotPassword,
  setRole,
};
