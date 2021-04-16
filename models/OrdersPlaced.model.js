const { Schema, model } = require("mongoose");
const OrdersPlacedSchema = new Schema({
    total: Number,
    cart: { type: Schema.Types.ObjectId, ref: "cart" },
}, {
    timestamps: true,
});

module.exports = model("ordersPlaced", OrdersPlacedSchema);