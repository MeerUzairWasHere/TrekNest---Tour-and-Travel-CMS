import { StatusCodes } from "http-status-codes";
import Booking from '../models/Booking.js'
import { BadRequestError } from "../errors/customErrors.js";


export const createBooking = async (req,res)=>{

  req.body.userId = req.user.userId

  if(!req.body.userId){
    throw new BadRequestError("UserId is required!")
  }
  const booking = await Booking.create(req.body);

  res.status(StatusCodes.OK).json({ booking });
}

export const getAllBookings = async (req,res)=>{
  const bookings = await Booking.find({userId:req.user.userId}).populate({path:'userId', select:"name email phoneNumber"}).populate({path:'packageId', select:"packageTitle startingPrice"}).sort({ createdAt: -1 });
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
