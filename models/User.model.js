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
  requests: [{ type: Schema.Types.ObjectId, ref: "requests" }],
  product: [{ type: Schema.Types.ObjectId, ref: "product" }],
  ordersPlaced: [{ type: Schema.Types.ObjectId, ref: "ordersplaced" }],
});

module.exports = model("user", UserSchema);
