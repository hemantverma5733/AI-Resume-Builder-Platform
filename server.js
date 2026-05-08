require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./server/config/db');

// Import Routes
const resumeRoutes = require('./server/routes/resumeRoutes');
const aiRoutes = require('./server/routes/aiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/resumes', resumeRoutes);
app.use('/api/ai', aiRoutes);

// Serve Static Frontend (Fallback)
app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n=========================================`);
    console.log(`🚀 ResumeAI Pro Full-Stack Backend Running!`);
    console.log(`🌐 Frontend accessible at: http://localhost:${PORT}`);
    console.log(`🔌 Resumes API: http://localhost:${PORT}/api/resumes`);
    console.log(`🧠 OpenAI API: http://localhost:${PORT}/api/ai/generate`);
    console.log(`=========================================\n`);
});
