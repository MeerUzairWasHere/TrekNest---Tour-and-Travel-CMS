import { StatusCodes } from "http-status-codes";
import Package from '../models/Package.js'
import { formatImage } from "../middleware/multerMiddleware.js";
import cloudinary from "cloudinary";
import { BadRequestError } from "../errors/customErrors.js";


export const addNewPackage = async (req,res)=>{
  // Check if files are included in the request
  if (req.file) {
    // Format and upload screenshot
    const image = formatImage(req.file);
    
    // Upload image to Cloudinary
    const response = await cloudinary.v2.uploader.upload(image, {
      folder: "trekNest",
    });
    req.body.imgUrl = response.secure_url;
    req.body.imgPublicId = response.public_id;
  }
  

    if(!req.body.imgUrl){
    throw new BadRequestError("Image is required");
    }

    const newPackage = await Package.create(req.body);
  res.status(StatusCodes.OK).json({ newPackage });
}

export const getAllPackages = async (req,res)=>{
const packages = await Package.find({})
  res.status(StatusCodes.OK).json({ packages });
}

export const getSinglePackage = async (req,res)=>{
const {id} = req.params;
const packageInfo = await Package.findOne({_id:id})
res.status(StatusCodes.OK).json({ packageInfo });
}

export const updatePackage = async (req,res)=>{

const currentPackage = await Package.findOne({ _id: req.params.id });
  if (req.file) {
    await cloudinary.v2.uploader.destroy(currentPackage.imgPublicId);
    // Format and upload screenshot
    const image = formatImage(req.file);
    // Upload image to Cloudinary
    const response = await cloudinary.v2.uploader.upload(image, {
      folder: "trekNest",
    });
    req.body.imgUrl = response.secure_url;
    req.body.imgPublicId = response.public_id;
  }

  

  await Package.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

 

  res.status(StatusCodes.OK).json({ msg:"Package updated Successfully!"});
}

export const deletePackage = async (req,res)=>{
const {id} = req.params;



  const deletedPackage =  await Package.findOneAndDelete({_id:id})

    // Delete project images from Cloudinary
  if (deletedPackage.imgPublicId) {
    await cloudinary.v2.uploader.destroy(deletedPackage.imgPublicId);
  }
  res.status(StatusCodes.OK).json({ msg:"Package deleted Successfully!" });
}
