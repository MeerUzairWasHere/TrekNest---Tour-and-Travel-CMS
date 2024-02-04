import { Router } from "express";
const router = Router();

import {
  validateBookingsInput, 
  validateIdParamForBookings 
} from "../middleware/validationMiddleware.js";

import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authentication.js";


import { 
createBooking,
getAllBookings,
getAllBookingsForAdmin,
getSingleBooking,
updateBooking,
deleteBooking } from '../controllers/bookingController.js'

// Routes for /admin
router.route("/admin")
  .get(authenticateUser,getAllBookings)
  .post(authenticateUser,validateBookingsInput, createBooking);

router.route("/adminOnly").get(authenticateUser,authorizePermissions("admin"),getAllBookingsForAdmin)


// Routes for /admin/:id
router.route("/admin/:id")
  .get(authenticateUser , authorizePermissions("admin"),validateIdParamForBookings,getSingleBooking)
  .patch(authenticateUser, authorizePermissions("admin"),validateIdParamForBookings, validateBookingsInput, updateBooking)
  .delete(authenticateUser, authorizePermissions("admin"),validateIdParamForBookings,deleteBooking);


 export default router;