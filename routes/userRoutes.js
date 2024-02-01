import { Router } from "express";
const router = Router();
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authentication.js";
import {
  showCurrentUser,
  updateUser,
  updateUserPassword,
} from "../controllers/userController.js";
import {
  validateUpdateUserInput,
  validateUpdatePasswordInput,
} from "../middleware/validationMiddleware.js";

router.route("/").get(authenticateUser, authorizePermissions("admin"));

router.route("/current-user").get(authenticateUser, showCurrentUser);
router
  .route("/updateUser")
  .patch(authenticateUser, validateUpdateUserInput, updateUser);
router
  .route("/updateUserPassword")
  .patch(validateUpdatePasswordInput, authenticateUser, updateUserPassword);

export default router;
