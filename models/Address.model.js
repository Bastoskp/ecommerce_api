const { Schema, model } = require("mongoose");
const AddressSchema = new Schema({
  address: String,
  number: Number,
  suplement: String,
  cep: String,
  state: String,
  city: String,
  userId: { type: Schema.Types.ObjectId, ref: "user" },
});
module.exports = model("address", AddressSchema);
