import { StatusCodes } from "http-status-codes";
import Booking from '../models/Booking.js'
import Package from '../models/Package.js'
import User from '../models/User.js'

  export const getStatsForAdminDashboard = async (req,res)=>{
    const totalUsers = await User.countDocuments({role:"user"});
    const totalPackages = await Package.countDocuments();
    const totalBookings = await Booking.countDocuments();

    res.status(StatusCodes.OK).json({ stats:[{ statName:"Total Users",statCount:totalUsers  },{statName:"Total Packages",statCount:totalPackages},{ statName:"Total Bookings",statCount:totalBookings  }] });
  }