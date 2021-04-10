require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//connect DB
require("./config/db.config");

const app = express();

//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes

const authRoutes = require("./routes/authRoutes");


const perfilRoute = require("./routes/perfil.route");
const homeRoutes = require("./routes/homeRoutes");

app.use("/", authRoutes);
app.use("/", perfilRoute);
app.use("/", homeRoutes);



//Export app

module.exports = app;