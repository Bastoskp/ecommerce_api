const { Router } = require("express");

const User = require("../models/User.model.js");
const perfilRouter = Router();

perfilRouter.get("/perfil/:id", async(req, res) => {
    try {
        const user = req.body;
        const { id } = req.params;
        const perfil = await User.findById(id)
        res.status(200).json({ perfil });
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar informações do usuàrio" })
    }
})

module.exports = perfilRouter;