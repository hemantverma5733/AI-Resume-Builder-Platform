const { OpenAI } = require('openai');

// Initialize OpenAI conditionally
let openai;
if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here') {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// @desc    Generate resume bullets using OpenAI
// @route   POST /api/ai/generate
exports.generateBullets = async (req, res) => {
    try {
        const { jobTitle } = req.body;

        if (!jobTitle) {
            return res.status(400).json({ success: false, error: 'Job title is required' });
        }

        if (!openai) {
            // Fallback mock generation if no real API key provided
            const mockBullets = [
                `Spearheaded the development of a ${jobTitle} platform, improving performance by 40%.`,
                `Collaborated with cross-functional teams to deliver scalable microservices architecture.`,
                `Implemented advanced CI/CD pipelines, reducing deployment time by 60%.`
            ];
            return res.status(200).json({ success: true, bullets: mockBullets, mock: true });
        }

        // Real OpenAI Call
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are an expert resume writer. Generate 3 highly professional, ATS-optimized, quantifiable bullet points for the given job title." },
                { role: "user", content: `Generate 3 bullet points for a ${jobTitle} role. Only return the bullet points, no introductory text.` }
            ],
            max_tokens: 150
        });

        const text = completion.choices[0].message.content;
        const bullets = text.split('\n').filter(b => b.trim().length > 0).map(b => b.replace(/^[-•]\s*/, ''));

        res.status(200).json({ success: true, bullets });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'AI Generation Failed' });
    }
};
