const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    author: {
        type: String,
        required: true
    },
    bookImgcover: {
        type: String,
        required: true
    }
    
}, {timestamps: true});

const Books = mongoose.model("books", bookSchema);
module.exports = Books;