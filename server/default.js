const { products } = require("./constants/products.js");
const Product = require("./Model/productSchema.js");

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

module.exports = DefaultData;
