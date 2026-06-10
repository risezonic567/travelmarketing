import React from "react";
import { motion } from "framer-motion";

import {
  Globe2,
  Database,
  Search,
  Palette,
  Megaphone,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const expertise = [
  {
    id: 1,
    title: "Web Development",
    desc: "Modern, fast, and scalable websites designed to grow your business online.",
    icon: Globe2,
    path:"/development-services/web-development"
  },

  {
    id: 2,
    title: "CRM Solutions",
    desc: "Custom CRM systems to manage customers, automate workflows, and increase productivity.",
    icon: Database,
    path:"/development-services/crm-website-development"
  },

  {
    id: 3,
    title: "SEO Optimization",
    desc: "Improve your Google rankings and drive high-quality organic traffic to your website.",
    icon: Search,
    path:"/development-services/seo-optimization"
  },

  {
    id: 4,
    title: "API Integration",
    desc: "Seamlessly integrate third-party APIs to enhance functionality and streamline operations.",
    icon: Palette,
    path:"/development-services/travelpayouts-api-integration"
  },

  {
    id: 5,
    title: "Digital Marketing",
    desc: "Result-driven marketing strategies to boost brand visibility and online sales.",
    icon: Megaphone,
    path:"/marketing-services/digital-marketing"
  },

  {
    id: 6,
    title: "App Development",
    desc: "High-performance mobile and web applications tailored for your business needs.",
    icon: Smartphone,
    path:"/development-services/android-app-development"
  },
];

export default function OurExperts() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#050038]">


      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold mb-4">
            Our Experts
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            We Create Seamless Travel Experiences Around The World
          </h2>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">


          <div className="space-y-8">

            {expertise.slice(0, 2).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                 
                  className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden hover:border-yellow-400/40 transition duration-500"
                >


                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-700" />

                 <Link to={item.path} className="relative z-10">
                  <div className="relative z-10">

                    <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-6 shadow-lg">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 font-serif leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                 </Link>
                </motion.div>
              );
            })}
          </div>


          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[420px] h-[420px] border-2 border-dashed border-yellow-400/40 rounded-full"
            />

            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="relative z-10 w-[340px] h-[500px] object-cover rounded-[60px] border-4 border-white/10 shadow-2xl"
            />

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 right-5 bg-yellow-400 text-black px-6 py-4 rounded-2xl shadow-2xl z-20"
            >
              <h4 className="text-2xl font-bold">
                10+
              </h4>

              <p className="font-medium">
                Years Experience
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-8">

            {expertise.slice(2, 4).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden hover:border-yellow-400/40 transition duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-700" />

                 <Link to={item.path} className="relative z-10">
                  <div className="relative z-10">

                    <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-6 shadow-lg">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 font-serif leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                 </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}