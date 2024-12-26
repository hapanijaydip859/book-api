const mongoose = require('mongoose');

let Schema = mongoose.Schema

let AuthorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    birthDate: {
        type: Date
    },
    nationality: {
        type: String,
        trim: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    }],
    awards: [{
        type: String
    }],
    genres: [{
        type: String
    }],
    photoUrl: {
        type: String
    },
    socialLinks: {
        twitter: { type: String },
        website: { type: String }
    }
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt`
});
let AUTHOR = mongoose.model('author' ,AuthorSchema)
module.exports = AUTHOR