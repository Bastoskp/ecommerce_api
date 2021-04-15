const { Router } = require('express');

const search = new Router();
const mongoose = require('mongoose');

const Product = require("../models/products.model");


search.post('/search', async(req, res) => {
    try {
        const { name } = req.body
        const productSearching = await Product.find({ name: { $regex: '.*' + name + '.*' } })
        res.status(200).json({ productSearching })
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produto" })
    }
    //https://docs.pagar.me/docs/bibliotecas-pagarme
    //https://www.npmjs.com/package/cep-promise

});

module.exports = search;