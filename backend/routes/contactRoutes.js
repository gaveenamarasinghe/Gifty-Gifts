const router = require("express").Router();
const { body } = require("express-validator");
const validate = require("../middleware/validateMiddleware");
const { protect, authorize } = require("../middleware/authMiddleware");
const { COLLECTIONS } = require("../firebase/firebaseAdmin");
const crud = require("../controllers/crudController")(COLLECTIONS.contacts);

router.post(
  "/",
  body("name").trim().isLength({ min: 1, max: 80 }),
  body("email").isEmail(),
  body("message").trim().isLength({ min: 5, max: 2000 }),
  validate,
  crud.create,
);
router.get("/", protect, authorize("admin"), crud.list);
router.delete("/:id", protect, authorize("admin"), crud.remove);

module.exports = router;
