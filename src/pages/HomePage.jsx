import React from "react";
import FeaturesSlider from "../components/Sections/FeaturesSlider";
import AboutSection from "../components/Sections/AboutSection";
import ServicesSection from "../components/Sections/ServiceSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactSection from "../components/Sections/ContactusSection";
import TestimonialSection from "../components/Testimonials";
import WhyChooseUsPage from "../components/Sections/WhychooseusSection";

export default function HomePage() {
   const fadeUp = {
    hidden: {
      opacity: 0,
      y: 120,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">

        <img
          src="/images/Corporat1.jpeg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-[#0B1F3A]/20 to-black/10"></div> */}

        <div className="relative z-10 flex flex-col justify-center mt-7 items-center h-full text-white px-6 text-center">

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
            uppercase
            tracking-[4px]
            text-yellow-400
            text-sm
            font-semibold 
            "
          >
            Premium Business & Travel Solutions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            mt-6
            max-w-5xl
            "
          >
            Grow Your Business <br />

            <span className="text-yellow-400">
              With Smart Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
            text-lg
            md:text-xl
            text-gray-100
            mt-8
            max-w-3xl
            leading-8
            "
          >
            We help businesses grow through premium websites, SEO,
            branding, travel services, and modern digital experiences
            designed for performance and success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >

            <button
              className="
              bg-yellow-400
              hover:bg-white
              text-black
              font-semibold
              px-8
              py-4
              rounded-full
              transition-all
              duration-300
              flex
              items-center
              gap-3
              "
            >
              Explore Services

              <ArrowRight size={18} />
            </button>

            <button
              className="
              border
              border-white/30
              hover:border-yellow-400
              hover:bg-yellow-400
              hover:text-black
              text-white
              font-semibold
              px-8
              py-4
              rounded-full
              transition-all
              duration-300
              "
            >
              Contact Us
            </button>

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

    <div className="overflow-hidden">

  {/* ABOUT */}
  <motion.section
    className="overflow-hidden"
    initial={{
      opacity: 0,
      x: -120,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    }}
    viewport={{
      once: true,
      amount: 0.3,
    }}
  >
    <AboutSection />
  </motion.section>

  {/* SERVICES */}
  <motion.section
    className="overflow-hidden"
    initial={{
      opacity: 0,
      y: 120,
      rotateX: 20,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      rotateX: 0,
    }}
    transition={{
      duration: 1.1,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
  >
    <ServicesSection />
  </motion.section>

  <motion.section
    className="overflow-hidden"
    initial={{
      opacity: 0,
      x: -120,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    }}
    viewport={{
      once: true,
      amount: 0.3,
    }}
  >
    <WhyChooseUsPage />
  </motion.section>

  {/* FEATURES */}
  <motion.section
    className="overflow-hidden"
    initial={{
      opacity: 0,
      scale: 0.92,
      filter: "blur(10px)",
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 1.2,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
  >
    <FeaturesSlider />
  </motion.section>

  {/* TESTIMONIAL */}
  <motion.section
    className="overflow-hidden"
    initial={{
      opacity: 0,
      x: 120,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 1,
      ease: "easeOut",
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
  >
    <TestimonialSection />
  </motion.section>

  {/* CONTACT */}
  <motion.section
    className="overflow-hidden"
    initial={{
      opacity: 0,
      y: 100,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
  >
    <ContactSection />
  </motion.section>

</div>

  
    </>
  );
}