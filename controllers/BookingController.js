const Products = require("../models/addProduct");
const Bookings = require("../models/booking");

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
