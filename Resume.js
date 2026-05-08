const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // Set to true when auth is fully implemented
    },
    title: {
        type: String,
        required: true,
        default: 'Untitled Resume'
    },
    jobTitle: {
        type: String,
        default: ''
    },
    personalInfo: {
        fullName: { type: String, default: '' },
        email: { type: String, default: '' },
        phone: { type: String, default: '' },
        linkedin: { type: String, default: '' },
        portfolio: { type: String, default: '' }
    },
    experience: [{
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        bullets: [String]
    }],
    education: [{
        institution: String,
        degree: String,
        year: String
    }],
    skills: [String],
    atsScore: {
        type: Number,
        default: 0
    },
    isPublic: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Resume', ResumeSchema);
