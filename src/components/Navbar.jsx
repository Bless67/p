import { MdMenu, MdClose } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const routes = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/service", name: "Services" },
        { path: "/contact", name: "Contact" }
    ];

    const changeRoute = useCallback((pathName) => {
        setIsOpen(false);
        navigate(pathName);
    }, [navigate]);

    // Handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    // Animation Variants
    const desktopVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
        })
    };

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-500 ${
                    isScrolled 
                    ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" 
                    : "bg-transparent py-6"
                }`}
            >
                <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12">
                    {/* Brand Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => changeRoute("/")}
                        className="cursor-pointer flex items-center gap-1"
                    >
                        <span className="text-2xl font-black tracking-tighter text-slate-900">
                            Bicons<span className="text-orange-500">.</span>
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        <ul className="flex items-center space-x-8">
                            {routes.map((route, i) => (
                                <motion.li
                                    key={route.path}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={desktopVariants}
                                >
                                    <button
                                        onClick={() => changeRoute(route.path)}
                                        className={`relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                                            location.pathname === route.path
                                                ? "text-orange-500"
                                                : isScrolled ? "text-slate-600 hover:text-orange-500" : "text-slate-800 hover:text-orange-500"
                                        }`}
                                    >
                                        {route.name}
                                        {location.pathname === route.path && (
                                            <motion.span
                                                layoutId="nav-underline"
                                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"
                                            />
                                        )}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Primary CTA */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/contact")}
                            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-orange-600 transition-all"
                        >
                            <FaComments />
                            Let's Chat
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-900 p-2"
                        onClick={() => setIsOpen(true)}
                        aria-label="Toggle Menu"
                    >
                        <MdMenu size={30} />
                    </button>
                </nav>
            </header>

            {/* Mobile Drawer Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60]"
                        />
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-slate-100">
                                <span className="font-black text-xl tracking-tighter">Menu<span className="text-orange-500">.</span></span>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-slate-50 rounded-full text-slate-500 hover:text-orange-500 transition-colors"
                                >
                                    <MdClose size={24} />
                                </button>
                            </div>

                            <div className="flex-1 px-6 py-10 space-y-4">
                                {routes.map((route) => (
                                    <button
                                        key={route.path}
                                        onClick={() => changeRoute(route.path)}
                                        className={`w-full text-left text-2xl font-bold py-3 transition-colors ${
                                            location.pathname === route.path ? "text-orange-500" : "text-slate-400"
                                        }`}
                                    >
                                        {route.name}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 border-t border-slate-100">
                                <button
                                    onClick={() => changeRoute("/contact")}
                                    className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-orange-100"
                                >
                                    <FaComments /> Start a Conversation
                                </button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;