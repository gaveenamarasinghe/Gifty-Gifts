/** Product reviews with aggregate rating recalculation. */
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler } = require("../utils/helpers");

/** GET /api/reviews/:productId */
const listReviews = asyncHandler(async (req, res) => {
  const reviews = await store.findAll(COLLECTIONS.reviews, {
    where: [["productId", "==", req.params.productId]],
    orderBy: { field: "createdAt", direction: "desc" },
  });
  res.json({ reviews });
});

/** POST /api/reviews — verified purchasers only. */
const createReview = asyncHandler(async (req, res) => {
  const { productId, rating, title, body } = req.body;

  const orders = await store.findAll(COLLECTIONS.orders, {
    where: [["userId", "==", req.user.uid]],
  });
  const purchased = orders.some((o) => (o.items || []).some((i) => i.productId === productId));
  if (!purchased)
    return res.status(403).json({ message: "Only verified buyers can review this gift" });

  const review = await store.create(COLLECTIONS.reviews, {
    productId,
    userId: req.user.uid,
    author: req.user.name || "Gifty customer",
    rating: Number(rating),
    title,
    body,
  });

  const all = await store.findAll(COLLECTIONS.reviews, { where: [["productId", "==", productId]] });
  const avg = all.reduce((s, r) => s + r.rating, 0) / all.length;
  await store.update(COLLECTIONS.products, productId, {
    rating: Math.round(avg * 10) / 10,
    reviewCount: all.length,
  });

  res.status(201).json({ review });
});

/** DELETE /api/reviews/:id — author or admin. */
const deleteReview = asyncHandler(async (req, res) => {
  const review = await store.findById(COLLECTIONS.reviews, req.params.id);
  if (!review) return res.status(404).json({ message: "Review not found" });
  if (review.userId !== req.user.uid && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not your review" });
  }
  res.json(await store.remove(COLLECTIONS.reviews, req.params.id));
});

module.exports = { listReviews, createReview, deleteReview };
