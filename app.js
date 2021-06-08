require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authMiddleware = require("./middlewares/auth.middleware")
    //connect to DB
require("./config/db.config");

const app = express();

//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());



//Routes

const authRoutes = require("./routes/authRoutes");
const perfilRoute = require("./routes/perfil.route");
const route = require("./routes/product.route");
const search = require("./routes/search.route");
const homeRoutes = require("./routes/homeRoutes");
const addressRoutes = require("./routes/perfil.route");
const routeFavorite = require("./routes/favorites.route")

app.use("/", authRoutes);
app.use("/", route);
app.use("/", search);
app.use("/", homeRoutes);


app.use(authMiddleware);
// Rotas Privadas que precisam de jwt
app.use("/", perfilRoute);
app.use("/", addressRoutes);
app.use("/", routeFavorite)
module.exports = app;