import mongoose from "mongoose";
import Package from "./Package.js";

// Define schema for booking
const bookingSchema = new mongoose.Schema({
   bookingNumber: {
    type: Number,
    default:1,
  },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    },
  startDate: {
    type: Date,
    required: true
  },
  numberOfPersons: {
    type: Number,
    required: true
  },
   bookingStatus: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled'],
    default: 'pending'
  },
  totalPrice: {
    type: Number,
    required: true
  },
}, 
{ 
  timestamps: true
}
);

 bookingSchema.pre('save', async function(next) {
   try {
     // Find the latest booking in the database
     const latestBooking = await this.constructor.findOne({}, {}, { sort: { 'createdAt': -1 } });
     // If no booking found, set booking number to 1
     if (!latestBooking) {
       this.bookingNumber = 1;
     } else {
       // Increment the booking number by 1
       this.bookingNumber = latestBooking.bookingNumber + 1;
     }
     next();
   } catch (error) {
     next(error);
   }
 });




// Create Booking model
export default mongoose.model('Booking', bookingSchema);

 