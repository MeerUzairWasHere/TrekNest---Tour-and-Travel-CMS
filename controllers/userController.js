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
  const { email, name } = req.body;

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;

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
