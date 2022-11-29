const Products = require("../models/addProduct");
const Bookings = require("../models/booking");
const Users = require("../models/user");

// add new booking
exports.addBooking = async (req, res, next) => {
  let product = await Products.findById(req.params.id);

  req.body.product = product._id;

  const addBooking = await Bookings.create(req.body);

  res.status(201).json({
    success: true,
    addBooking,
  });
};

// / get single user bookings
exports.getMyBookings = async (req, res, next) => {
  // let user = await Users.findOne({email:req.params.email});

  let products = await Bookings.find({ userEmail: req.params.email });

  res.status(201).json({
    success: true,
    products,
  });
};

// delete all products
exports.deleteAllBookings = async (req, res, next) => {
  await Bookings.deleteMany({});

  res.status(200).json({
    success: true,
    message: "deleted successfully!",
  });
};
