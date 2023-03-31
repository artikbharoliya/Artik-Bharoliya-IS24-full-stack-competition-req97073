const mongoose = require('mongoose');

// Model representing a Product.
let productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productOwnerName: {
    type: String,
    required: true,
  },

  // FUTURE: add limit to the developers.
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

