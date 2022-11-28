const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "please enter name"],
    trim: true,
  },
  userEmail: {
    type: String,
    required: [true, "please email address"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "please add address"],
    trim: true,
  },
  price: {
    type: String,
    required: [true, "please add price"],
    trim: true,
  },
  number: {
    type: Number,
    required: [true, "please add number"],
    trim: true,
  },
  productName: {
    type: String,
    required: [true, "please enter product"],
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please enter product"],
    ref: "Products",
  },
  createdAt: {
    type: Date,
    required: [true, "please enter appointment time"],
    default: Date.now,
  },
});

module.exports = mongoose.model("Bookings", bookingSchema);
