const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/path/swagger-output.json');

const app = express();
const port = process.env.PORT || 3001;

const connectToDB = require('./database/dbConfig');
// run the mongoDB connection
connectToDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/products', require('./routes/productRoutes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// API endpoint for checking the status of server

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'Healthy',
  });
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
