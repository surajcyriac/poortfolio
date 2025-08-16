import React, { useState, useEffect, use, useRef } from 'react';
// Import Lucide React icons for a modern look
import { Briefcase, Code, Cloud, Users, Mail, Linkedin, Github, Twitter, Award, Star, Wrench, Atom, Server, Database, Paintbrush, Network, Package, GitBranch, FileText, Sparkles, Instagram } from 'lucide-react'; // Added Sparkles icon
import Particles from '../assets/Particles'; // Adjust the path if needed
import BlurText from '../assets/BlurText'; // Adjust the path if needed
import Reacticon from '../assets/icons/React.png' // Adjust the path if needed
import JavaScript from '../assets/icons/JavaScript.png' // Adjust the path if needed
import TypeScript from '../assets/icons/TypeScript.png' // Adjust the path if needed
import html5 from '../assets/icons/HTML5.png' // Adjust the path if needed
import css3 from '../assets/icons/CSS3.png' // Adjust the path if needed
import nodejs from '../assets/icons/Nodejs.png' // Adjust the path if needed
import expressjs from '../assets/icons/Nodejs.png' // Adjust the path if needed
import mongodb from '../assets/icons/MongoDB.png' // Adjust the path if needed
import git from '../assets/icons/Git.png' // Adjust the path if needed
import github from '../assets/icons/GitHub.png' // Adjust the path if needed
import gitLab from '../assets/icons/GitLab.png' // Adjust the path if needed
import tailwind from '../assets/icons/Tailwind CSS.png' // Adjust the path if needed
import postman from '../assets/icons/Postman.png' // Adjust the path if needed
import book from '../assets/images/book.png' // Adjust the path if needed
import chatapp from '../assets/images/chatapp.png' // Adjust the path if needed
import taskmamager from '../assets/images/taskmamager.png' // Adjust the path if needed
import projectfair from '../assets/images/projectfair.png' // Adjust the path if needed
import recipe from '../assets/images/recipe.png' // Adjust the path if needed
import weather from '../assets/images/weather.png' // Adjust the path if needed
import tictactoe from '../assets/images/tictactoe.png' // Adjust the path if needed
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import FadeIn from "../assets/Fadein";
import 'aos/dist/aos.css';
import AOS from 'aos';
// Main App Component
const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Scroll to top on page reload
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    // Smooth scrolling for navigation links
 
useEffect(() => {
  AOS.init();
}, []);
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                // Close mobile menu after clicking a link
                setIsMobileMenuOpen(false);
            });
        });
    }, []);
    const [view, setView] = useState(false);
  
    return (
        <div className="bg-gray-950 text-gray-100 font-inter">
            {/* Custom Styles for Glassmorphism and Animations */}
            <style>
                {`
                /* Tailwind CSS @layer base for custom utilities */
                @layer base {
                    .glassmorphic {
                        background-color: rgba(255, 255, 255, 0.08); /* Slightly visible background */
                        backdrop-filter: blur(10px) saturate(180%);
                        -webkit-backdrop-filter: blur(10px) saturate(180%);
                        border: 1px solid rgba(255, 255, 255, 0.125);
                    }
                    .hanging-id-card-container {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%); /* Center horizontally and vertically */
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        z-index: 20; /* Ensure it's above background text */
                    }
                    .lanyard {
                        width: 4px; /* Thin lanyard */
                        height: 100px; /* Length of the lanyard */
                        background-color: #333; /* Dark color for lanyard */
                        position: absolute;
                        top: -100px; /* Position above the card */
                        left: 50%;
                        transform: translateX(-50%);
                        border-radius: 2px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                    }
                    .lanyard::before, .lanyard::after {
                        content: '';
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        background-color: #333;
                        border-radius: 50%;
                        top: -5px;
                        left: -3px;
                    }
                    .lanyard::after {
                        left: auto;
                        right: -3px;
                    }

                    /* Timeline specific styles */
                    .timeline {
                        position: relative;
                        padding: 20px 0;
                        margin: 0 auto;
                        max-width: 900px;
                    }
                    .timeline::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 50%;
                        width: 4px;
                        background-color: #3b82f6; /* Blue line */
                        transform: translateX(-50%);
                    }
                    .timeline-item {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 40px;
                        position: relative;
                    }
                    .timeline-item:nth-child(odd) {
                        flex-direction: row-reverse;
                    }
                    .timeline-item-content {
                        width: calc(50% - 30px); /* Adjust for dot and spacing */
                        padding: 20px;
                        background-color: #1f2937; /* Gray-800 */
                        border-radius: 10px;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                        border: 1px solid #374151; /* Gray-700 */
                        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    }
                    .timeline-item-content:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 6px 15px rgba(0,0,0,0.4);
                    }
                    .timeline-item-dot {
                        width: 20px;
                        height: 20px;
                        background-color: #2563eb; /* Blue-600 */
                        border-radius: 50%;
                        position: absolute;
                        top: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 1;
                        border: 3px solid #0f172a; /* Gray-950 */
                    }
                    .timeline-item:nth-child(odd) .timeline-item-dot {
                        left: 50%; /* Ensure dot is always centered on the line */
                    }

                    /* Responsive adjustments for timeline */
                    @media (max-width: 768px) {
                        .timeline::before {
                            left: 20px; /* Move line to left for mobile */
                            transform: translateX(0);
                        }
                        .timeline-item {
                            flex-direction: column !important; /* Stack content on mobile */
                            align-items: flex-start;
                            margin-bottom: 30px;
                        }
                        .timeline-item-content {
                            width: calc(100% - 40px); /* Full width minus padding */
                            margin-left: 40px; /* Align with line */
                            padding: 15px;
                        }
                        .timeline-item-dot {
                            left: 20px; /* Align dot with line on mobile */
                            transform: translateX(-50%);
                        }
                    }
                }

                /* Keyframes for gradient shift animation */
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                /* Apply animation to specific elements */
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 10s ease infinite;
                }

                /* Fade in animations */
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }

                @keyframes fade-in-right {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fade-in-right {
                    animation: fade-in-right 0.8s ease-out forwards;
                }
                `}
            </style>
            {/* <Blackbackground /> */}
{/* navbar */}
                        <nav
                            className="bg-gray-900 shadow-xl w-full z-50 py-4 rounded-b-xl border-b border-blue-800 glassmorphic"
                            style={{ position: 'sticky', top: 0 }}
                        >
                            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                                <a href="#" className="text-2xl font-extrabold text-blue-400 rounded-lg p-2 hover:text-blue-300 transition duration-300"> Suraj Cyriac Jes</a>
                                <div className="hidden md:flex space-x-8">
                                    <NavLink href="#about" text="About" />
                                    <NavLink href="#experience" text="Experience" />
                                    <NavLink href="#tech-skills" text="Skills" />
                                    <NavLink href="#portfolio" text="Portfolio" />
                                    <NavLink href="#vision-passion" text="Vision" /> {/* Updated href and text */}
                        <NavLink href="#contact" text="Contact" />
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        id="mobile-menu-button"
                        className="md:hidden text-gray-300 focus:outline-none focus:text-blue-400"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div id="mobile-menu" className="md:hidden bg-gray-800 py-2 shadow-md rounded-b-xl glassmorphic">
                        <MobileNavLink href="#about" text="About" />
                        <MobileNavLink href="#experience" text="Experience" />
                        <MobileNavLink href="#tech-skills" text="Skills" />
                        <MobileNavLink href="#portfolio" text="Portfolio" />
                        <MobileNavLink href="#vision-passion" text="Vision" /> {/* Updated href and text */}
                        <MobileNavLink href="#contact" text="Contact" />
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <LandingSection />

            {/* About Section */}
            <AboutSection />

            {/* Experience Section */}
            <ExperienceSection />

            {/* Tech Skills Section (New) */}
            <TechSkillsSection />

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* My Vision & Passion Section (New) */}
            <MyVisionPassionSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

// Navigation Link Component
const NavLink = ({ href, text }) => (
    <a href={href} className="text-gray-300 hover:text-blue-400 font-medium transition duration-300 rounded-lg p-2">
        {text}
    </a>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ href, text }) => (
    <a href={href} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition duration-300">
        {text}
    </a>
);

// Interactive ID Card Component (simplified to match the image)
// const InteractiveIDCard = () => {
//     return (
//         <div className="relative w-40 h-56 bg-black rounded-xl shadow-lg flex items-center justify-center p-4">
//             {/* Simple SVG for the logo, similar to the image */}
            


            
//             {/* <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="4"/>
//                 <path d="M50 10 L50 90 M10 50 L90 50" stroke="#333" strokeWidth="4"/>
//                 <circle cx="25" cy="25" r="10" fill="#333"/>
//                 <circle cx="75" cy="25" r="10" fill="#333"/>
//                 <circle cx="25" cy="75" r="10" fill="#333"/>
//                 <circle cx="75" cy="75" r="10" fill="#333"/>
//             </svg> */}
//         </div>
//     );
// };

 const Blackbackground = () => {
    const [view, setView] = useState(false);

    return (
        <div
            className={`min-h-screen  relative bg-black rounded-xl shadow-lg flex items-center justify-center transition-opacity duration-500 `}
        >
            <BlurText
                text="Welcome to Developer's Portfolio"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => {
                    const nextSection = document.getElementById('hero');
                    if (nextSection) {
                        setTimeout(() => {
                            nextSection.scrollIntoView({ behavior: 'smooth' });
                            setView(true);
                        }, 400);
                    }
                }}
                className="text-3xl mb-8"
            />
        </div>
    );
};

// Animated Blue Text Effect Component (simulating reactbits effect)
const AnimatedBlueText = ({ text }) => {
    return (
        <span className="relative inline-block text-blue-700 font-extrabold text-opacity-10 text-7xl md:text-8xl lg:text-9xl whitespace-nowrap overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-shift bg-clip-text text-transparent">
                {text}
            </span>
            {text}
        </span>
    );
};

// Hero Section Component
// const HeroSection = () => {
//     return (
//         <section id="hero" className="relative bg-gradient-to-br from-gray-950 to-indigo-950 text-white py-24 md:py-32 flex items-center justify-center min-h-screen overflow-hidden">
//             {/* Background Blue Text Effect */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none z-0 space-y-8">
//                 <AnimatedBlueText text="ELEGANCE" />
//                 <AnimatedBlueText text="INNOVATE" />
//                 <AnimatedBlueText text="DESIGN" />
//             </div>

//             {/* Hanging ID Card - positioned absolutely in the center */}
//             {/* <div className="hanging-id-card-container z-20">
//                 <div className="lanyard"></div>
//                 <InteractiveIDCard />
//             </div> */}

//             {/* Text content behind the ID card, adjusted for visibility */}
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 opacity-30 md:opacity-20"> {/* Increased opacity */}
//                 <h1 className="text-7xl md:text-8xl font-extrabold leading-tight text-blue-300">
//                     DRIVE IT!
//                 </h1>
//             </div>
//         </section>
//     );
// };


// This is the main component for your landing section.
const LandingSection = () => {
    const canvasRef = useRef(null);
    
    // --- STATE MANAGEMENT ---
    // The initial bio text.
    const initialBio = "I'm a full-stack developer specializing in creating robust, scalable, and user-friendly web applications. From slick front-end interfaces to powerful back-end systems, I bring ideas to life with code.";
    
    // State to hold the current bio text, allowing it to be updated by the Gemini API.
    const [bioText, setBioText] = useState(initialBio);
    
    // State to track when the Gemini API is generating a new bio.
    const [isGenerating, setIsGenerating] = useState(false);


    // --- GEMINI API INTEGRATION ---
    /**
     * This function calls the Gemini API to rewrite the bio.
     */
    const handleReimagineBio = async () => {
        setIsGenerating(true); // Set loading state to true
        
        // The prompt tells the Gemini model what to do.
        const prompt = `Rewrite the following developer bio to be more punchy, exciting, and confident, while remaining professional. Make it about one or two sentences long. Original Bio: "${initialBio}"`;
        
        const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };
        const apiKey = ""; // API key is handled by the environment, leave as is.
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const result = await response.json();
            
            // Extract the generated text from the API response
            const newBio = result?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (newBio) {
                setBioText(newBio); // Update the bio state with the new text
            } else {
                // Fallback in case the response structure is unexpected
                setBioText("Couldn't generate a new bio right now. Please try again!");
                console.error("No content found in Gemini API response:", result);
            }

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            setBioText("An error occurred. Please check the console for details.");
        } finally {
            setIsGenerating(false); // Set loading state to false
        }
    };


    // useEffect handles the logic for the particle animation.
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; 
        const ctx = canvas.getContext('2d');
        let particlesArray;
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); 
        };

        const mouse = { x: null, y: null, radius: (window.innerHeight / 120) * (window.innerWidth / 120) };
        const handleMouseMove = (event) => { mouse.x = event.x; mouse.y = event.y; };
        const handleMouseOut = () => { mouse.x = undefined; mouse.y = undefined; };
        
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY;
                this.size = size; this.color = color; this.baseX = this.x; this.baseY = this.y;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                let dx = mouse.x - this.x; let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 3;
                    if (mouse.x > this.x && this.x > this.size * 10) this.x -= 3;
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 3;
                    if (mouse.y > this.y && this.y > this.size * 10) this.y -= 3;
                } else {
                    if (this.x !== this.baseX) { let dx = this.x - this.baseX; this.x -= dx / 20; }
                    if (this.y !== this.baseY) { let dy = this.y - this.baseY; this.y -= dy / 20; }
                }
                this.x += this.directionX; this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 1.5) + 0.5;
                let x = (Math.random() * (window.innerWidth - size * 2) + size * 2);
                let y = (Math.random() * (window.innerHeight - size * 2) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = 'rgba(29, 78, 216, 0.6)';
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }
        
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacityValue})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        };
        
        resizeCanvas();
        animate();
        
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <style>{`
                body {
                    font-family: 'Inter', sans-serif;
                    color: #E0E0E0;
                    background-color: #05070f;
                }
                .font-mono { font-family: 'Roboto Mono', monospace; }
                .hero-section {
                    background-color: #05070f;
                    background-image: radial-gradient(circle at top right, rgba(29, 78, 216, 0.15), transparent 40%),
                                      radial-gradient(circle at bottom left, rgba(29, 78, 216, 0.15), transparent 40%);
                }
                .cta-button {
                    position: relative; z-index: 1; overflow: hidden;
                    transition: color 0.4s ease-in-out, box-shadow 0.4s ease;
                    border-color: #1D4ED8;
                }
                .cta-button:hover {
                    color: white;
                    box-shadow: 0 0 25px rgba(29, 78, 216, 0.8);
                }
                .cta-button::before {
                    content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
                    background: linear-gradient(120deg, transparent, rgba(29, 78, 216, 0.6), transparent);
                    transition: left 0.6s ease; z-index: -1;
                }
                .cta-button:hover::before { left: 100%; }
                
                .typewriter-text {
                    display: inline-block; border-right: 0.15em solid #3B82F6;
                    white-space: nowrap; overflow: hidden;
                    animation: typing 2.5s steps(28, end) 1s 1 normal both,
                               blink-caret .75s step-end infinite 3.5s;
                }
                
                @keyframes typing { from { width: 0 } to { width: 100% } }
                @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #3B82F6; } }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                
                .fade-in-1 { animation: fadeIn 1s 0.5s forwards; }
                .fade-in-2 { animation: fadeIn 1s 1.0s forwards; }
                .fade-in-3 { animation: fadeIn 1s 1.5s forwards; }
                .fade-in-4 { animation: fadeIn 1s 4.5s forwards; }
                .fade-in-5 { animation: fadeIn 1s 5.0s forwards; }

                #particle-canvas {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;
                }
                .gemini-button {
                    background-color: transparent;
                    border-color: #3b82f6; /* blue-500 */
                    color: #60a5fa; /* blue-400 */
                    transition: all 0.3s ease;
                }
                .gemini-button:hover:not(:disabled) {
                    background-color: rgba(59, 130, 246, 0.1);
                    color: #93c5fd; /* blue-300 */
                    box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
                }
                .gemini-button:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            `}</style>
            
            <section className="hero-section relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
                <canvas id="particle-canvas" ref={canvasRef}></canvas>
                <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
                    <p className="font-mono text-lg md:text-xl text-blue-400 mb-2 sm:mb-4 opacity-0 fade-in-1">
                        Hi, my name is
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-100 mb-3 sm:mb-5 opacity-0 fade-in-2">
                        Suraj Cyriac Jes.
                    </h1>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 opacity-0 fade-in-3">
                        <span className="typewriter-text">I build solutions for the web.</span>
                    </h2>
                    
                    {/* The bio now uses the state variable, so it can be updated. */}
                    <p className="max-w-2xl mx-auto mt-6 md:mt-8 text-base md:text-lg text-gray-300 leading-relaxed opacity-0 fade-in-4 transition-all duration-500">
                        {bioText}
                    </p>

                    {/* Container for the action buttons */}
                    <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 fade-in-5">
                        <a href="#portfolio" className="cta-button inline-block text-lg font-semibold bg-transparent border-2 rounded-md py-3 px-8 text-blue-400 transition-all duration-300 hover:text-white hover:bg-blue-700/20">
                            Explore My Work
                        </a>
                        
                        {/* The new Gemini-powered button */}
                        {/* <button
                            onClick={handleReimagineBio}
                            disabled={isGenerating}
                            className="gemini-button inline-flex items-center justify-center text-lg font-semibold border-2 rounded-md py-3 px-8"
                        >
                            {isGenerating ? 'Generating...' : '✨ Reimagine Bio'}
                        </button> */}
                    </div>
                </div>
            </section>
            
            {/* <section id="projects" className="h-screen flex items-center justify-center relative z-10">
                <h2 className="text-4xl text-white">Your Projects Would Go Here</h2>
            </section> */}
        </>
    );
};

// export default LandingSection;




// About Section Component
const AboutSection = () => {
    const fields = [
        {
            title: "Frontend Development",
            description: "Crafting intuitive and visually stunning user interfaces with modern web technologies.",
            image: "https://placehold.co/300x200/4F46E5/FFFFFF?text=Frontend+Dev", // Example image for Frontend
            alt: "Frontend Development illustration"
        },
        {
            title: "Backend Development",
            description: "Building robust and scalable server-side applications, databases, and APIs for seamless functionality.",
            image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Backend+Dev", // Example image for Backend
            alt: "Backend Development illustration"
        },
        {
            title: "Fullstack Development",
            description: "Connecting the dots from user interface to database, delivering end-to-end digital solutions.",
            image: "https://placehold.co/300x200/EC4899/FFFFFF?text=Fullstack+Dev", // Example image for Fullstack
            alt: "Fullstack Development illustration"
        }
    ];

    return (
        <section id="about" className="bg-gray-900 py-20 md:py-24">
            <div data-aos="fade-up" className="container mx-auto px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-12 relative pb-4">
                    Unveiling My Expertise
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
                </h2>
                <div className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-12">
                    <p>
                        Hello! I'm <span className="font-semibold text-blue-400">Suraj Cyriac Jes</span>, a dedicated Full Stack developer passionate about building impactful digital experiences. My expertise spans across the full spectrum of web development.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {fields.map((field, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-blue-600 transform hover:-translate-y-2 transition duration-300 ease-in-out">
                            <img src={field.image} alt={field.alt} className="w-full h-48 object-cover border-b border-gray-700" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-white mb-2">{field.title}</h3>
                                <p className="text-gray-300 text-md">{field.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// New TechIcon component for the skills section
const TechIcon = ({ icon: IconComponent, name }) => (
    <div className="flex flex-col  items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:border-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
        <IconComponent size={48} className="text-blue-400 mb-2" />
        <p className="text-gray-300 text-sm font-medium text-center">{name}</p>
    </div>
);

// New TechSkillsSection component
const TechSkillsSection = () => {
    const reactDevTech = [
        { name: "React", icon: Reacticon },
        { name: "JavaScript", icon: JavaScript },
        { name: "TypeScript", icon: TypeScript },
        { name: "HTML5", icon: html5 },
        { name: "CSS3", icon: css3 },
        { name: "Node.js", icon: nodejs },
        { name: "Express.js", icon: expressjs },
        { name: "MongoDB", icon: mongodb },
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "GitLab", icon: gitLab },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "Postman", icon: postman },
        // { name: "Redux", icon: GitBranch },
        // { name: "Webpack", icon: Package },
        // { name: "REST APIs", icon: Network },
        // { name: "VS Code", icon: Code },
    ];

    return (
        <section id="tech-skills" className="bg-gray-950 pt-0  py-20 md:py-24 relative">
           <div
                style={{
                    position: 'absolute',
                    top: 0,
                    // left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    // border:'solid'
                    // pointerEvents: 'none',
                }}
            >
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="container mx-auto px-4 md:px-8">
               
                <h2 className="text-4xl font-bold text-center text-white mb-12 relative pb-4">
                    My Tech Stack
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
                </h2>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-20">
                    {reactDevTech.map((tech, index) => (
                        <div
    className="flex flex-col gap-2.5 min-w-[3.5rem] items-center  justify-end p-2 bg-gray-800 rounded-lg shadow-md hover:border-blue-600 transition duration-300 ease-in-out transform hover:scale-105 relative group hover:shadow-[0_0_30px_0_rgba(59,130,246,0.7)]"
                            key={index}
                        >
                            <img src={tech.icon} alt="" width={'100px'} className=' '/>
                            <h3 className="text-[10px] text-center ">{tech.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Experience Section Component
const ExperienceSection = () => {
    const experiences = [
     {
  "title": "Frontend Developer Intern",
  "company": "UnaireSync",
  "duration": "February 2025 – July 2025",
  "description": "Worked on building and optimizing user interfaces using React and React Native. Collaborated with the backend team integrating APIs connected to a MongoDB database. Improved UI responsiveness and contributed to the development of cross-platform features for web and mobile. Participated in code reviews and team stand-ups, gaining hands-on experience in real-world Agile development workflows."
}
,
       {
  "title": "MERN Stack Intern",
  "company": "Luminar Technolab",
  "duration": "June 2024 – December 2024",
  "description": "Completed hands-on training and project work in the MERN stack (MongoDB, Express.js, React, Node.js). Developed full-stack applications and implemented CRUD operations with proper routing and state management. Gained practical experience with RESTful APIs, authentication, and component-based architecture in React. Collaborated with peers on mini-projects and followed Agile development practices."
}

        // {
        //     title: "Junior Web Developer",
        //     company: "Startup X",
        //     duration: "Sep 2017 - Jun 2019",
        //     description: "Assisted in front-end development, bug fixing, and feature implementation for various client projects. Gained foundational knowledge in web technologies."
        // }
    ];

    return (
        <section id="experience" className="bg-gray-950 py-20 md:py-24 relative overflow-hidden">
            {/* Particle background */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    // pointerEvents: 'none',
                }}
            >
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="container mx-auto px-4 md:px-8 relative z-10 " >
              
              
                <h2 className="text-4xl font-bold text-center text-white mb-12 relative pb-4">
                    Work Experience
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
                </h2>
                <div className="timeline" >
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item" >
                            <div className="timeline-item-dot hidden lg-block"></div>
                            <div className="timeline-item-content"  >
                                <h3 className="text-2xl font-semibold text-blue-400 mb-1">{exp.title}</h3>
                                <p className="text-gray-300 text-lg mb-2">{exp.company} | {exp.duration}</p>
                                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// Portfolio Section Component
const PortfolioSection = () => {
    const projects = [
        {
  title: "Open Library",
  description: "A MERN-based open library platform where users can sign up, add books, and freely read others' books. Includes an admin dashboard to regulate book entries. Built using MongoDB for data storage and authentication.",
  image: book,
  link: "https://my-project-coral-six.vercel.app/"
}
,
    {
  title: "Chat Platform",
  description: "A simple and responsive chat application built using Firebase. Supports real-time messaging and user authentication with minimal UI for quick interactions.",
  image: chatapp,
  link: "https://chatapp-rouge-one.vercel.app/"
}
,
    
     {
  title: "Task Manager",
  description: "A MERN stack productivity app that allows users to add, manage, and update tasks. Built with React and MongoDB, featuring a clean UI and CRUD operations for efficient task tracking.",
  image: taskmamager,
  link: "https://taskmanagemant.vercel.app/"
}
,
    {
    title: "ProjectFair Site",
    description: "Developer portfolio using React, Tailwind CSS and Framer Motion. Highlights projects with animation and responsiveness.",
    image: projectfair,
    link: "https://project-fair-murex.vercel.app/"
  },
     {
    title: "Recipe Manager",
    description: "A recipe management dashboard for admins with analytics and data visualizations. Built with MongoDB, Node.js, and Chart.js.",
    image: recipe,
    link: "https://recipeapp-orpin.vercel.app/"
  },
    {
  title: "Live Weather App",
  description: "A real-time weather application that fetches live data from an external weather API. Users can search for cities and view current weather conditions with a clean, responsive interface.",
  image: weather,
  link: "https://react-weather-app-ruby-two.vercel.app/"
}
,
    {
    title: "Tic Tac Toe Game",
    description: "Classic Tic Tac Toe game developed with MERN stack. Engaging UI with reset and win-checking functionality.",
    image: tictactoe,
    link: "https://gamingapp-gamma.vercel.app/"
  }
];
const ProjectCard = ({ title, description, image, link }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group rounded-2xl overflow-hidden shadow-xl border border-blue-800 bg-black/30 backdrop-blur-lg"
      style={{
        width: '320px',      // Fixed width
        // height: '400px',     // Fixed height
        minWidth: '320px',   // Prevent shrinking in flex layouts
        // minHeight: '400px',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'flex-end',
    }}>
        <img src={image} alt={title} className="w-full h-56  group-hover:opacity-30 transition duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition duration-300 text-white">
            <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
            <p className="text-sm text-gray-200 mb-4">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:underline"
            > View Project <ExternalLink size={16} />
            </a>
        </div>
    </motion.div>
);
    // return (
    //     <section id="portfolio" className="bg-gray-950 py-20 md:py-24">
    //         <div className="container mx-auto px-4 md:px-8">
    //             <h2 className="text-4xl font-bold text-center text-white mb-12 relative pb-4">
    //                 My Portfolio
    //                 <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
    //             </h2>
    //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //                 {projects.map((project, index) => (
    //                     <ProjectCard key={index} {...project} />
    //                 ))}
    //             </div>
    //         </div>
    //     </section>
    // );
    return (
        <section id="portfolio" className="bg-black py-20">
            <div className="container mx-auto px-4" >
                <h2 className="text-4xl font-bold text-center text-white mb-12 relative pb-4">
                   
Featured Projects
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full shadow shadow-blue-400"></span>
                </h2>
                <div className="overflow-hidden  p-2">
                    <div className="flex animate-scroll gap-6 w-max ">
                        {[...projects, ...projects].map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Project Card Component
const ProjectCard = ({ title, description, image, link }) => (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-102 transition duration-300 ease-in-out border border-gray-700 hover:border-blue-600">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <a href={link} className="text-blue-400 hover:text-blue-300 font-medium flex items-center group">
                View Project
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
        </div>
    </div>
);

// My Vision & Passion Section (New Component)
const MyVisionPassionSection = () => {
    return (
        <section id="vision-passion" className="bg-gradient-to-br from-gray-800 to-gray-950 text-white py-20 md:py-24 text-center"> {/* Changed gradient */}
            <div className="container mx-auto px-4 md:px-8">
               <FadeIn>
                    <h2 className="text-4xl font-bold mb-8 relative pb-4">
                        My Vision & Passion
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
                    </h2>
               </FadeIn>
               <FadeIn>
                    <div className="flex justify-center mb-8 animate-pulse">
                        <Sparkles size={64} className="text-blue-400" /> {/* Changed icon color */}
                    </div>
               </FadeIn>
               <FadeIn>
                    <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-10">
                        As a passionate and aspiring developer, I am driven by the endless possibilities of technology to create innovative solutions and delightful user experiences. I thrive on continuous learning, embracing new challenges, and contributing to projects that make a real impact. My journey is just beginning, and I'm eager to bring my creativity, problem-solving skills, and dedication to a dynamic team.
                    </p>
               </FadeIn>
               <FadeIn>
                    <a href="#contact" className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"> {/* Changed button style */}
                        Let's Build Something Amazing!
                    </a>
               </FadeIn>
            </div>
        </section>
    );
};

// Contact Section Component
const ContactSection = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
     const handleSubmit = () => {
        // For example, send the data to an API or email service
        fetch("https://formspree.io/f/xwkzqgqv", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message,
                _replyto: email,
                _subject: "Portfolio Contact Form Submission",
                to: "surajcyriac@gmail.com"
            })
        });
        console.log("Form submitted:", { name, email, message });

        setName("");
        setEmail("");
        setMessage("");

     }

    return (
        <section id="contact" className="bg-gradient-to-br from-blue-800 to-purple-900 text-white py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
               <FadeIn>
                    <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
                        Get In Touch
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full"></span>
                    </h2>
               </FadeIn>
                <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border border-blue-700">
                  <FadeIn>
                        <p className="text-lg text-center mb-8 opacity-90">
                            Have a project in mind or just want to collaborate? Reach out to discuss how I can bring your vision to life.
                        </p>
                  </FadeIn>
                    <form className="space-y-6">
                        <div>
<FadeIn>
                                <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-200">Your Name</label>
    
</FadeIn>              
             <FadeIn>
                  <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Name"
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
             </FadeIn>
                        </div>
                        <div>
<FadeIn>
                                <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-200">Your Email</label>
    
</FadeIn>                        
  <FadeIn>
        <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="youremail@email.com"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
  </FadeIn>
                      
                        </div>
                        <div>
<FadeIn>
                                <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-200">Message</label>
    
</FadeIn>                       
   <FadeIn>
         <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Tell me about your project or inquiry..."
                                    required
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                ></textarea>
   </FadeIn>
                        </div>
                        <div className="text-center">
                           <FadeIn>
                                <button onClick={handleSubmit} type="submit" className="inline-block bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                                    Send Message
                                </button>
                           </FadeIn>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10 rounded-t-xl border-t border-blue-800">
            <div className="container mx-auto px-4 md:px-8 text-center">
                <p>&copy; 2025 Suraj Cyriac Jes. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://www.linkedin.com/in/surajcyriacjes/" className="text-gray-400 hover:text-blue-400 transition duration-300"><Linkedin size={24} /></a>
                    <a href="https://github.com/surajcyriac" className="text-gray-400 hover:text-blue-400 transition duration-300"><Github size={24} /></a>
                    <a href="https://www.instagram.com/suraj_c_jes?igsh=MWw5YzNmNWd3MjJlMw==" className="text-gray-400 hover:text-blue-400 transition duration-300"><Instagram size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default App;
