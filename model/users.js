const mongoose = require('mongoose');

let Schema = mongoose.Schema
let UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Only allow 'user' or 'admin'
        default: 'user'
    },
    // profilePicture: {
    //     type: String,
    //     default: 'https://example.com/default-avatar.png' // Default avatar URL
    // },
    isActive: {
        type: Boolean,
        default: true
    },
    favorites: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book' // Reference to Book model
    },
}, {
    timestamps: true // Automatically add `createdAt` and `updatedAt` fields
});
let USERS = mongoose.model('users' ,UserSchema)
module.exports = USERS