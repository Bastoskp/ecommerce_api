const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    image: String,
    name: String,
    quantity: Number,
    value: Number,
    total: Number,
    subtotal: Number,
    finished: Boolean
        //ver com o Gabriel ou DK se pode fazer referencia com produto model para pegar o frete
});

module.exports = model("cart", cartSchema)