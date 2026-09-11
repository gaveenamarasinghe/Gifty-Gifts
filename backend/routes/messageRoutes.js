const router = require("express").Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const c = require("../controllers/messageController");

router.get("/", protect, authorize("vendor", "customer", "admin"), c.listConversations);
router.get("/:id", protect, authorize("vendor", "customer", "admin"), c.getConversation);
router.post("/", protect, authorize("vendor", "customer", "admin"), c.createConversation);
router.post("/:id/messages", protect, authorize("vendor", "customer", "admin"), c.sendMessage);

module.exports = router;
