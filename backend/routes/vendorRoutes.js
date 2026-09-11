const router = require("express").Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const crud = require("../controllers/crudController")(COLLECTIONS.vendors);

router.get("/", protect, crud.list);
router.get("/:id", protect, crud.get);
router.post("/", protect, authorize("admin"), crud.create);
router.put("/:id", protect, authorize("vendor", "admin"), crud.update);
router.delete("/:id", protect, authorize("admin"), crud.remove);

module.exports = router;
