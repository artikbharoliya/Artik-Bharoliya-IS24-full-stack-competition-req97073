const ServerError = require('../helpers/ServerError');
const productModel = require('../model/productModel');

/*
 Controller for all the products related API endpoints.
*/

exports.createProduct = async (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'API endpoint to create a Product'
  /* #swagger.responses[200] = {
              description: "Returns the created product",
          }   
  */
  const productName = req.body.productName;
  const productOwnerName = req.body.productOwnerName;
  const developers = req.body.developers;
  const scrumMasterName = req.body.scrumMasterName;
  const startDate = req.body.startDate;
  const methodology = req.body.methodology;


  if (!productName || !productOwnerName || !developers || !scrumMasterName || !startDate || !methodology || developers?.length > 5) {
    res.status(500).json(new ServerError("Unable to create a product! Please provide all the data!", req.baseUrl));
  } else {
    const newProduct = new productModel({
      productName,
      productOwnerName,
      developers,
      scrumMasterName,
      startDate,
      methodology
    });
    newProduct.save()
      .then(data => res.json(data))
      .catch(err => {
        res.status(500).json(new ServerError("Couldn't create a product in the database", req.baseUrl));
      });
  }
};

exports.getAllProducts = async (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'API endpoint to get all the Products'
  /* #swagger.responses[200] = {
            description: "Returns all the products",
        }   
  */
  productModel.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(500).json(new ServerError("can't get all the products", req.baseUrl));
    })
};

exports.updateProduct = async (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'API endpoint to update a particular product by product's _id'
  /* #swagger.responses[200] = {
          description: "Returns the updated product",
      }   
  */
  const id = req.body._id;
  try {
    const response = await productModel.findOneAndUpdate({ _id: id }, {
      productName: req.body.productName,
      productOwnerName: req.body.productOwnerName,
      developers: req.body.developers,
      scrumMasterName: req.body.scrumMasterName,
      startDate: req.body.startDate,
      methodology: req.body.methodology
    }, { new: true });
    res.json(response);
  } catch {
    res.status(500).json(new ServerError("Cannot find the given id in the database", req.baseUrl));
  }

}

exports.deleteProduct = async (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'API endpoint to delete a particular product by product's _id'
  /* #swagger.responses[200] = {
          description: "Returns the deleted product",
      }   
  */
  const id = req.body._id;
  productModel.findOneAndDelete({ _id: id })
    .then(data => res.json(data))
    .catch(err => {
      res.status(500).json(new ServerError("Cannot find the given id in the database", req.baseUrl));
    })
}