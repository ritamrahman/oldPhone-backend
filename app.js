const express = require("express");
const cors = require("cors");
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require("./controllers/productsController");
const { addUser, getAllUsers, updateUser } = require("./controllers/userControler");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.get("/", async (req, res) => {
  res.send("server running...");
});

// product route
app.post("/product", addProduct); //add product
app.get("/products", getAllProducts); //get all product
app.put("/product/:id", updateProduct); //update single product
app.delete("/product/:id", deleteProduct); //delete single product

// user route
app.post("/user", addUser); //add User
app.get("/users", getAllUsers); //get all User
app.put("/user/:id", updateUser); //update single User
// app.delete("/user/:id", deleteUser); //delete single User

module.exports = app;
