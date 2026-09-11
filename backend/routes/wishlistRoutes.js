const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");
const c = require("../controllers/wishlistController");

router.get("/mine", protect, c.getWishlist);
router.put("/mine", protect, c.setWishlist);

module.exports = router;
