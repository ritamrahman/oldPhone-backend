const Categories = require("../models/category");

// add new booking
exports.addCategory = async (req, res, next) => {
  const category = await Categories.create(req.body);

  res.status(201).json({
    success: true,
    category,
  });
};
