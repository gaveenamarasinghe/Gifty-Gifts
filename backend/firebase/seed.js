/**
 * Firestore seed script — `npm run seed` inside backend/.
 * Populates categories, coupons and a couple of demo products so the API has
 * data before the storefront points at it.
 */
require("dotenv").config();
const { COLLECTIONS } = require("./firebaseAdmin");
const store = require("../services/firestoreService");

const categories = [
  { name: "Gift Hampers", slug: "gift-hampers" },
  { name: "Flowers", slug: "flowers" },
  { name: "Cakes", slug: "cakes" },
  { name: "Personalised", slug: "personalised" },
  { name: "Chocolates", slug: "chocolates" },
  { name: "Home & Candles", slug: "home-candles" },
];

const coupons = [
  { code: "GIFTY10", type: "percent", value: 10, active: true },
  { code: "LOVE25", type: "fixed", value: 25, active: true },
  { code: "FREESHIP", type: "fixed", value: 9, active: true },
];

const products = [
  {
    name: "Luxe Celebration Hamper",
    slug: "luxe-celebration-hamper",
    price: 149,
    category: "gift-hampers",
    description: "Champagne truffles, artisan preserves and a hand-tied ribbon.",
    stock: 24,
    rating: 0,
    reviewCount: 0,
    tags: ["bestseller", "luxury"],
  },
  {
    name: "Blush Peony Bouquet",
    slug: "blush-peony-bouquet",
    price: 89,
    category: "flowers",
    description: "Seasonal peonies wrapped in soft blush tissue.",
    stock: 40,
    rating: 0,
    reviewCount: 0,
    tags: ["new"],
  },
];

async function seed() {
  for (const c of categories) await store.create(COLLECTIONS.categories, c, c.slug);
  for (const c of coupons) await store.create(COLLECTIONS.coupons, c, c.code);
  for (const p of products) await store.create(COLLECTIONS.products, p, p.slug);
  console.log("🎁 Seeded categories, coupons and demo products");
}

seed()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
