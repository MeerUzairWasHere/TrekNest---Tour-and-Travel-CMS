import mongoose from "mongoose";
import {body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customErrors.js";

//local imports
import User from "../models/User.js";
import Package from "../models/Package.js";
import Booking from "../models/Booking.js  ";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        const firstMessage = errorMessages[0];

        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("phoneNumber").notEmpty().withMessage("phoneNumber is required"),
  body("street").notEmpty().withMessage("street is required"),
  body("postalCode").notEmpty().withMessage("postalCode is required"),
  body("city").notEmpty().withMessage("city is required"),
  body("state").notEmpty().withMessage("state is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exists");
      }
    }),body("phoneNumber").notEmpty().withMessage("phoneNumber is required"),
  body("street").notEmpty().withMessage("street is required"),
  body("postalCode").notEmpty().withMessage("postalCode is required"),
  body("city").notEmpty().withMessage("city is required"),
  body("state").notEmpty().withMessage("state is required"),
  body("country").notEmpty().withMessage("country is required"),
]);

export const validateUpdatePasswordInput = withValidationErrors([
  body("oldPassword").notEmpty().withMessage("oldPassword is required"),
  body("newPassword")
    .notEmpty()
    .withMessage("newPassword is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateVerifyEmailInput = withValidationErrors([
  body("verificationToken")
    .notEmpty()
    .withMessage("verificationToken is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
]);

export const validateForgotPasswordInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
]);

export const validateResetPasswordInput = withValidationErrors([
  body("token").notEmpty().withMessage("token is required"),
  body("newPassword")
    .notEmpty()
    .withMessage("newPassword is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
]);
 
export const validatePackagesInput = withValidationErrors([
  body('tourName').notEmpty().withMessage("tourName is required"),
  body('locationName').notEmpty().withMessage("locationName is required"),
  body('packageTitle').notEmpty().withMessage("packageTitle is required"),
  body('days').notEmpty().withMessage("days is required"),
  body('nights').notEmpty().withMessage("nights is required"),
  body('startingPrice').notEmpty().withMessage("startingPrice is required"),
  body('mrpPrice').notEmpty().withMessage("mrpPrice is required")
]);

export const validateIdParamForPackages = withValidationErrors([
  param("id").custom(async (value) => {

    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");

    const currentPackage = await Package.findById(value);
    if (!currentPackage ) throw new NotFoundError(`No package with id ${value}`);
  }),
]);

export const validateBookingsInput = withValidationErrors([
  body('userId')
    .exists().withMessage('User ID is required')
    .isMongoId().withMessage('Invalid user ID'),

  // Validate packageId
  body('packageId')
    .exists().withMessage('Package ID is required')
    .isMongoId().withMessage('Invalid package ID'),

  // Validate startDate
  body('startDate')
    .exists().withMessage('Start date is required')
    .isISO8601().withMessage('Invalid start date'),

  // Validate endDate
  body('endDate')
    .exists().withMessage('End date is required')
    .isISO8601().withMessage('Invalid end date'),

  // Validate numberOfPersons
  body('numberOfPersons')
    .exists().withMessage('Number of persons is required')
    .isInt({ min: 1 }).withMessage('Number of persons must be a positive integer'),

  // Validate bookingStatus
  body('bookingStatus')
    .optional()
    .isIn(['pending', 'confirmed', 'canceled']).withMessage('Invalid booking status'),

  // Validate totalPrice
  body('totalPrice')
    .exists().withMessage('Total price is required')
    .isNumeric().withMessage('Total price must be a number'),
]);

export const validateIdParamForBookings = withValidationErrors([
  param("id").custom(async (value) => {
  const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
  if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");
  const currentBooking = await Booking.findById(value);
  if (!currentBooking ) throw new NotFoundError(`No Booking with id ${value} found!`);
})]);

/*
userId
packageId
startDate
endDate
numberOfPersons
totalPrice

*/