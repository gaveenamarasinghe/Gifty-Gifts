const router = require("express").Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const c = require("../controllers/userController");

router.get("/", protect, authorize("admin"), c.listUsers);
router.put("/me", protect, c.updateProfile);
router.get("/me/addresses", protect, c.listAddresses);
router.post("/me/addresses", protect, c.addAddress);
router.delete("/me/addresses/:id", protect, c.removeAddress);
router.get("/me/notifications", protect, c.listNotifications);

module.exports = router;
