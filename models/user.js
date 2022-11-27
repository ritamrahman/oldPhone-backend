const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please email address"],
    trim: true,
  },
  role: {
    type: String,
    required: [true, "please enter role"],
    default: "buyer",
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    required: [true, "please enter appointment time"],
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", userSchema);
