const { Schema, model } = require("mongoose");
const OrdersPlacedSchema = new Schema({
  image: String,
  name: String,
  date: Date,
  description: String,
  value: Number,
  cart: [{ type: Schema.Types.ObjectId, ref: "cart" }],
});

module.exports = model("ordersPlaced", OrdersPlacedSchema);
