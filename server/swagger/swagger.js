const swaggerAutogen = require('swagger-autogen')();


const doc = {
  info: {
    title: 'IS24',
    description: 'IS24 code challenge',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './path/swagger-output.json';
const endpointsFiles = ['../index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);