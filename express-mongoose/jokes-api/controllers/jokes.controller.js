const Joke = require("../models/jokes.model");

// Find All
const findAll = (req, res) => {
  // To find all use ".find()" with a Object
  Joke.find()
    .then((allJokes) => {
      // Using Express for the ".status()" method
      res.status(201).json({ allJokes });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Find One
// Why does this not work when I use "module.exports.findOne"?
const findOne = (req, res) => {
  Joke.findById({ _id: req.params.id })
    .then((oneJoke) => {
      res.status(201).json(oneJoke);
    })
    .catch((err) => {
      res.status(500).json(`Something went wrong: ${err}`);
    });
};

// Create One
const createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => {
      res.status(201).json(newJoke);
    })
    .catch((err) => {
      res.status(500).json(`Something went wrong in create: ${err}`);
    });
};

// Update One
const updateJoke = (req, res) => {
  Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.status(201).json(updatedJoke);
    })
    .catch((err) => {
      res.status(500).json(`Something went wrong in update: ${err}`);
    });
};

// Delete One
const deleteOneJoke = (req, res) => {
  Joke.findByIdAndDelete({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(`Something went wrong in delete ${err}`);
    });
};

// Exporting my CRUD Functionality
module.exports = {
  findAll,
  findOne,
  createNewJoke,
  updateJoke,
  deleteOneJoke,
};
