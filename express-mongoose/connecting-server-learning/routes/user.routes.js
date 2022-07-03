// Importing the user controller model/collection or variable
const UserController = require("../controllers/user.controller");

// The Order Of These Routes Matter!
module.exports = (app) => {
  app.get("/api/users", UserController.findAllUsers);
  app.post("/api/users", UserController.createNewUser);
  // Why don't I have to specify "_id" here?
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/:id", UserController.updateExistingUser);
  app.delete("/api/users/:id", UserController.deleteOneUser);
};
