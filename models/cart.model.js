const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    total: {
        type: Number,
        default: 0
    },
    finished: {
        type: Boolean,
        require: true,
        default: false
    },
    shipping: Number,
    products: [{ type: Schema.Types.ObjectId, ref: "product" }],

});

module.exports = model("cart", cartSchema)