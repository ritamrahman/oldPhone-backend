const Products = require("../models/addProduct");
const Users = require("../models/user");

// add new product
exports.addProduct = async (req, res, next) => {
  let user = await Users.findOne({ email: req.params.email });

  req.body.SellerName = user._id;

  const addProduct = await Products.create(req.body);

  res.status(201).json({
    success: true,
    addProduct,
  });
};

// get all products
exports.getAllProducts = async (req, res, next) => {
  const query = {};

  const allProducts = await Products.find(query);

  res.status(201).json({
    success: true,
    allProducts,
  });
};

// get all products by ctg
exports.getFilterProducts = async (req, res, next) => {
  let product = await Products.find({ category: req.params.ctg });

  if (!product) {
    return "Product not found", 404;
  }
  let count = product.length;

  res.status(200).json({
    success: true,
    count,
    product,
  });
};

// update product
exports.updateProduct = async (req, res, next) => {
  let product = await Products.findById(req.params.id);

  if (!product) {
    return "Product not found", 404;
  }

  // product update function
  product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Product update successfully!",
    product,
  });
};

// delete product
exports.deleteProduct = async (req, res, next) => {
  let product = await Products.findById(req.params.id);

  if (!product) {
    return "Product not found", 404;
  }

  // product update function
  product = await Products.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully!",
    product,
  });
};
