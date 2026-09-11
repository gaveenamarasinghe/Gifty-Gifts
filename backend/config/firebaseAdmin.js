/**
 * Firebase Admin SDK Setup
 */

const admin = require("firebase-admin");
const path = require("path");
const fs = require("fs");

let serviceAccountPath = path.join(__dirname, "../serviceAccountKey.json");

if (!fs.existsSync(serviceAccountPath)) {
  console.error("❌ Missing serviceAccountKey.json");

  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

    projectId: serviceAccount.project_id,
  });

  console.log("🔥 Firebase Admin initialized successfully");
}

const db = admin.firestore();

const auth = admin.auth();

/**
 * Convert Firestore document snapshot
 */

function docToObject(snapshot) {
  if (!snapshot.exists) {
    return null;
  }

  return {
    id: snapshot.id,

    ...snapshot.data(),
  };
}

/**
 * Convert Firestore query snapshot
 */

function snapshotToArray(snapshot) {
  return snapshot.docs.map((doc) => ({
    id: doc.id,

    ...doc.data(),
  }));
}

const COLLECTIONS = {
  users: "users",

  products: "products",

  orders: "orders",

  categories: "categories",

  reviews: "reviews",

  coupons: "coupons",

  wishlists: "wishlists",

  vendors: "vendors",

  messages: "messages",
};

module.exports = {
  admin,

  auth,

  db,

  docToObject,

  snapshotToArray,

  COLLECTIONS,
};
