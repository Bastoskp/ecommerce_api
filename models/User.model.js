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
    requests: [{ type: Schema.Types.ObjectId, ref: "requests" }],
    ordersPlaced: [{ type: Schema.Types.ObjectId, ref: "ordersplaced" }],
    favorites: [{ type: Schema.Types.ObjectId, ref: "product" }],
    cart: { type: Schema.Types.ObjectId, ref: "cart" }

});

module.exports = model("user", UserSchema);