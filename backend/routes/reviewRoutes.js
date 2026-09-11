const router = require("express").Router();
const { body } = require("express-validator");
const validate = require("../middleware/validateMiddleware");
const { protect } = require("../middleware/authMiddleware");
const c = require("../controllers/reviewController");

router.get("/:productId", c.listReviews);
router.post(
  "/",
  protect,
  body("productId").isString().notEmpty(),
  body("rating").isInt({ min: 1, max: 5 }),
  body("body").trim().isLength({ min: 4, max: 1000 }),
  validate,
  c.createReview,
);
router.delete("/:id", protect, c.deleteReview);

module.exports = router;
