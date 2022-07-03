// Importing "Mongoose"
const mongoose = require("mongoose");
// This is my Schema that defines my "Document" structure, default values, validators, etc (with Mongoose interface). The Mongoose Model provides a Interface to the Database for CRUD Operations.
// Why are these PascalCase
const UserSchema = new mongoose.Schema(
  {
    // _id is auto created and is unique
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  {
    // This will create my createdAt and updatedAt for each Instance
    timestamp: true,
  }
);

// .model() will auto pluralize for me
const User = new mongoose.model("User", UserSchema);
// console.log(user.value);
module.exports = User;
