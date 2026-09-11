/**
 * Firebase Admin SDK bootstrap.
 * Exposes the Firestore handle, the Auth handle and small helpers shared by
 * every controller.
 */
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Render/Vercel store the key with literal \n sequences.
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();
const auth = admin.auth();

/** Collection name constants keep string typos out of the controllers. */
const COLLECTIONS = {
  users: "users",
  vendors: "vendors",
  products: "products",
  categories: "categories",
  orders: "orders",
  payments: "payments",
  wishlists: "wishlists",
  carts: "carts",
  addresses: "addresses",
  reviews: "reviews",
  notifications: "notifications",
  blogs: "blogs",
  coupons: "coupons",
  offers: "offers",
  delivery: "delivery",
  settings: "settings",
  contacts: "contacts",
};

/** Convert a Firestore snapshot into a plain `{ id, ...data }` object. */
const docToObject = (doc) => (doc.exists ? { id: doc.id, ...doc.data() } : null);
const snapshotToArray = (snap) => snap.docs.map((d) => ({ id: d.id, ...d.data() }));

module.exports = { admin, db, auth, COLLECTIONS, docToObject, snapshotToArray };
