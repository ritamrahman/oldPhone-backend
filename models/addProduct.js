const mongoose = require("mongoose");

const addProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter product title"],
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please enter product category"],
    ref: "Categories",
  },
  image: {
    type: String,
    required: [true, "please add a image of your product"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "please enter location"],
    trim: true,
  },
  originalPrice: {
    type: Number,
    required: [true, "please enter original price of your product"],
    trim: true,
  },
  resalePrice: {
    type: Number,
    required: [true, "please enter resale price of your product"],
    trim: true,
  },
  yearsOfUse: {
    type: Number,
    required: [true, "please enter years of use of your product"],
    trim: true,
  },
  SellerName: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "please enter resale price of your product"],
    ref: "Users",
  },
  isAdvertise: {
    type: Boolean,
    required: true,
    default: false,
  },
  isPayed: {
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

module.exports = mongoose.model("Products", addProductSchema);

// todo:
// add seller name
