/**
 * Auth middleware.
 *
 * Accepts either a Firebase ID token or a Gifty-issued JWT in the
 * `Authorization: Bearer <token>` header. Roles live in Firestore
 * (`users/{uid}.role`) and are mirrored into Firebase custom claims.
 */
const jwt = require("jsonwebtoken");
const { auth, db, COLLECTIONS } = require("../config/firebaseAdmin");

async function protect(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(401).json({ message: "Not authorised" });

    let uid;
    let claims = {};
    try {
      // Preferred path: a Firebase ID token from the client SDK.
      const decoded = await auth.verifyIdToken(token);
      uid = decoded.uid;
      claims = decoded;
    } catch {
      // Fallback: a JWT this API issued at login.
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      uid = decoded.uid;
    }

    const snap = await db.collection(COLLECTIONS.users).doc(uid).get();
    req.user = {
      uid,
      role: snap.exists ? snap.data().role : claims.role || "customer",
      ...snap.data(),
    };
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

/** Role gate: `authorize("admin")` or `authorize("vendor", "admin")`. */
const authorize =
  (...roles) =>
  (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Not authorised" });
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "You don't have permission to do that" });
    }
    next();
  };

module.exports = { protect, authorize };
