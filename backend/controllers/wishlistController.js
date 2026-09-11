/** Wishlist synchronisation for signed-in customers. */
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler } = require("../utils/helpers");

/** GET /api/wishlists/mine */
const getWishlist = asyncHandler(async (req, res) => {
  const list = await store.findById(COLLECTIONS.wishlists, req.user.uid);
  res.json({ productIds: list?.productIds || [] });
});

/** PUT /api/wishlists/mine — replaces the whole list (client is source of truth). */
const setWishlist = asyncHandler(async (req, res) => {
  const productIds = Array.isArray(req.body.productIds) ? req.body.productIds : [];
  await store.create(COLLECTIONS.wishlists, { userId: req.user.uid, productIds }, req.user.uid);
  res.json({ productIds });
});

module.exports = { getWishlist, setWishlist };
