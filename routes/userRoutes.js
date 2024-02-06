import { Router } from "express";
const router = Router();
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authentication.js";
import {
  deleteUser,
  getAllUsers,
  getSingleUserDetail,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} from "../controllers/userController.js";
import {
  validateUpdateUserInput,
  validateUpdatePasswordInput,
} from "../middleware/validationMiddleware.js";


router.route("/current-user").get(authenticateUser, showCurrentUser);

router
  .route("/updateUser")
  .patch(authenticateUser, validateUpdateUserInput, updateUser);
router
  .route("/updateUserPassword")
  .patch(validateUpdatePasswordInput, authenticateUser, updateUserPassword);

  //only admin routes
router
  .route("/admin")
  .get(authenticateUser,authorizePermissions("admin"), getAllUsers);
  
  router.route("/admin/getUserDetail").get(authenticateUser, getSingleUserDetail)

router
  .route("/admin/:id")
  .delete(authenticateUser,authorizePermissions("admin"), deleteUser);
 
  

export default router;
