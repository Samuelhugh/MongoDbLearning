// Requiring Mongoose for this file to operate. Importing it using Require
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/testmongodb";

// Using Mongoose to connect MongoDB
// Mongoose will create a Database for me if the one I use does not exist when I create my first Document
mongoose
  .connect(mongoURI, {
    // I use these to get rid of the deprecation messages in my terminal
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO MONGDB!");
  })
  .catch((err) => {
    console.log("ERROR IN DB CONNECTION!", err);
  });
