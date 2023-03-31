const swaggerAutogen = require('swagger-autogen')();


const doc = {
  info: {
    title: 'IS24',
    description: 'IS24 code challenge',
  },
  host: 'localhost:3000',
  basePath: "/api",
  consumes: ['application/json'],
  produces: ['application/json'],
  schemes: ['http'],
  tags: [
    {
      "name": "Products",
      "description": "Endpoints"
    }
  ],
  definitions: {
    Products: {
      productName: "ICBC",
      productOwnerName: "John Smith",
      developers: ["David Johnson", "Shane Watson"],
      scrumMasterName: "Cameron White",
      startDate: "08/10/1998",
      methodology: "Agile",
    },
    Products: {
      productName: "ICBC",
      productOwnerName: "John Smith",
      developers: ["David Johnson", "Shane Watson"],
      scrumMasterName: "Cameron White",
      startDate: "08/10/1998",
      methodology: "Agile",
    }
  }
};

const outputFile = './path/swagger-output.json';
const endpointsFiles = ['../index.js', '../controller/productController.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);