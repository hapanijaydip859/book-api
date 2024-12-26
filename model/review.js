const mongoose = require('mongoose');

let Schema = mongoose.Schema
let ReviewSchema = new Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book', // Reference to the Book model
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // Reference to the User model
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5 // Rating should be between 1 and 5
    },
    comment: {
        type: String,
        trim: true
    },
    isVerified: {
        type: Boolean,
        default: false // Indicates if the review is verified
    },
    likes: {
        type: Number,
        default: 0 // Number of likes
    },
    dislikes: {
        type: Number,
        default: 0 // Number of dislikes
    },
    responses: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users', // Reference to the User model
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

let REVIEW = mongoose.model('review' ,ReviewSchema)
module.exports = REVIEW