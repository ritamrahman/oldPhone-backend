const Users = require("../models/user");

// add new user
exports.addUser = async (req, res, next) => {
  const addUser = await Users.create(req.body);

  res.status(201).json({
    success: true,
    addUser,
  });
};

// get all users
exports.getAllUsers = async (req, res, next) => {
  const query = {};

  const allUsers = await Users.find(query);

  res.status(201).json({
    success: true,
    allUsers,
  });
};

// getSingleUser
exports.getSingleUser = async (req, res, next) => {
  let user = await Users.findOne({ email: req.params.email });

  if (!user) {
    // return res.status(404).json({
    //   success: false,
    //   message: "user update successfully!",
    // });
    return "user not found", 404;
  }

  res.status(200).json({
    success: true,
    user,
    count: user.length,
  });
};
// update user
exports.updateUser = async (req, res, next) => {
  let user = await Users.findById(req.params.id);

  if (!user) {
    return "user not found", 404;
  }

  // user update function
  user = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "user update successfully!",
    user,
  });
};

// delete user
exports.deleteUser = async (req, res, next) => {
  let user = await Users.findById(req.params.id);

  if (!user) {
    return "user not found", 404;
  }

  // user update function
  user = await Users.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "user deleted successfully!",
    user,
  });
};
