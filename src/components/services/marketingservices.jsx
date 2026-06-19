import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { marketingData } from "../../data/marketingrelated.js";

import {
  ArrowRight,
  HelpCircle,
} from "lucide-react";

import {

  useScroll,
  useSpring
} from "framer-motion";

import { Link, useParams } from "react-router-dom";
import OurExperts from "../Sections/OurExpertSection.jsx";


function AnimatedNumber({ value }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const end = parseInt(value);

    if (isNaN(end)) return;

    const duration = 2000;

    const incrementTime = 20;

    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {

      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }

    }, incrementTime);

    return () => clearInterval(timer);

  }, [value]);

  return <>{count}</>;
}

export default function MarketingDetails() {

  const { slug } = useParams();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const sectionVariant = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const currentService = marketingData.find(
    (service) => service.slug === slug
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!currentService) {
    return (
      <div className="text-center mt-20">
        Marketing Service Not Found
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFDE63] z-[9999] origin-left"
        style={{ scaleX }}
      />


 <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 70% 30%, rgba(255,215,0,0.12), transparent 50%)",
            "radial-gradient(circle at 80% 40%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 30% 70%, rgba(255,215,0,0.12), transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 70% 30%, rgba(255,215,0,0.12), transparent 50%)",
          ],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
        }}
      />
      
      <div
        key={slug}
        className="w-full bg-white text-gray-900 overflow-x-hidden">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">

          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full"
            animate={{
              x: [0, 80, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold mb-5">
                Our Premium Services
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
              >
                {currentService.hero.title}
              </motion.h1>

              <p className="mt-6 text-gray-400  text-lg font-serif leading-relaxed">
                {currentService.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-all flex items-center gap-2">
                  {currentService.hero.primaryButton}
                  <ArrowRight size={18} />
                </button>

                <Link to="tel:+91-9711110975" className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all">
                  {currentService.hero.secondaryButton}
                </Link>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >


              <motion.img
                src={currentService.hero.image}
                alt={currentService.hero.title}
                className="rounded-2xl w-[650px] object-cover shadow-2xl h-[400px]"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </motion.div>

          </div>

        </section>


        <section className="bg-gray-50 border-b border-gray-100 py-12">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

              {currentService.stats.map((stat, i) => {

                const value = parseInt(stat.number);

                return (

                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >

                    <div className="text-3xl md:text-5xl font-black text-gray-900 mb-2">

                      {stat.number === "24/7" ? (
                        stat.number
                      ) : (
                        <>
                          <AnimatedNumber value={value} />
                          {stat.number.includes("+") && "+"}
                        </>
                      )}

                    </div>

                    <div className="text-sm font-medium text-gray-500 tracking-wide uppercase">
                      {stat.label}
                    </div>

                  </motion.div>

                );
              })}

            </div>

          </div>

        </section>

        {currentService.sections.map((section, index) => {

          if (section.type === "content") {

            return (

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariant}
                className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >

                <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                  <motion.div
                    variants={itemVariant}
                    className={`${section.reverse ? "lg:order-last" : ""}`}
                  >

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {section.heading}
                    </h2>

                    <p className="text-gray-600 text-lg font-serif leading-relaxed mb-6">
                      {section.text}
                    </p>

                  </motion.div>

                  <div>

                    <motion.img
                      variants={itemVariant}
                      whileHover={{
                        scale: 1.05,
                        rotate: 1,
                      }}
                      transition={{ duration: 0.4 }}
                      src={section.image}
                      alt={section.heading}
                      className="rounded-3xl shadow-xl w-full object-cover h-[350px]"
                    />

                  </div>

                </div>

              </motion.section>

            );
          }

          if (section.type === "features") {

            return (
              <section
                key={index}
                className="py-20 bg-gradient-to-b from-white to-gray-50"
              >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                  <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
                  >
                    {section.heading}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    {section.items.map((item, idx) => (
                      <motion.div

                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.15,
                        }}
                        whileHover={{
                          y: -10,
                          scale: 1.03,
                        }}
                        className="group relative overflow-hidden p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
                      >

                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                        <motion.div
                          initial={{ scale: 0 }}
                          key={idx}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: idx * 0.15,
                          }}
                          className="relative z-10 w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 font-bold mb-5"
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </motion.div>

                        <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>

                        <p className="relative z-10 text-gray-600 text-md font-serif leading-relaxed">
                          {item.text}
                        </p>

                        <div className="relative z-10 mt-5 w-0 h-1 bg-yellow-500 rounded-full group-hover:w-16 transition-all duration-500" />
                      </motion.div>
                    ))}
                  </motion.div>

                </div>
              </section>

            );
          }



          if (section.type === "process") {

            return (

              <section
                key={index}
                className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
              >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                  <div className="text-center mb-16">
                    <span className="inline-flex px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-4">
                      Our Process
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold">
                      {section.heading}
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                      A streamlined process designed to deliver quality results efficiently.
                    </p>
                  </div>

                  <div className="relative">

                    <div className="hidden lg:block absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500/20 via-yellow-400 to-yellow-500/20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                      {section.steps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          className="relative group"
                          initial={{ opacity: 0, y: 80 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: idx * 0.15,
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -10,
                          }}
                        >
                          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 h-full hover:border-yellow-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-xl mx-auto mb-5 shadow-lg shadow-yellow-500/20">
                              {idx + 1}
                            </div>

                            <h4 className="text-lg font-semibold text-center text-white">
                              {step}
                            </h4>

                            <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          </div>
                        </motion.div>
                      ))}

                    </div>

                  </div>
                </div>
              </section>

            );
          }

          if (section.type === "cta") {

            return (

              <section
                key={index}
                className="py-16 bg-yellow-400 text-black text-center"
              >

                <div className="max-w-5xl mx-auto px-6">

                  <h2 className="text-3xl md:text-5xl font-black mb-4">
                    {section.heading}
                  </h2>

                  <p className="text-lg mb-8 font-serif font-medium">
                    {section.text}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(0,0,0,0)",
                        "0 0 40px rgba(0,0,0,0.4)",
                        "0 0 0px rgba(0,0,0,0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="px-8 py-4 bg-black text-white font-bold rounded-full"
                  >
                    <Link to="tel:+91-9711110975" className="flex items-center gap-2" >
                      {section.button}
                    </Link>
                  </motion.button>

                </div>

              </section>

            );
          }

          if (section.type === "faq") {

            return (

              <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-6">

                  <div className="text-center mb-14">
                    <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
                      Frequently Asked Questions
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                      {section.heading}
                    </h2>

                    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-5 rounded-full" />
                  </div>

                  <motion.div

                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }} className="space-y-5">
                    {section.faqs.map((faq, idx) => (
                      <motion.details
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: idx * 0.1,
                        }}>
                        <summary className="flex items-center justify-between cursor-pointer p-6 md:p-7 list-none">

                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>

                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 shrink-0 transition-all duration-300 group-open:rotate-45">
                            <span className="text-2xl font-light">+</span>
                          </div>

                        </summary>

                        <div className="px-6 md:px-7 pb-6">
                          <div className="h-px bg-gray-200 mb-5"></div>

                          <p className="text-gray-600 font-serif leading-8">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.details>
                    ))}
                  </motion.div>

                </div>
              </section>
            );
          }

          return null;

        })}

        <div className="bg-gradient-to-b text-white py-10">
          <OurExperts />
        </div>

      </div >
    </>
  );
}