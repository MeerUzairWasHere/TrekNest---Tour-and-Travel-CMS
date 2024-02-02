import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
  tourName: String,
  locationName: String,
  packageTitle: String,
  days: String,
  nights: String,
  startingPrice: String,
  mrpPrice: String,
  imgUrl: String,
  imgPublicId:String
} );
 
export default mongoose.model("Package", PackageSchema);
