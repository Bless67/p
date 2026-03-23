import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaPaperPlane, FaComments } from "react-icons/fa"; 

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6 pt-20 md:pt-0">
            {/* Floating Background Blur Circles - Strategic placement for depth */}
            <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-orange-300 rounded-full blur-[100px] opacity-20 -top-20 -left-20 animate-pulse"></div>
            <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-orange-400 rounded-full blur-[100px] opacity-20 bottom-[-10%] right-[-10%]"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl w-full z-10"
            >
                {/* LEFT SIDE CONTENT */}
                <div className="order-2 md:order-1 text-center md:text-left space-y-6">
                    <motion.div variants={itemVariants}>
                        <span className="inline-block uppercase text-orange-600 text-xs md:text-sm tracking-[0.3em] font-bold bg-orange-100 px-3 py-1 rounded-md mb-2">
                            Available for work
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                            Hi There, I’m <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                                Blessed
                            </span>
                        </h1>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-xl md:text-3xl font-semibold text-slate-700 h-[1.5em]" // Fixed height to prevent layout shift
                    >
                        I’m a{" "}
                        <span className="text-orange-500 border-b-2 border-orange-200">
                            <Typewriter
                                words={[
                                    "Software Engineer",
                                    "Frontend Developer",
                                    "Backend Developer",
                                    "Fullstack Developer",
                                    "Mobile App Developer"
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-slate-600 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
                    >
                        I specialize in building modern, high-performance web
                        and mobile applications. From pixel-perfect interfaces
                        to robust backend architectures, I bring ideas to life
                        with clean code.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, translateY: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 transition-all py-4 px-8 rounded-xl font-bold text-white shadow-xl shadow-orange-200"
                        >
                            <FaPaperPlane size={18} />
                            Hire Me
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, translateY: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-3 border-2 border-slate-200 bg-white hover:border-orange-500 hover:text-orange-600 transition-all py-4 px-8 rounded-xl font-bold text-slate-700 shadow-sm"
                        >
                            <FaComments size={18} />
                            Let's Chat
                        </motion.button>
                    </motion.div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="order-1 md:order-2 flex justify-center relative"
                >
                    {/* Decorative Ring around Image */}
                    <div className="absolute inset-0 border-2 border-dashed border-orange-200 rounded-full animate-[spin_20s_linear_infinite] w-[80%] h-[80%] m-auto hidden md:block"></div>

                    <motion.div
                        className="relative z-10"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src="/blessed.jpg"
                            alt="Blessed - Fullstack Developer Portfolio Portrait"
                            className="w-64 md:w-96 h-64 md:h-96 object-cover rounded-[2rem] md:rounded-[4rem] shadow-2xl border-4 border-white ring-1 ring-orange-100"
                            onError={e => {
                                e.target.src =
                                    "https://via.placeholder.com/400x400?text=Blessed+Portrait";
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
