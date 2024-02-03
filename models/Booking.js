import mongoose from "mongoose";

// Define schema for booking
const bookingSchema = new mongoose.Schema({
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
  endDate: {
    type: Date, //year month day
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

// Create Booking model
export default   mongoose.model('Booking', bookingSchema);

 