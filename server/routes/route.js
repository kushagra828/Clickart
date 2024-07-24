const express = require("express");
const {
  getProductById,
  getProducts,
} = require("../controller/product-controller.js");
const router = express.Router();
const { userSignup, userLogIn } = require("../controller/user-controller");
router.post("/signup", userSignup);
router.post("/login", userLogIn);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);



module.exports = router;
