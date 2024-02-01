import { Router } from "express";
const router = Router();

import { authenticateUser } from "../middleware/authentication.js";
import {
  validateRegisterInput,
  validateLoginInput,
  validateVerifyEmailInput,
  validateForgotPasswordInput,
  validateResetPasswordInput,
} from "../middleware/validationMiddleware.js";
import {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.delete("/logout", authenticateUser, logout);
router.post("/verify-email", validateVerifyEmailInput, verifyEmail);
router.post("/forgot-password", validateForgotPasswordInput, forgotPassword);
router.post("/reset-password", validateResetPasswordInput, resetPassword);

export default router;
