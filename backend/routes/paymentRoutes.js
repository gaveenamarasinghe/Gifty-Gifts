const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");
const c = require("../controllers/paymentController");

// Raw body is applied in server.js before express.json().
router.post("/webhook", c.webhook);
router.post("/create-session", protect, c.createCheckoutSession);
router.get("/mine", protect, c.myPayments);

module.exports = router;
