const router = require("express").Router();
const { body } = require("express-validator");
const validate = require("../middleware/validateMiddleware");
const { protect, authorize } = require("../middleware/authMiddleware");
const c = require("../controllers/orderController");

router.post(
  "/",
  protect,
  body("items").isArray({ min: 1 }),
  body("address").isObject(),
  validate,
  c.createOrder,
);
router.get("/mine", protect, c.myOrders);
router.get("/track/:id", c.trackOrder);
router.get("/:id", protect, c.getOrder);
router.patch("/:id/status", protect, authorize("vendor", "admin"), c.updateStatus);
router.post("/:id/cancel", protect, c.cancelOrder);

module.exports = router;
