import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    FaPaperPlane,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaTwitter
} from "react-icons/fa";

const Contact = () => {
    const form = useRef(); 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = e => {
        e.preventDefault();
        setIsSubmitting(true);

        const SERVICE_ID = "service_ho3topc";
        const TEMPLATE_ID = "template_6xm7bzs";
        const PUBLIC_KEY = "QuUTZQ25g2PtARid7";

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                result => {
                    console.log("Success:", result.text);
                    setSubmitted(true);
                    setIsSubmitting(false);
                },
                error => {
                    console.log("Error:", error.text);
                    alert("Failed to send message. Please try again later.");
                    setIsSubmitting(false);
                }
            );
    };

    const contactDetails = [
        {
            icon: <FaPhoneAlt />,
            title: "Call Me",
            detail: "+2349161107183",
            link: "tel:+2349161107193"
        },
        {
            icon: <FaEnvelope />,
            title: "Email Me",
            detail: "blessdike70@gm.com",
            link: "mailto:blessdike70@gmail..com"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            detail: "Bauchi, BA",
            link: "#"
        }
    ];

    return (
        <section className="min-h-screen pt-28 pb-20 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-orange-600 font-black uppercase tracking-[0.3em] text-sm"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mt-4"
                    >
                        Let’s talk about your <br />{" "}
                        <span className="text-orange-500">next big idea.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Sidebar Info */}
                    <div className="space-y-8">
                        {contactDetails.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-900 font-black text-lg">
                                        {item.detail}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl"
                    >
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">
                                    ✓
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-2">
                                    Message Sent!
                                </h3>
                                <p className="text-slate-500">
                                    I'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-orange-600 font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            name="user_name"
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            required
                                            name="user_email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        rows="5"
                                        placeholder="Tell me about your project..."
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={`w-full py-5 rounded-2xl font-black text-lg shadow-lg flex items-center justify-center gap-3 transition-all ${isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-orange-500 hover:bg-slate-900 text-white shadow-orange-200"}`}
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message <FaPaperPlane />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
