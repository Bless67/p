import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
    FaArrowRight,
    FaStar,
    FaCode,
    FaMobile,
    FaServer,
    FaPalette,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Hero from "./../components/Hero.jsx";

const Home = () => {
    const navigate = useNavigate();
    const [hoveredProject, setHoveredProject] = useState(null);

    // --- Data Objects ---
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce solution with payment integration",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "/project1.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "Social Media App",
            description: "Real-time social platform with messaging features",
            tech: ["React Native", "Firebase", "Redux"],
            image: "/project2.jpg",
            link: "#"
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            description:
                "Interactive data visualization and analytics platform",
            tech: ["React", "D3.js", "Express", "PostgreSQL"],
            image: "/project3.jpg",
            link: "#"
        },
        {
            id: 4,
            title: "AI Chat Application",
            description: "Intelligent chatbot with NLP capabilities",
            tech: ["Python", "React", "TensorFlow", "WebSocket"],
            image: "/project4.jpg",
            link: "#"
        }
    ];

    const skills = [
        {
            category: "Frontend",
            icon: <FaPalette />,
            techs: ["React", "Vue", "TypeScript", "Tailwind CSS"]
        },
        {
            category: "Backend",
            icon: <FaServer />,
            techs: ["Node.js", "Express", "Python", "PostgreSQL"]
        },
        {
            category: "Mobile",
            icon: <FaMobile />,
            techs: ["React Native", "Flutter", "Swift", "Kotlin"]
        },
        {
            category: "Tools",
            icon: <FaCode />,
            techs: ["Git", "Docker", "AWS", "CI/CD"]
        }
    ];

    const stats = [
        { number: 50, label: "Projects Completed", suffix: "+" },
        { number: 30, label: "Satisfied Clients", suffix: "+" },
        { number: 3, label: "Years Experience", suffix: "+" },
        { number: 100, label: "Code Commits", suffix: "k+" }
    ];

    // --- Animation Variants ---
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // --- Intersection Hooks ---
    const [projRef, projInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [skillRef, skillInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [statsRef, statsInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <main className="bg-slate-50 selection:bg-orange-200 selection:text-orange-900">
            {/* Hero Section */}
            <Hero />

            {/* Featured Projects Section */}
            <section
                ref={projRef}
                className="py-24 px-6 bg-white overflow-hidden"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate={projInView ? "visible" : "hidden"}
                        variants={sectionVariants}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-widest mb-4">
                            Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                            Featured Work
                        </h2>
                        <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={projInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    >
                        {projects.map(project => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                onMouseEnter={() =>
                                    setHoveredProject(project.id)
                                }
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                            >
                                {/* Image Container */}
                                <div className="aspect-video relative overflow-hidden bg-slate-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={e => {
                                            e.target.src =
                                                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";
                                        }}
                                    />

                                    {/* Animated Hover Overlay */}
                                    <AnimatePresence>
                                        {hoveredProject === project.id && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md flex flex-col justify-center items-center p-8 text-center"
                                            >
                                                <p className="text-white text-lg mb-6 leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
                                                    View Details{" "}
                                                    <FaArrowRight size={14} />
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-tight"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Skills Section with Glassmorphism */}
            <section
                ref={skillRef}
                className="py-24 px-6 bg-slate-900 relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        animate={skillInView ? "visible" : "hidden"}
                        variants={sectionVariants}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Core Expertise
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Building scalable solutions with modern industry
                            standards and clean code.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={skillInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-orange-500/20 text-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">
                                    {skill.category}
                                </h4>
                                <ul className="space-y-3">
                                    {skill.techs.map((t, i) => (
                                        <li
                                            key={i}
                                            className="text-slate-400 flex items-center gap-2 text-sm"
                                        >
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>{" "}
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section ref={statsRef} className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl font-black text-slate-900 mb-2">
                                    {statsInView && (
                                        <CountUp
                                            end={stat.number}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                        />
                                    )}
                                </div>
                                <p className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto bg-orange-500 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-200">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Have a project in mind?
                            <br /> Let's build it together.
                        </h2>
                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-white text-orange-600 px-10 py-5 rounded-full font-black text-xl hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Get In Touch Now
                        </button>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Modern Footer */}
            <footer className="bg-white py-16 px-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
                        <div className="text-3xl font-black text-slate-900 tracking-tighter">
                            Bicons<span className="text-orange-500">.</span>
                        </div>
                        <nav className="flex flex-wrap justify-center gap-8 font-bold text-slate-500">
                            <button
                                onClick={() => navigate("/")}
                                className="hover:text-orange-500 transition"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => navigate("/service")}
                                className="hover:text-orange-500 transition"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => navigate("/about")}
                                className="hover:text-orange-500 transition"
                            >
                                About
                            </button>
                            <button
                                onClick={() => navigate("/contact")}
                                className="hover:text-orange-500 transition"
                            >
                                Contact
                            </button>
                        </nav>
                        <div className="flex gap-4">
                            {[FaGithub, FaLinkedin, FaTwitter].map(
                                (Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
                                    >
                                        <Icon size={20} />
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t border-slate-50 text-slate-400 text-sm">
                        <p>
                            © 2026 Blessed. All rights reserved. Crafted with
                            precision.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Home;
