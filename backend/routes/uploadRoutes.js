const router = require("express").Router();
const upload = require("../middleware/uploadMiddleware");
const { protect, authorize } = require("../middleware/authMiddleware");
const { uploadImages } = require("../controllers/uploadController");

router.post(
  "/",
  protect,
  authorize("customer", "vendor", "admin"),
  upload.array("images", 6),
  uploadImages,
);

module.exports = router;
