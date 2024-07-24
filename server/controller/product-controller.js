const Product = require('../Model/productSchema');

module.exports.getProducts = async (request, response) => {
  try {
    const products = await Product.find({});

    response.json(products);
  } catch (error) {}
};

module.exports.getProductById = async (request, response) => {
  try {
    const products = await Product.findOne({ id: request.params.id });
    response.json(products);
  } catch (error) {}
};
