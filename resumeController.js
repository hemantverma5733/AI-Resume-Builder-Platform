const Resume = require('../models/Resume');

// @desc    Get all resumes
// @route   GET /api/resumes
exports.getResumes = async (req, res) => {
    try {
        const resumes = await Resume.find().sort({ updatedAt: -1 });
        
        // Map to format expected by frontend
        const formatted = resumes.map(r => ({
            id: r._id,
            title: r.title,
            score: r.atsScore,
            updated: new Date(r.updatedAt).toLocaleDateString()
        }));

        res.status(200).json({ success: true, data: formatted });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// @desc    Create new resume
// @route   POST /api/resumes
exports.createResume = async (req, res) => {
    try {
        const { title, jobTitle, bullets } = req.body;
        
        const newResume = await Resume.create({
            title: title || 'Untitled Resume',
            jobTitle: jobTitle || '',
            atsScore: Math.floor(Math.random() * (100 - 60 + 1) + 60), // Mock score
            experience: bullets ? [{ company: 'TBD', role: jobTitle, bullets }] : []
        });

        res.status(201).json({ success: true, data: newResume });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};
