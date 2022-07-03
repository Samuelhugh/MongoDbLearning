// Importing from the User Model/Collection or variable
const User = require("../models/user.model");

// Find all
const findAllUsers = function (req, res) {
  // For Specific searches "{}"
  User.find({})
    .then((allDaUsers) => {
      res.json({ users: allDaUsers });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong!", error: err });
    });
};

// Find one
const findOneSingleUser = (req, res) => {
  // I can also use "findById" here
  User.findOne({ _id: req.params.id })
    .then((oneSingleUser) => {
      res.json({ user: oneSingleUser });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// Create User
const createNewUser = (req, res) => {
  User.create(req.body)
    .then((newlyCreatedUser) => {
      // Example of using Express with the (status)
      res.status(201).json({ user: newlyCreatedUser });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
};

// Update a User
const updateExistingUser = (req, res) => {
  // I can also use "findByIdAndUpdate"
  User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedUser) => {
      res.json({ user: updatedUser });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// Deleting a User
const deleteOneUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong!", error: err });
    });
};

module.exports = {
  findAllUsers,
  findOneSingleUser,
  createNewUser,
  updateExistingUser,
  deleteOneUser,
};
