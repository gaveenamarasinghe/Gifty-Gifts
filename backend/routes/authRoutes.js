const express = require("express");

const router = express.Router();

const {
  register,
  verifyEmail,
  login,
  me,
  forgotPassword,
  setRole,
} = require("../controllers/authController");

// Register
router.route("/register").post(register);

// Verify email
router.route("/verify-email").get(verifyEmail);

// Login
router.route("/login").post(login);

// Current user
router.route("/me").get(me);

// Forgot password
router.route("/forgot-password").post(forgotPassword);

// Update role
router.route("/role/:uid").patch(setRole);

module.exports = router;
