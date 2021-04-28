const { Router } = require("express");
const User = require("../models/User.model.js");
const Products = require("../models/products.model");

const routeFavorite = Router();

routeFavorite.get("/favorite/:iduser", async (req, res) => {
  try {
    const { iduser } = req.params;
    const findUser = await User.findById(iduser).populate("favorites");
    const favorites = findUser.favorites;
    console.log(favorites);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Erro ao trazer favoritos" });
  }
});

routeFavorite.patch("/favorite/:iduser/add/:idproduct", async (req, res) => {
  try {
    const favoriteAdd = req.body;
    const { iduser, idproduct } = req.params;
    const updatedFavorite = await User.findByIdAndUpdate(
      iduser,
      { $push: { favorites: idproduct } },
      { new: true }
    );
    res.status(200).json(updatedFavorite);
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar favorito" });
  }
});

routeFavorite.patch("/favorite/:iduser/remove/:idproduct", async (req, res) => {
  try {
    const { iduser, idproduct } = req.params;
    const findUser = await User.findById(iduser);
    const index = findUser.favorites.findIndex((i) => i === idproduct);
    findUser.favorites.splice(index, 1);
    findUser.save();

    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover favorito" });
  }
});

module.exports = routeFavorite;
