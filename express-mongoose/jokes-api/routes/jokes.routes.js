const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.findAll);
  app.post("/api/jokes", JokeController.createNewJoke);
  app.get("/api/jokes/:id", JokeController.findOne);
  app.put("/api/jokes/:id", JokeController.updateJoke);
  app.delete("/api/jokes/:id", JokeController.deleteOneJoke);
};
