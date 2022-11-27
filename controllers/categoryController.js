const Categories = require("../models/category");

// add new category
exports.addCategory = async (req, res, next) => {
  const category = await Categories.create(req.body);

  res.status(201).json({
    success: true,
    category,
  });
};

// get all categories
exports.getCategories = async (req, res, next) => {
  const category = await Categories.find({});

  res.status(201).json({
    success: true,
    category,
  });
};
