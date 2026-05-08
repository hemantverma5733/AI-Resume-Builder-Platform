const { useState, useEffect } = React;

// --- SHARED COMPONENTS ---
const Button = ({ children, primary, className = '', onClick }) => (
    <button 
        onClick={onClick}
        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 
        ${primary 
            ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 glow-effect' 
            : 'glass hover:bg-white/5 text-white border border-dark-border'} ${className}`}
    >
        {children}
    </button>
);

const Navbar = ({ setView, currentView }) => (
    <nav className="fixed w-full z-50 glass border-b border-dark-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('landing')}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/30">
                        <i className="fa-solid fa-robot"></i>
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-white">Resume<span className="text-brand-500">AI</span> Pro</span>
                </div>
                {currentView === 'landing' ? (
                    <>
                        <div className="hidden md:flex items-baseline space-x-8">
                            <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Features</a>
                            <a href="#templates" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Templates</a>
                            <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
                        </div>
                        <div className="flex gap-4">
                            <button className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors hidden sm:block">Login</button>
                            <Button primary onClick={() => setView('dashboard')}>Go to Dashboard</Button>
                        </div>
                    </>
                ) : (
                    <div className="flex gap-4 items-center">
                        <span className="text-gray-400 text-sm hidden sm:block">Hemant Verma</span>
                        <div className="w-10 h-10 rounded-full bg-brand-900 border border-brand-500 flex items-center justify-center font-bold text-brand-300 cursor-pointer overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Hemant+Verma&background=1e3a8a&color=60a5fa" alt="Profile" />
                        </div>
                        <button onClick={() => setView('landing')} className="text-gray-400 hover:text-white ml-2" title="Logout"><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                    </div>
                )}
            </div>
        </div>
    </nav>
);

// --- LANDING PAGE COMPONENTS ---
const HeroSection = ({ setView }) => (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden min-h-screen flex flex-col justify-center border-b border-dark-border">
        <div className="blob bg-brand-600 w-[600px] h-[600px] top-0 left-[-200px]"></div>
        <div className="blob bg-purple-900 w-[500px] h-[500px] bottom-[-100px] right-[-100px]" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-500/30 text-brand-400 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                ResumeAI Pro 2.0 is Live
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight text-white">
                The AI Advantage for <br className="hidden md:block"/> 
                <span className="gradient-text-blue">Your Career.</span>
            </h1>
            
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto mb-10 leading-relaxed">
                Build ATS-optimized resumes, generate tailored cover letters, and get personalized interview prep—all powered by advanced AI. Stand out from the crowd.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button primary className="py-4 px-8 text-lg" onClick={() => setView('dashboard')}><i className="fa-solid fa-wand-magic-sparkles"></i> Try Builder Free</Button>
                <Button className="py-4 px-8 text-lg"><i className="fa-brands fa-linkedin"></i> Import LinkedIn</Button>
            </div>
            
            {/* Dashboard Visualizer */}
            <div className="mt-20 relative mx-auto w-full max-w-5xl animate-float">
                <div className="rounded-2xl glass border border-dark-border p-2 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200&h=600" alt="App UI" className="rounded-xl w-full h-auto object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-2xl"></div>
                </div>
            </div>
        </div>
    </div>
);

const Features = () => {
    const feats = [
        { icon: 'fa-robot', title: 'AI-Powered Suggestions', desc: 'Context-aware bullet points generated by GPT-4 tailored to the job description.' },
        { icon: 'fa-file-shield', title: 'ATS Score Analyzer', desc: 'Real-time feedback on keyword density, formatting, and readability to beat the bots.' },
        { icon: 'fa-envelope-open-text', title: 'Cover Letter Gen', desc: 'Instantly write personalized cover letters matching your resume and the exact job.' },
        { icon: 'fa-brands fa-linkedin', title: 'LinkedIn Sync', desc: 'Import profile data and get actionable tips for optimizing your LinkedIn presence.' },
        { icon: 'fa-comments', title: 'AI Interview Prep', desc: 'Chatbot simulates interviews based on your resume and the target role.' },
        { icon: 'fa-link', title: 'Live Portfolio Link', desc: 'Share an interactive web version of your resume with custom tracking analytics.' }
    ];

    return (
        <section id="features" className="py-24 relative bg-black border-b border-dark-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Features Built for <span className="text-brand-500">Success</span></h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to secure your next role, consolidated into one powerful platform.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {feats.map((f, i) => (
                        <div key={i} className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-dark-bg border border-dark-border flex items-center justify-center mb-6 group-hover:border-brand-500/50 transition-colors">
                                <i className={`fa-solid ${f.icon} text-xl text-brand-400 group-hover:text-brand-500`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Pricing = () => (
    <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Simple, <span className="text-brand-500">Transparent</span> Pricing</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">Start for free, upgrade when you need advanced AI powers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Basic Plan */}
                <div className="glass-card p-8 rounded-3xl border border-dark-border flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
                    <div className="text-4xl font-extrabold text-white mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> 1 Resume Build</li>
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> Standard Templates</li>
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> PDF Export</li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                </div>
                {/* Pro Plan */}
                <div className="glass-card p-8 rounded-3xl border border-brand-500 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-brand-500/20">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">MOST POPULAR</div>
                    <h3 className="text-xl font-bold text-brand-400 mb-2">Pro</h3>
                    <div className="text-4xl font-extrabold text-white mb-6">$9<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> Unlimited Resumes</li>
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> AI Bullet Generation</li>
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> ATS Scoring</li>
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> Cover Letter Gen</li>
                    </ul>
                    <Button primary className="w-full">Upgrade to Pro</Button>
                </div>
                {/* Lifetime Plan */}
                <div className="glass-card p-8 rounded-3xl border border-dark-border flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">Lifetime</h3>
                    <div className="text-4xl font-extrabold text-white mb-6">$49<span className="text-lg text-gray-500 font-normal">/once</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> All Pro Features</li>
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> Priority AI Access</li>
                        <li className="flex items-center text-gray-300 gap-3"><i className="fa-solid fa-check text-brand-500"></i> Early Access Features</li>
                    </ul>
                    <Button className="w-full">Get Lifetime</Button>
                </div>
            </div>
        </div>
    </section>
);

const LandingPage = ({ setView }) => (
    <div className="animate-fadeIn">
        <HeroSection setView={setView} />
        <Features />
        <Pricing />
        <footer className="border-t border-dark-border py-12 bg-black text-center text-gray-500">
            <p>&copy; 2026 ResumeAI Pro. All rights reserved.</p>
        </footer>
    </div>
);

// --- DASHBOARD COMPONENTS ---
const StatCard = ({ title, value, icon, color }) => (
    <div className="glass-card p-6 rounded-2xl flex items-center justify-between border border-dark-border">
        <div>
            <p className="text-gray-400 text-sm mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-white">{value}</h3>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${color}-500/10 border border-${color}-500/30`}>
            <i className={`fa-solid ${icon} text-xl text-${color}-400`}></i>
        </div>
    </div>
);

const ResumeCard = ({ title, updated, score }) => (
    <div className="glass p-5 rounded-xl border border-dark-border hover:border-brand-500/40 transition-all cursor-pointer group flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="w-12 h-16 bg-dark-bg border border-dark-border rounded flex items-center justify-center shadow-inner group-hover:border-brand-500/50">
                <i className="fa-solid fa-file-lines text-gray-600 group-hover:text-brand-400 transition-colors"></i>
            </div>
            <div>
                <h4 className="font-semibold text-white group-hover:text-brand-400 transition-colors">{title}</h4>
                <p className="text-xs text-gray-500">Updated {updated}</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
                <div className="text-xs text-gray-400 mb-1">ATS Score</div>
                <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-dark-bg rounded-full overflow-hidden">
                        <div className="h-full bg-brand-500 rounded-full" style={{ width: `${score}%` }}></div>
                    </div>
                    <span className="text-sm font-bold text-white">{score}</span>
                </div>
            </div>
            <button className="text-gray-400 hover:text-white p-2"><i className="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Welcome back, Hemant 👋</h1>
                    <p className="text-gray-400 mt-1">Here is what's happening with your job search today.</p>
                </div>
                <Button primary><i className="fa-solid fa-plus"></i> Create New Resume</Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Resumes" value="3" icon="fa-file-lines" color="brand" />
                <StatCard title="Avg. ATS Score" value="84%" icon="fa-chart-pie" color="green" />
                <StatCard title="AI Credits" value="45" icon="fa-bolt" color="yellow" />
                <StatCard title="Profile Views" value="12" icon="fa-eye" color="purple" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Recent Resumes */}
                    <div className="glass-card rounded-2xl border border-dark-border p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Recent Resumes</h2>
                            <button className="text-brand-400 text-sm hover:underline">View All</button>
                        </div>
                        <div className="space-y-4">
                            <ResumeCard title="Software Engineer - Tech" updated="2 hours ago" score={92} />
                            <ResumeCard title="Frontend Developer 2026" updated="3 days ago" score={78} />
                            <ResumeCard title="Full Stack Variant" updated="1 week ago" score={85} />
                        </div>
                    </div>

                    {/* AI Suggestions / Cover Letters */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-card rounded-2xl border border-dark-border p-6 relative overflow-hidden group cursor-pointer hover:border-brand-500/40 transition-colors">
                            <div className="absolute right-[-20px] top-[-20px] text-8xl text-brand-500/5 group-hover:scale-110 transition-transform"><i className="fa-solid fa-envelope"></i></div>
                            <h3 className="text-lg font-bold text-white mb-2">Cover Letter Generator</h3>
                            <p className="text-sm text-gray-400 mb-4">Draft a tailored cover letter in seconds using your existing resume data.</p>
                            <span className="text-brand-400 text-sm font-medium flex items-center gap-2">Generate Now <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                        <div className="glass-card rounded-2xl border border-dark-border p-6 relative overflow-hidden group cursor-pointer hover:border-brand-500/40 transition-colors">
                            <div className="absolute right-[-20px] top-[-20px] text-8xl text-purple-500/5 group-hover:scale-110 transition-transform"><i className="fa-solid fa-user-tie"></i></div>
                            <h3 className="text-lg font-bold text-white mb-2">Interview Prep</h3>
                            <p className="text-sm text-gray-400 mb-4">Practice mock interviews with our AI based on your target job title.</p>
                            <span className="text-brand-400 text-sm font-medium flex items-center gap-2">Start Practice <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Profile Completion */}
                    <div className="glass-card rounded-2xl border border-dark-border p-6">
                        <h2 className="text-lg font-bold text-white mb-4">Profile Strength</h2>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-brand-400 bg-brand-500/10">
                                        Intermediate
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-brand-400">
                                        70%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-dark-bg">
                                <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-500"></div>
                            </div>
                        </div>
                        <ul className="text-sm text-gray-400 space-y-2 mt-4">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Add Education Details</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Add 3+ Skills</li>
                            <li className="flex items-center gap-2 text-gray-500"><i className="fa-regular fa-circle"></i> Connect LinkedIn</li>
                            <li className="flex items-center gap-2 text-gray-500"><i className="fa-regular fa-circle"></i> Add Portfolio Link</li>
                        </ul>
                        <Button className="w-full mt-6 py-2 text-sm">Complete Profile</Button>
                    </div>

                    {/* Job Matches */}
                    <div className="glass-card rounded-2xl border border-dark-border p-6">
                        <h2 className="text-lg font-bold text-white mb-4"><i className="fa-solid fa-briefcase text-brand-500 mr-2"></i> Recommended Jobs</h2>
                        <div className="space-y-4">
                            <div className="border-b border-dark-border pb-3">
                                <h4 className="font-semibold text-white text-sm">Frontend Developer</h4>
                                <p className="text-xs text-gray-500">Google • Remote</p>
                                <div className="mt-2 flex gap-2">
                                    <span className="text-[10px] px-2 py-1 rounded bg-green-500/10 text-green-400">92% Match</span>
                                    <span className="text-[10px] px-2 py-1 rounded bg-dark-bg text-gray-400">React</span>
                                </div>
                            </div>
                            <div className="border-b border-dark-border pb-3 border-transparent">
                                <h4 className="font-semibold text-white text-sm">React Engineer</h4>
                                <p className="text-xs text-gray-500">Stripe • New York (Hybrid)</p>
                                <div className="mt-2 flex gap-2">
                                    <span className="text-[10px] px-2 py-1 rounded bg-green-500/10 text-green-400">88% Match</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-brand-400 text-sm hover:underline mt-4 text-center w-full">View all matches</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [view, setView] = useState('landing'); // 'landing', 'dashboard'

    return (
        <div className="min-h-screen bg-black">
            <Navbar setView={setView} currentView={view} />
            {view === 'landing' && <LandingPage setView={setView} />}
            {view === 'dashboard' && <Dashboard />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
