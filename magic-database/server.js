const express = require("express");
// const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Import routes and give the server access to them.
require("./controllers/project-controllers")(app);

app.listen(PORT, () => {
    console.log("App running on port" , PORT);
});