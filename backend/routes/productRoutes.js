const router = require("express").Router();
const { body } = require("express-validator");
const validate = require("../middleware/validateMiddleware");
const { protect, authorize } = require("../middleware/authMiddleware");
const c = require("../controllers/productController");

router.get("/", c.listProducts);
router.get("/:slug", c.getProduct);
router.post(
  "/",
  protect,
  authorize("vendor", "admin"),
  body("name").trim().isLength({ min: 2, max: 120 }),
  body("price").isFloat({ min: 0 }),
  body("category").isString().notEmpty(),
  validate,
  c.createProduct,
);
router.put("/:id", protect, authorize("vendor", "admin"), c.updateProduct);
router.delete("/:id", protect, authorize("vendor", "admin"), c.deleteProduct);

module.exports = router;
