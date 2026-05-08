const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    subscriptionPlan: {
        type: String,
        enum: ['free', 'pro', 'lifetime'],
        default: 'free'
    },
    aiCredits: {
        type: Number,
        default: 3 // Free users get 3 credits
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
