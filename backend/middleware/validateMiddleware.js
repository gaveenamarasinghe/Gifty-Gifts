/** Turns express-validator results into a 422 response. */
const { validationResult } = require("express-validator");

module.exports = function validate(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  res.status(422).json({ message: "Validation failed", errors: errors.array() });
};
