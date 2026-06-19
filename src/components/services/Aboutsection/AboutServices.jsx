import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Globe,
    Plane,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutServices() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.9,
                        }}
                        viewport={{ once: true }}
                        className="md:mb-36"
                        
                    >

                        <span className="uppercase  tracking-[5px] text-yellow-500 text-sm font-semibold">
                            Travel CRM MODULE
                        </span>

                        <h2 className="text-5xl md:text-5xl font-bold text-[#0B1F3A] leading-[1.1] mt-6">
                            We Create <br />

                            <span className="text-yellow-500">
                                Premium Travel
                            </span>

                            <br />
                            Experiences
                        </h2>

                        <p className="text-gray-600 text-lg leading-9 font-serif mt-10 max-w-2xl">
                            We help travelers and businesses explore the world with
                            modern solutions, premium comfort, and trusted support
                            designed for unforgettable journeys.
                        </p>



                        <Link to="https://wa.me/+91-9711110975"
                            className="mt-12 bg-[#0B1F3A]    bg-yellow-400 hover:text-black w-[170px] text-black   px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300"
                        >
                            Chat Now

                            <ArrowRight size={18} />
                        </Link>

                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className="relative h-[520px] sm:h-[620px] lg:h-[700px] mt-16 "
                    >


                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                           absolute
                             top-0
                           right-0
                            w-full
                         h-[500px]
                     rounded-[40px]
                       overflow-hidden
                       shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                          "
                        >
                            <img
                                src="/images/Home About Intro w-550px h-500px.jpg.jpeg"
                                alt="Travel"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                    </motion.div>

                </div>


            </div>
        </section>
    );
}