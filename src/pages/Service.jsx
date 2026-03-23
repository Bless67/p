import React from "react";
import { motion } from "framer-motion";
import { 
    FaLaptopCode, FaMobileAlt, FaServer, 
    FaSearchDollar, FaRocket, FaTools, 
    FaLightbulb, FaLayerGroup, FaShieldAlt 
} from "react-icons/fa";

const Services = () => {
    const services = [
        {
            title: "Web Development",
            desc: "Custom, responsive websites built with React, Next.js, and Tailwind CSS. Focused on speed, SEO, and user experience.",
            icon: <FaLaptopCode />,
            color: "bg-blue-500"
        },
        {
            title: "Mobile Solutions",
            desc: "Cross-platform mobile applications for iOS and Android using React Native, ensuring a native feel with shared logic.",
            icon: <FaMobileAlt />,
            color: "bg-orange-500"
        },
        {
            title: "Backend & APIs",
            desc: "Robust server-side architectures using Node.js and Express. Secure RESTful and GraphQL API development.",
            icon: <FaServer />,
            color: "bg-slate-800"
        },
        {
            title: "UI/UX Design",
            desc: "User-centric design focused on intuitive navigation and modern aesthetics using Figma and Adobe XD.",
            icon: <FaLayerGroup />,
            color: "bg-pink-500"
        },
        {
            title: "Cloud Services",
            desc: "Deployment and infrastructure management on AWS and Google Cloud with Docker and CI/CD pipelines.",
            icon: <FaRocket />,
            color: "bg-cyan-500"
        },
        {
            title: "Maintenance",
            desc: "Ongoing support, security audits, and performance optimization to keep your digital products running smoothly.",
            icon: <FaShieldAlt />,
            color: "bg-green-500"
        }
    ];

    const steps = [
        { num: "01", title: "Discovery", desc: "Understanding your goals and user needs." },
        { num: "02", title: "Design", desc: "Crafting the visual and technical blueprint." },
        { num: "03", title: "Develop", desc: "Building the solution with clean, scalable code." },
        { num: "04", title: "Deploy", desc: "Launching and optimizing for the real world." }
    ];

    return (
        <section className="min-h-screen pt-28 pb-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        className="text-orange-600 font-black uppercase tracking-[0.3em] text-sm"
                    >
                        How I Can Help
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-4">
                        Innovative Solutions for <br /> 
                        <span className="text-orange-500">Modern Businesses.</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white mb-8 shadow-lg ${service.color} group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {service.desc}
                            </p>
                            <div className="w-12 h-1 bg-slate-100 group-hover:w-full group-hover:bg-orange-500 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Development Process Section */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-10">
                        <FaTools size={200} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="mb-16">
                            <h3 className="text-3xl md:text-5xl font-black mb-4">My Workflow</h3>
                            <p className="text-slate-400 max-w-xl">A streamlined approach to turning complex problems into simple, functional digital solutions.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {steps.map((step, i) => (
                                <div key={i} className="relative">
                                    <span className="text-6xl font-black text-white/10 absolute -top-10 left-0">
                                        {step.num}
                                    </span>
                                    <h4 className="text-xl font-bold text-orange-500 mb-3 relative z-10">{step.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 text-center"
                >
                    <p className="text-slate-500 font-medium mb-6">Need a custom solution tailored to your needs?</p>
                    <a href="/contact" className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-4 rounded-full font-black hover:bg-slate-900 transition-colors shadow-xl shadow-orange-100">
                        Get a Free Quote <FaLightbulb />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;