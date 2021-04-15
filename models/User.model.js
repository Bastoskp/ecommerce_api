const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, "nome obrigatório"],
    },

    email: {
        type: String,
        require: [true, "email obrigatório"],
    },

    passwordHash: {
        type: String,
        required: [true, "favor colocar sua senha"],
    },
    firstName: String,
    lastName: String,
    telefone: Number,
    adress: String,
    number: Number,
    cep: Number,
    state: String,
    city: String,
    ordersPlaced: [{ type: Schema.Types.ObjectId, ref: "ordersplaced" }],
    favorite: [{ type: Schema.Types.ObjectId, ref: "product" }],
    cart: { type: Schema.Types.ObjectId, ref: "cart" }
});

module.exports = model("user", UserSchema);