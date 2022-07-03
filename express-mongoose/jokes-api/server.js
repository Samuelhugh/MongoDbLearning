const express = require("express");
const app = express();
require("./config/mongoose.config");

// Body Parser (req.body), fixes body issues
app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/jokes.routes")(app);

app.listen(8000, () =>
  console.log("The Server is up and running on Port 8000")
);
