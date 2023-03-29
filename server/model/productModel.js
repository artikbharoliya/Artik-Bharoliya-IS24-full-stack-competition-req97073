const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productOwnerName: {
    type: String,
    required: true,
  },
  developers: {
    type: [String],
    required: true,
  },
  scrumMasterName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  methodology: {
    type: String,
    enum: ['Agile', 'Waterfall'],
    required: true,
  },
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;

