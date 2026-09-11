const router = require("express").Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const store = require("../services/firestoreService");
const { asyncHandler } = require("../utils/helpers");
const crud = require("../controllers/crudController")(COLLECTIONS.coupons);

/** POST /api/coupons/validate — public check used by the checkout form. */
router.post(
  "/validate",
  asyncHandler(async (req, res) => {
    const code = String(req.body.code || "").toUpperCase();
    const [coupon] = await store.findAll(COLLECTIONS.coupons, { where: [["code", "==", code]] });
    if (!coupon || !coupon.active)
      return res.status(404).json({ message: "That code isn't valid" });
    res.json({ coupon });
  }),
);

router.get("/", protect, authorize("admin"), crud.list);
router.post("/", protect, authorize("admin"), crud.create);
router.put("/:id", protect, authorize("admin"), crud.update);
router.delete("/:id", protect, authorize("admin"), crud.remove);

module.exports = router;
