const { Router } = require("express");

const User = require("../models/User.model.js");
<<<<<<< HEAD
const Address = require("../models/Address.model");
const router = require("./homeRoutes.js");
const perfilRouter = Router();

perfilRouter.get("/perfil/:id", async (req, res) => {
  try {
    const user = req.body;
    const { id } = req.params;
    const perfil = await User.findById(id);
    res.status(200).json();
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

// ler os endereços do usuario
// vai ser rota get

//EDITAR UM ENDERECO

// perfilRouter.patch('/perfil/:id/editadress', async(req, res) => {
//   Address.find{ userId: req.params.id}
//     try {

//     } catch (error) {

//     }
// })

//DELETAR UM ENDERECO

// perfilRouter.delete("perfil/:id/deleteadress", async (req, res) => {
//   try {
//     const { email } = req.body;
//     await adress.deleteOne(email);
//     res.status(204).json();
//   } catch (error) {
//     res.status(500).json({ message: "Server side error on delete adress" });
//   }
// });

module.exports = perfilRouter;
=======
const perfilRouter = Router();

perfilRouter.get("/perfil/:id", async(req, res) => {
    try {
        const user = req.body;
        const { id } = req.params;
        const perfil = await User.findById(id)
        res.status(200).json();
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar informações do usuàrio" })
    }
})

module.exports = perfilRouter;
>>>>>>> 001cdfcdaa65b6d6e2f689813dbd0f20d73fc1b8
