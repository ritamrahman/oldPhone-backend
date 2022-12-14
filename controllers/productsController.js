const Products = require("../models/addProduct");
const Users = require("../models/user");

// add new product
exports.addProduct = async (req, res, next) => {
  let user = await Users.findOne({ email: req.params.email });

  req.body.SellerName = user?._id;

  console.log(req.body);
  const addProduct = await Products.create(req.body);

  res.status(201).json({
    success: true,
    addProduct,
  });
};

// get all products
exports.getAllProducts = async (req, res, next) => {
  const query = {};

  const allProducts = await Products.find(query)
    .populate({ path: "category", select: "title" })
    .populate({ path: "SellerName", select: ["name", "email"] })
    .exec();

  res.status(201).json({
    success: true,
    allProducts,
  });
};

// get product by id
// exports.getProductById = async (req, res, next) => {
//   // let product = await Products.findById(req.params.id);

//   // if (!product) {
//   //   return "Product not found", 404;
//   // }

//   // product update function
//   let product = await Products.find({ _id: req.params.id })
//     .populate({ path: "SellerName" })
//     .populate({ path: "category" });

//   res.status(200).json({
//     success: true,
//     product,
//   });
// };

// get all products by ctg
exports.getFilterProducts = async (req, res, next) => {
  let product = await Products.find({ category: req.params.id })
    .populate({ path: "category" })
    .populate({ path: "SellerName" })
    .exec();

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
// get all products by email
exports.getProductsByEmail = async (req, res, next) => {
  let user = await Users.findOne({ email: req.params.email });

  let product = await Products.find({ SellerName: user?._id })
    .populate({ path: "category", select: "title" })
    .populate({ path: "SellerName" })
    .exec();

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
// get all Advertise products
exports.getAllADProducts = async (req, res, next) => {
  let product = await Products.find({ isAdvertise: true })
    .populate({ path: "category", select: "title" })
    .populate({ path: "SellerName", select: ["name", "email"] })
    .exec();

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

// update product single product
exports.updateProduct = async (req, res, next) => {
  let product = await Products.findById(req.params.id);

  if (!product) {
    return "Product not found", 404;
  }

  // product update function
  product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
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

// delete all products
exports.deleteAllProducts = async (req, res, next) => {
  await Products.deleteMany({});

  res.status(200).json({
    success: true,
    message: "Product deleted successfully!",
  });
};
