// Importing Express
const express = require("express");
// Creating An "App" instance
const app = express();

require("./config/mongoose.config");

// Body parser (req.body), fixes body issues
app.use(express.json(), express.urlencoded({ extended: true }));

// Same as "require("./routes/user.routes")(app);"
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
