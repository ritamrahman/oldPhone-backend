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
