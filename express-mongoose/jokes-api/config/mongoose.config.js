// I Need to require Mongoose for every file that needs it
const mongoose = require("mongoose");
// Why do I need this line of code?
const mongoURI = "mongodb://localhost/jokes-api";

mongoose
  .connect(mongoURI, {
    // I use these to get rid of Deprecation messages in my terminal
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO MONGODB");
  })
  .catch((err) => {
    console.log("ERROR IN DB CONNECTION!", err);
  });
