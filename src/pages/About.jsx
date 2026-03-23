import React from "react";
import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaCoffee,
    FaRocket,
    FaHeart
} from "react-icons/fa";

const About = () => {
    const timeline = [
        {
            year: "2023 - Present",
            title: "Senior Fullstack Developer",
            company: "TechFlow Solutions",
            desc: "Leading a team of developers to build scalable SaaS platforms using React and Node.js.",
            icon: <FaBriefcase />
        },
        {
            year: "2021 - 2023",
            title: "Frontend Developer",
            company: "Creative Digital Agency",
            desc: "Developed pixel-perfect user interfaces and improved web performance by 40%.",
            icon: <FaCode />
        },
        {
            year: "2017 - 2021",
            title: "BSc in Computer Science",
            company: "State University",
            desc: "Graduated with honors. Focused on Software Engineering and AI.",
            icon: <FaGraduationCap />
        }
    ];

    const personalTraits = [
        {
            icon: <FaRocket className="text-orange-500" />,
            title: "Fast Learner",
            desc: "I pick up new frameworks and languages in record time."
        },
        {
            icon: <FaCoffee className="text-orange-500" />,
            title: "Problem Solver",
            desc: "I don't just write code; I find solutions to complex business logic."
        },
        {
            icon: <FaHeart className="text-orange-500" />,
            title: "Passionate",
            desc: "I genuinely love what I do and stay up-to-date with industry trends."
        }
    ];

    return (
        <section className="min-h-screen pt-28 pb-20 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* --- Top Section: Story --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-sm">
                            My Story
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-8">
                            Passionate Developer <br />
                            <span className="text-orange-500">
                                Based in Kaduna.
                            </span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                I started my journey into the world of
                                programming with a simple "Hello World" in
                                Python. Since then, it’s been a thrilling ride
                                of solving puzzles and building digital products
                                that make an impact.
                            </p>
                            <p>
                                My philosophy is simple: **Code is poetry.** I
                                strive to write clean, maintainable, and
                                efficient code that not only works but is also a
                                joy to read.
                            </p>
                        </div>

                        {/* Personality Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {personalTraits.map((trait, i) => (
                                <div
                                    key={i}
                                    className="p-6 bg-slate-50 rounded-3xl border border-slate-100"
                                >
                                    <div className="text-2xl mb-3">
                                        {trait.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">
                                        {trait.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-tight">
                                        {trait.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -rotate-3"></div>
                        <img
                            src="/bless-about.jpg"
                            alt="Blessed Working"
                            className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl"
                            onError={e => {
                                e.target.src =
                                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";
                            }}
                        />
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 z-20 bg-slate-900 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                            <p className="text-4xl font-black text-orange-500">
                                5+
                            </p>
                            <p className="text-sm font-bold uppercase tracking-widest">
                                Years of Craft
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* --- Bottom Section: Experience Timeline --- */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-white">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">
                            Experience & Education
                        </h2>
                        <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative border-l-2 border-slate-700 ml-4 md:ml-10 space-y-12">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative pl-8 md:pl-16"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-orange-500 rounded-full border-4 border-slate-900"></div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 text-xl">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-black">
                                                {item.title}
                                            </h3>
                                            <p className="text-orange-500 font-bold">
                                                {item.company}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-slate-400">
                                        {item.year}
                                    </span>
                                </div>
                                <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
