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

  

  return (
    <div className="overflow-x-hidden bg-white">

      <section className="relative min-h-screen w-full overflow-hidden">

        <img
          src="/images/Corporat1.jpeg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-white px-4 md:px-6 text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            max-w-5xl
            "
          >
            Grow Your Business <br />

            <span className="text-yellow-400">
              With Smart Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
            text-base
            sm:text-lg
            md:text-xl
            text-gray-200
            mt-6
            md:mt-8
            max-w-3xl
            leading-7
            md:leading-8
            font-serif
            "
          >
            We help businesses grow through premium websites, SEO,
            branding, travel services, and modern digital experiences
            designed for performance and success.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-4
            mt-10
            "
          >

            <button
              className="
              bg-yellow-400
              hover:bg-white
              text-black
              font-semibold
              px-6
              md:px-8
              py-3.5
              md:py-4
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
              px-6
              md:px-8
              py-3.5
              md:py-4
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

      <motion.section
        className="overflow-hidden"
        
      >
        <AboutSection />
      </motion.section>

      <motion.section
        className="overflow-hidden"
        
      >
        <ServicesSection />
      </motion.section>

      <motion.section
        className="overflow-hidden"
        
      >
        <WhyChooseUsPage />
      </motion.section>

      <motion.section
        className="overflow-hidden"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <FeaturesSlider />
      </motion.section>

      <motion.section
        className="overflow-hidden"
        
      >
        <TestimonialSection />
      </motion.section>

      <motion.section
        className="overflow-hidden"
        
      >
        <ContactSection />
      </motion.section>

    </div>
  );
}