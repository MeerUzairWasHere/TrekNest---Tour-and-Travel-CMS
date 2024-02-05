import { StatusCodes } from "http-status-codes";
import Booking from '../models/Booking.js'
import { BadRequestError } from "../errors/customErrors.js";
import Package from "../models/Package.js";
 


export const createBooking = async (req,res)=>{
  req.body.userId = req.user.userId
  
  if(!req.body.userId){
    throw new BadRequestError("UserId is required!")
  }

  const packageAvailability = await Package.findOne({ _id: req.body.packageId, availability: "sold out" });

if (packageAvailability) {
    throw new Error("This package is currently sold out.");
}

  const existingBooking = await Booking.findOne({userId:req.user.userId,packageId:req.body.packageId,bookingStatus:"pending"})
  
  if(existingBooking){
    throw new BadRequestError("You have already booked this package!")
  }



  
  
  const booking = await Booking.create(req.body);

   const currentPackage = await Package.findOne({_id:booking?.packageId})
  
  const increaseCount = currentPackage?.numberOfBookings + 1 

   await Package.findOneAndUpdate({_id:booking?.packageId},{numberOfBookings:increaseCount}, {
    new: true,
    runValidators: true,
  })
  

  res.status(StatusCodes.OK).json({ booking });
}

export const getAllBookings = async (req,res)=>{
  const bookings = await Booking.find({userId:req.user.userId}).populate({path:'packageId', select:"packageTitle startingPrice"}).populate({path:'userId', select:"name email phoneNumber"}).sort({ createdAt: -1 });
  const totalBookings = await Booking.countDocuments({userId:req.user.userId});
  res.status(StatusCodes.OK).json({ totalBookings,bookings });
}

export const getAllBookingsForAdmin = async (req,res)=>{
  const bookings = await Booking.find({}).populate({path:'userId', select:"name email phoneNumber"}).populate({path:'packageId', select:"packageTitle startingPrice"}).sort({ createdAt: -1 });
  const totalBookings = await Booking.countDocuments();
  res.status(StatusCodes.OK).json({ totalBookings ,bookings, });
}

export const getSingleBooking = async (req,res)=>{
const {id} = req.params;
const booking = await Booking.findOne({_id:id})
res.status(StatusCodes.OK).json({ booking });
}

export const updateBooking  = async (req,res)=>{
const {id} = req.params;
  await Booking.findOneAndUpdate({ _id: id }, req.body, {
    new: true,  
    runValidators: true,
  });

 
  res.status(StatusCodes.OK).json({ msg:"Booking Updated Successfully"});
}

export const deleteBooking = async (req,res)=>{
const {id} = req.params;
await Booking.findOneAndDelete({_id:id})

  res.status(StatusCodes.OK).json({ msg:"Booking Deleted Successfully" });
}
