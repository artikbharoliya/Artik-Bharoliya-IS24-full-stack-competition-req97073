
const express = require("express");
const routerProduct = express.Router();

let controller = require("../controller/productController");

routerProduct.post("/", controller.createProduct);

routerProduct.get("/", controller.getAllProducts);

routerProduct.put("/", controller.updateProduct);

routerProduct.delete("/", controller.deleteProduct);

module.exports = routerProduct;