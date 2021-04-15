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

app.use(cors());

//Routes

const authRoutes = require("./routes/authRoutes");
const perfilRoute = require("./routes/perfil.route")
const route = require("./routes/product.route")
const search = require("./routes/search.route")
const homeRoutes = require("./routes/homeRoutes");
const addressRoutes = require("./routes/perfil.route");

app.use("/", authRoutes);
app.use("/", perfilRoute);
app.use("/", route);
app.use("/", search);
app.use("/", homeRoutes);
app.use("/", addressRoutes);

//Export app

module.exports = app;