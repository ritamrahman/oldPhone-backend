const express = require("express");
const cors = require("cors");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getFilterProducts,
  getProductsByEmail,
  getAllADProducts,
  getProductById,
  deleteAllProducts,
} = require("./controllers/productsController");
const {
  addUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllBuyers,
  getAllSellers,
} = require("./controllers/userControler");
const { addBooking, getMyBookings, deleteAllBookings, getBookings } = require("./controllers/BookingController");
const { addCategory, getCategories } = require("./controllers/categoryController");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.get("/", async (req, res) => {
  res.send("server running...");
});

// product route
app.post("/product/:email", addProduct); //add product
app.get("/products", getAllProducts); //get all product
// app.get("/singleProduct/:id", getProductById); //get single product by id
app.get("/products/:id", getFilterProducts); //get all product by ctg
app.get("/myproducts/:email", getProductsByEmail); //get all product by email
app.get("/adproducts", getAllADProducts); //get all ad products
app.put("/product/:id", updateProduct); //update single product
app.delete("/product/:id", deleteProduct); //delete single product
app.delete("/deleteallproducts", deleteAllProducts); //delete all product

// category route
app.post("/category", addCategory); //add category
app.get("/categories", getCategories); //get categories

// booking route
app.post("/booking/:id", addBooking); //add User
app.get("/users/:email", getMyBookings); //get my all bookings
app.get("/bookings", getBookings); //get my all bookings
app.delete("/deleteallbookings", deleteAllBookings); //delete all product
// app.put("/user/:id", updateUser); //update single User
// app.delete("/user/:id", deleteUser); //delete single User

// user route
app.post("/user/:email", addUser); //add User
app.get("/user/:email", getSingleUser); //get getSingleUser by email
app.get("/buyers", getAllBuyers); //get gall buyers
app.get("/sellers", getAllSellers); //get gall sellers
app.get("/users", getAllUsers); //get all User
app.put("/user/:email", updateUser); //update single User
app.delete("/user/:id", deleteUser); //delete single User

module.exports = app;
