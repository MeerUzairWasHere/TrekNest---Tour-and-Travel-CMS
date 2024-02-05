import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
 tourName: {
    type: String,
    required: true,
  },
  locationName: {
    type: String,
    required: true,
  },
  packageTitle: {
    type: String,
    required: true,
  },
  numberOfBookings:{
    type: Number,
    default:0
  } ,
  days: {
    type: Number, // Assuming the number of days is a numerical value
    required: true,
  },
  nights: {
    type: Number, // Assuming the number of nights is a numerical value
    required: true,
  },
  startingPrice: {
    type: Number, // Assuming the price is a numerical value
    required: true,
  },
  mrpPrice: {
    type: Number, // Assuming the price is a numerical value
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  imgPublicId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  itinerary: {
    type: String,
    required: true,
  },
  includedFeatures: {
    type: [String],
    default: [],
  },
  excludedFeatures: {
    type: [String],
    default: [],
  },
  availability: {
    type: String,
    enum: ['limited', 'available', 'sold out'],
    default: 'available',
  },
  tags: {
    type: [String],
    default: [],
  },
} );
 
export default mongoose.model("Package", PackageSchema);
