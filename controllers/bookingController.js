import { formatImage } from "../middleware/multerMiddleware.js";
import cloudinary from "cloudinary";
import { BadRequestError } from "../errors/customErrors.js";
import { StatusCodes } from "http-status-codes";



export const createBooking = async (req,res)=>{
    res.status(StatusCodes.OK).json({ msg:"createBooking" });
}

export const getAllBookings = async (req,res)=>{
  res.status(StatusCodes.OK).json({ msg:"getAllBookings" });
}

export const getSingleBooking = async (req,res)=>{
const {id} = req.params;
res.status(StatusCodes.OK).json({ msg:"getSingleBooking" });
}

export const updateBooking  = async (req,res)=>{
const {id} = req.params;
  res.status(StatusCodes.OK).json({ msg:"Booking Updated Successfully"});
}

export const deleteBooking = async (req,res)=>{
const {id} = req.params;
  res.status(StatusCodes.OK).json({ msg:"Booking Deleted Successfully" });
}
