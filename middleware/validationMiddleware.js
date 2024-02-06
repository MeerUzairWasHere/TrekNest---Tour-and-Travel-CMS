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
  body("name")
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("Email already exists");
      }
    }),
  body("phoneNumber")
    .notEmpty().withMessage("Phone number is required")
    .isLength({ min: 11,max:15 }).withMessage("Phone number must be at least 10 characters long"),
  body("street")
    .notEmpty().withMessage("Street is required")
    .isLength({ min: 3 }).withMessage("Street must be at least 3 characters long"),
  body("postalCode")
    .notEmpty().withMessage("Postal code is required")
    .isLength({ min: 6 }).withMessage("Postal code must be at least 6 characters long"),
  body("city")
    .notEmpty().withMessage("City is required")
    .isLength({ min: 3 }).withMessage("City must be at least 3 characters long"),
  body("state")
    .notEmpty().withMessage("State is required")
    .isLength({ min: 3 }).withMessage("State must be at least 3 characters long"),
  body("country")
    .notEmpty().withMessage("Country is required")
    .isLength({ min: 3 }).withMessage("Country must be at least 3 characters long")
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
 body('tourName').trim().notEmpty().withMessage('Tour name is required'),
 body('itinerary').notEmpty().withMessage('Itinerary isx required').custom(value => {
        // Check for XSS vulnerabilities in the HTML content
        if (!isValidHTMLForXSS(value)) {
            throw new Error('HTML content contains potentially dangerous tags or attributes');
        }
        return true; // Validation passed
    }),
  body('locationName').trim().notEmpty().withMessage('Location name is required'),
  body('packageTitle').trim().notEmpty().withMessage('Package title is required'),
  body('days').trim().notEmpty().withMessage('Days is required').isInt({ min: 1 }).withMessage('Days must be a positive integer'),
  body('nights').trim().notEmpty().withMessage('Nights is required').isInt({ min: 1 }).withMessage('Nights must be a positive integer'),
  body('startingPrice').trim().notEmpty().withMessage('Starting price is required').isFloat({ min: 0 }).withMessage('Starting price must be a positive number'),
  body('mrpPrice').trim().notEmpty().withMessage('MRP price is required').isFloat({ min: 0 }).withMessage('MRP price must be a positive number'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('includedFeatures').notEmpty().withMessage('Included features must be provided and separate by comma " , "'),
  body('excludedFeatures').notEmpty().withMessage('Excluded features must be provided and separate by comma " , "'),
  body('tags').notEmpty().withMessage('Tags must be provided and separate by comma " , "'),
  body('availability').trim().optional().isIn(['limited', 'available', 'sold out']).withMessage('Invalid availability status'),
  body('bookingCount').optional().isInt({ min: 0 }).withMessage('Booking count must be a non-negative integer'),
  body('promotionalOffer').optional().trim(),
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
 

  // Validate packageId
  body('packageId')
    .exists().withMessage('Package ID is required')
    .isMongoId().withMessage('Invalid package ID'),

  // Validate startDate
  body('startDate')
    .exists().withMessage('Start date is required')
    .isISO8601().withMessage('Invalid start date'),


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

// Example function to validate HTML content for XSS
function isValidHTMLForXSS(htmlContent) {
    // Regular expression to check for potentially dangerous tags and attributes
    const regex = /<\s*(script|iframe|style|object|embed|frame|frameset|meta|applet|base|bgsound|blink|link|xml|math|on\w+)[^>]*>/gi;

    // Check if the HTML content matches the regular expression
    if (regex.test(htmlContent)) {
        return false; // Content contains potentially dangerous tags or attributes
    }

    return true; // Content is safe
}