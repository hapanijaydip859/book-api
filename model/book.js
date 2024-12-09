
const mongoose = require('mongoose');

let Schema = mongoose.Schema

let bookSchema = new Schema({
    title: { type: String, required: true },
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    // genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true },
    pages: { type: Number, required: true },
    price: { type: Number, required: true },
    publishedDate: { type: Date, default: Date.now },
    description: { type: String },
})

let BOOK = mongoose.model('book' ,bookSchema)
module.exports = BOOK