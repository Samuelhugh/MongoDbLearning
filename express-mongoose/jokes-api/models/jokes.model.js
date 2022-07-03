const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: String,
    punchline: String,
  },
  // This will create the "createdAt" and "updatedAt" for each Instance
  { timestamps: true }
);

const Joke = new mongoose.model("Joke", JokeSchema);
module.exports = Joke;
