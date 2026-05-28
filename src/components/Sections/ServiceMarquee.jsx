import React from "react";
import { motion } from "framer-motion";

const services = [
  "Web Development",
  "CRM Solutions",
  "SEO Optimization",
  "UI/UX Design",
  "Digital Marketing",
  "App Development",
  "Brand Strategy",
  "API Integration",
  "Cloud Solutions",
  "E-Commerce Development",
  "Social Media Marketing",
  "Custom Software",
];

export default function ServicesMarquee() {
  return (
    <section className="py-10 bg-[#050038] overflow-hidden">

      <div className="relative">

        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />

        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />


        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...services, ...services].map(
            (service, index) => (
              <div
                key={index}
                className="px-8 py-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white text-lg font-semibold shadow-lg hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer"
              >
                {service}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}