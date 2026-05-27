import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Plane,
  ShieldCheck,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* TOP LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
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
          >

            <span className="uppercase tracking-[5px] text-yellow-500 text-sm font-semibold">
              About Our Agency
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

            {/* Features */}
            <div className="space-y-6 mt-12">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center">
                  <Globe className="text-black" size={28} />
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-[#0B1F3A]">
                    Global Travel Network
                  </h4>

                  <p className="text-gray-600 font-serif mt-2">
                    International travel solutions worldwide.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] flex items-center justify-center">
                  <ShieldCheck className="text-white" size={28} />
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-[#0B1F3A]">
                    Trusted & Secure
                  </h4>

                  <p className="text-gray-600 font-serif mt-2">
                    Safe bookings with premium customer support.
                  </p>
                </div>

              </div>

            </div>

            {/* Button */}
            <button
              className="
              mt-12
              bg-[#0B1F3A]
              hover:bg-yellow-400
              hover:text-black
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              flex
              items-center
              gap-3
              transition-all
              duration-300
              "
            >
              Explore More

              <ArrowRight size={18} />
            </button>

          </motion.div>

          {/* RIGHT IMAGES */}
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
  className="relative h-[520px] sm:h-[620px] lg:h-[700px] mt-16 lg:mt-0"
>

  {/* Main Image */}
  <div
    className="
    absolute
    top-0
    right-0
    w-[90%]
    sm:w-[80%]
    h-[320px]
    sm:h-[420px]
    lg:h-[500px]
    rounded-[25px]
    sm:rounded-[40px]
    overflow-hidden
    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
    "
  >
    <img
      src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Small Image */}
  <div
    className="
    absolute
    bottom-0
    left-0
    w-[65%]
    sm:w-[55%]
    h-[220px]
    sm:h-[280px]
    lg:h-[320px]
    rounded-[22px]
    sm:rounded-[32px]
    overflow-hidden
    border-[5px]
    sm:border-[8px]
    border-white
    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
    "
  >
    <img
      src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Floating Experience Card */}
  <motion.div
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
    absolute
    top-[42%]
    left-4
    sm:left-10
    bg-white
    px-5
    sm:px-8
    py-4
    sm:py-6
    rounded-2xl
    sm:rounded-3xl
    shadow-[0_10px_40px_rgba(0,0,0,0.12)]
    "
  >

    <h3 className="text-3xl sm:text-5xl font-bold text-yellow-500">
      10+
    </h3>

    <p className="text-[#0B1F3A] mt-1 sm:mt-2 text-sm sm:text-base font-medium">
      Years Experience
    </p>

  </motion.div>

</motion.div>

        </div>

        {/* BOTTOM INFO BLOCKS */}
        <div className="grid lg:grid-cols-2 gap-8 mt-32">

          {/* LEFT BLOCK */}
          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
            bg-[#0B1F3A]
            rounded-[40px]
            p-12
            text-white
            relative
            overflow-hidden
            "
          >

            <div className="absolute top-0 right-0 w-60 h-60 bg-yellow-400/10 blur-[100px] rounded-full"></div>

            <Plane size={55} className="text-yellow-400 mb-8" />

            <h3 className="text-4xl font-bold leading-tight">
              Luxury Travel <br />
              Designed For Modern Explorers
            </h3>

            <p className="text-white/70 leading-8 mt-6 text-lg font-serif">
              Discover curated travel experiences, business tours,
              and premium journeys crafted with comfort and elegance.
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
            bg-yellow-400
            rounded-[40px]
            p-12
            text-black
            "
          >

            <h3 className="text-6xl font-bold">
              10K+
            </h3>

            <p className="text-2xl font-semibold mt-3">
              Happy Travelers Worldwide
            </p>

            <p className="leading-8 mt-8 text-black/80 text-lg font-serif">
              Thousands of customers trust us for international
              travel, business trips, and luxury experiences.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}