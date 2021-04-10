const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User.model");

const authRouter = Router();

authRouter.post("/auth/signup", async(req, res) => {
    const { name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    try {
        const user = await User.create({ name, email, passwordHash });
        res.status(201).json({ message: "Usuário criado" });
    } catch (error) {
        res.status(500).json({ message: "erro ao criar usuário" });
    }
});

authRouter.post("/auth/login", async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });


        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado" });
        }

        const validateHash = bcrypt.compareSync(password, user.passwordHash);

        if (validateHash) {
            const payload = {
                name: user.name,
                email: user.email,
                id: user.id,
            };

            const token = jwt.sign(payload, process.env.JWT_PASS, {
                expiresIn: "1h",
            });
            res.status(200).json({...payload, token });
        }
    } catch (error) {
        res.status(500).json({ message: "erro ao logar usuário" });
    }
});



module.exports = authRouter;