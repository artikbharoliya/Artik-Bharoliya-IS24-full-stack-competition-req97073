const mongoose = require("mongoose");
require('dotenv').config();

// Function to make a connection with the mongoDB Atlas database.
const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.mongodb_uri);
    mongoose.connection.useDb("IS24");

    console.log("Connected to IS24 Database");
    console.log(connection.connection.host);
  }
  catch (err) {
    console.log("Connection Error", err);
  }
}

module.exports = connectToDB;