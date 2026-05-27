import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Users,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Company",
    desc: "Reliable digital services trusted by businesses worldwide.",
  },

  {
    icon: Rocket,
    title: "Fast Growth",
    desc: "Modern strategies to grow your business faster online.",
  },

  {
    icon: Users,
    title: "Expert Team",
    desc: "Professional team delivering premium experiences.",
  },

  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Helping brands connect with global audiences.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-32 bg-[#0B1F3A] overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold"
          >
            Why Choose Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mt-6"
          >
            Trusted Digital <br />

            <span className="text-yellow-400">
              Growth Partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto mt-6"
          >
            We create premium websites, SEO solutions, and digital experiences
            designed to help businesses grow faster.
          </motion.p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                  bg-white
                  border
                  border-gray-200
                  rounded-[28px]
                  p-8
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                  hover:border-yellow-400
                  transition-all
                  duration-500
                  "
                >

                  <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">
                    <Icon className="text-black" size={26} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

    </div>
  );
}