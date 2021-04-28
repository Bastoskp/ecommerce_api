const { Router } = require("express");

const Product = require("../models/products.model");
const Cart = require("../models/cart.model");
const User = require("../models/User.model");

const route = Router();

//renderizar um produto

route.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar produto" });
  }
});

//adicionando item ao carrinho
route.post("/products/:id", async (req, res) => {
  try {
    const product = req.body;
    const { id } = req.params;
    const prod = await Product.findById(id);
    res.status(200).json({ prod });
  } catch (error) {
    res.status(500).json({ message: "Erro ao busca informações de produto" });
  }
});

route.post("/carrinho/:iduser", async (req, res) => {
  try {
    const { iduser } = req.params;
    const user = await User.findById(iduser).populate("cart");

    const activeCart = user.cart.find((element) => element.finished === false);
    if (activeCart) {
      return res
        .status(400)
        .json({ message: "Usuario já tem um carrinho ativo" });
    } else {
      const createdCart = await Cart.create({});
      await User.findByIdAndUpdate(
        iduser,
        { $push: { cart: createdCart.id } },
        { new: true }
      );
      res.status(201).json({ createdCart });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar o carrinho" });
  }
});

route.get("/carrinho/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;
    const userFind = await User.findById(idUser); //.populate("cart")
    const cartId = userFind.cart;
    const cart = await Cart.findById(cartId).populate("products");

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Erro ao trazer o carrinho" });
  }
});

route.patch("/carrinho/:idcart/product/:idproduct", async (req, res) => {
  try {
    const { idcart, idproduct } = req.params;
    const updatedCart = await Cart.findByIdAndUpdate(
      idcart,
      { $push: { products: idproduct } },
      { new: true }
    );
    res.status(200).json({ updatedCart });
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar produto do carrinho" });
  }
});

route.patch("/carrinho/finalizar/:idcart", async (req, res) => {
  try {
    const { idcart } = req.params;
    const updatedCart = await Cart.findByIdAndUpdate(
      idcart,
      {
        finished: true,
      },
      { new: true }
    );

    res.status(200).json({ message: "carrinho finalizado" });
  } catch (error) {
    res.status(500).json({ message: " erro ao finalizar carrinho" });
  }
});

route.patch(
  "/carrinho/:idcart/products/:idproduct/delete",
  async (req, res) => {
    try {
      const { idcart, idproduct } = req.params;
      const findCart = await Cart.findById(idcart);
      const index = findCart.products.findIndex((i) => i === idproduct);
      findCart.products.splice(index, 1);
      findCart.save();

      res.status(200).json(findCart);
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar" });
    }
  }
);

module.exports = route;
