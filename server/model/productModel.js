const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

const productModel = mongoose.model("student", productSchema);
module.exports = productModel;

