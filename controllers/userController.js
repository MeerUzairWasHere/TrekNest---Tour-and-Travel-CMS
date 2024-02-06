import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/customErrors.js";
import {
  createTokenUser,
  attachCookiesToResponse,
  comparePassword,
  hashPassword,
} from "../utils/index.js";

export const showCurrentUser = async (req, res) => {
 
  res.status(StatusCodes.OK).json({ user: req.user });
};

// update user with user.save()
export const updateUser = async (req, res) => {
  const { email, name,phoneNumber,
    street,
    postalCode,
    city,
    state,
    country } = req.body;

  const user = await User.findOne({ _id: req.user.userId });

    user.name = name;
    user.email = email;
    user.phoneNumber = phoneNumber,
    user.street = street,
    user.postalCode = postalCode,
    user.city = city,
    user.state = state,
    user.country = country

  await user.save();

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

export const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await comparePassword(oldPassword, user.password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const hashedNewPassword = await hashPassword(newPassword);

  user.password = hashedNewPassword;

  await user.save();
  res.status(StatusCodes.OK).json({ msg: "Success! Password Updated." });
};

export const getAllUsers = async (req,res)=>{
  const users = await User.find({ role: "user" }).select("name email phoneNumber street postalCode city state country ") 
  res.status(StatusCodes.OK).json({ users });
}

export const getSingleUserDetail = async (req,res)=>{
  const user = await User.findOne({_id:req?.user?.userId }).select("name email phoneNumber street postalCode city state country ")
  res.status(StatusCodes.OK).json({ user });
}

export const deleteUser = async (req,res)=>{
   await User.findOneAndDelete({ role: "user",_id:req.params.id });
  res.status(StatusCodes.OK).json({ msg:`user deleted successfully!` });
}
