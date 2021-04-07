const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    name: String,
    data: FormData,
    comment: String,
    evaluation: Number

});

module.exports = model("comment", commentSchema)