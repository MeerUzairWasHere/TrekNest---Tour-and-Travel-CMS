import { Router } from "express";
const router = Router();

 

import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authentication.js";


import { getStatsForAdminDashboard } from '../controllers/dashboardController.js'

// Routes for /admin

router.route("/stats").get(authenticateUser,authorizePermissions("admin"),getStatsForAdminDashboard)
  

 export default router;