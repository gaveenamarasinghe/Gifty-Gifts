/** Small shared helpers. */

/** Wrap an async controller so rejected promises reach the error middleware. */
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

/** Issue a Gifty JWT for a user record. */
const jwt = require("jsonwebtoken");
const signToken = (user) =>
  jwt.sign({ uid: user.uid, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || "7d",
  });

/** URL-safe slug from a product or category name. */
const slugify = (str) =>
  String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Order totals — mirrors the client calculation in src/context/ShopContext.tsx. */
function calculateTotals(lines, { discount = 0, giftWrapCount = 0 } = {}) {
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const wrap = giftWrapCount * 6;
  const shipping = subtotal > 120 || subtotal === 0 ? 0 : 9;
  const tax = Math.round((subtotal - discount) * 0.05);
  return {
    subtotal,
    wrap,
    shipping,
    tax,
    total: Math.max(0, subtotal - discount + wrap + shipping + tax),
  };
}

module.exports = { asyncHandler, signToken, slugify, calculateTotals };
