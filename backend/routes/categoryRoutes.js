const router = require("express").Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const crud = require("../controllers/crudController")(COLLECTIONS.categories);

router.get("/", crud.list);
router.get("/:id", crud.get);
router.post("/", protect, authorize("admin"), crud.create);
router.put("/:id", protect, authorize("admin"), crud.update);
router.delete("/:id", protect, authorize("admin"), crud.remove);

module.exports = router;
