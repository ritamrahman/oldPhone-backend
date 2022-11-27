const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter title"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "please add an image"],
    trim: true,
  },
  createdAt: {
    type: Date,
    required: [true, "please enter appointment time"],
    default: Date.now,
  },
});

module.exports = mongoose.model("Categories", categorySchema);
