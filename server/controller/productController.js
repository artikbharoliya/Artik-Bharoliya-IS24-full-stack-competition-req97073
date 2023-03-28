const productModel = require('../model/productModel');

exports.createProduct = async (req, res) => {

  res.json({
    message: "Hello created a product"
  });
};

exports.getAllProducts = async (req, res) => {
  res.json({
    message: "Here is the list of all the products"
  });
};

exports.updateProduct = async (req, res) => {
  res.json({
    message: "Product updated"
  })
}

exports.deleteProduct = async (req, res) => {
  res.json({
    message: "Product deleted"
  })
}