const { Router } = require("express");

const User = require("../models/User.model.js");
const Address = require("../models/Address.model");
const router = require("./homeRoutes.js");
const perfilRouter = Router();

perfilRouter.get("/perfil/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const perfil = await User.findById(id);
    res.status(200).json(perfil);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar informações do usuàrio" });
  }
});

//CRIAR UM NOVO ENDERECO

perfilRouter.post("/perfil/:id/createaddress", async (req, res) => {
  const { id } = req.params;
  const newAddress = { ...req.body, userId: id };
  try {
    const createdAddress = await Address.create(newAddress);
    res.status(201).json(createdAddress);
  } catch (error) {
    res.status(500).json({ message: "Error while create new Adress" });
  }
});

// Mostrar todos os endereços do usuario
perfilRouter.get("/perfil", async (req, res) => {
  const { id } = req.params;
  try {
    const listAddress = await Address.find(id);
    res.status(200).json(listAddress);
  } catch (error) {
    res.status(500).json({ message: "Server side error on get address" });
  }
});

//EDITAR UM ENDERECO

perfilRouter.patch("/perfil/:id", async (req, res) => {
  try {
    const address = req.body;
    const { id } = req.params;
    const patchAddress = await Address.findByIdAndUpdate(id, address, {
      new: true,
    });
    res.status(201).json(patchAddress);
  } catch (error) {
    res.status(500).json({ message: "Server side error on update Address" });
  }
});

//DELETAR UM ENDERECO

perfilRouter.delete("/perfil/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Address.findByIdAndRemove(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Server side error on delete adress" });
  }
});

perfilRouter.get("/perfil/minhascompras/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userCart = await User.findById(id).populate("cart");
    console.log("carrinho do usuario", userCart);
    const finishedCarts = userCart.cart.filter(
      (cart) => cart.finished === true
    );
    res.status(200).json(finishedCarts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "erro ao trazer minhas compras" });
  }
});

module.exports = perfilRouter;
