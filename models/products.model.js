const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    image: String,
    name: String,
    description: String,
    value: Number,
    shipping: Number

});

module.exports = model("product", productSchema)