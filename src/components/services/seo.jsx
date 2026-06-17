

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { seoData } from "../../data/seo.js";
import OurExperts from "../Sections/OurExpertSection.jsx";

// 1. Animated Number Component (Optimized)
function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
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

// 2. Custom FAQ Item for Smooth Height Animations
function FAQItem({ faq, idx }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="border border-gray-200/80 bg-white rounded-3xl overflow-hidden shadow-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left p-6 md:p-7 focus:outline-none group"
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4 group-hover:text-yellow-600 transition-colors">
          {faq.question}
        </h3>
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 text-yellow-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-yellow-400 text-black" : ""
            }`}
        >
          <ChevronDown size={20} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-7 pb-6">
              <div className="h-px bg-gray-100 mb-5" />
              <p className="text-gray-600 font-serif leading-8 text-base md:text-lg">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Main Component
export default function ServiceDetails() {
  const { slug } = useParams();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeFaq, setActiveFaq] = useState(null);

  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const currentService = seoData.find((service) => service.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!currentService) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-xl font-semibold text-gray-500">
        SEO Service Not Found
      </div>
    );
  }

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFDE63] z-[9999] origin-left"
        style={{ scaleX }}
      />

      {/* Dynamic Background Mesh Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="w-full bg-white text-gray-900 overflow-x-hidden relative z-10">

        {/* --- Hero Section --- */}
        <section className="relative pt-36 pb-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-semibold mb-5">
                Our Premium Services
              </span>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                {currentService.hero.title}
              </h1>

              <p className="mt-6 text-gray-400 text-lg font-serif leading-relaxed max-w-xl">
                {currentService.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-all flex items-center gap-2 group shadow-lg shadow-yellow-400/10">
                  {currentService.hero.primaryButton}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="tel:+91-9711110975"
                  className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-full hover:bg-white hover:text-black hover:border-white transition-all"
                >
                  {currentService.hero.secondaryButton}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <motion.img
                src={currentService.hero.image}
                alt={currentService.hero.title}
                className="rounded-3xl w-full max-w-[600px] object-cover shadow-2xl h-[420px] border border-white/5"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </section>

        {/* --- Stats Counter Section --- */}
        <section className="bg-gray-50 border-b border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {currentService.stats.map((stat, i) => {
                const value = parseInt(stat.number, 10);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
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
                    <div className="text-xs md:text-sm font-bold text-gray-400 tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Dynamic Content Blocks Loop --- */}
        {currentService.sections.map((section, index) => {

          // Type 1: Standard Content Grid
          if (section.type === "content") {
            return (
              <motion.section
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariant}
                className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                    variants={itemVariant}
                    className={section.reverse ? "lg:order-last" : ""}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                      {section.heading}
                    </h2>
                    <p className="text-gray-600 font-serif text-lg leading-relaxed">
                      {section.text}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariant}>
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      src={section.image}
                      alt={section.heading}
                      className="rounded-3xl shadow-lg w-full object-cover h-[380px] border border-gray-100"
                    />
                  </motion.div>
                </div>
              </motion.section>
            );
          }

          // Type 2: Features Feature Grid Cards
          if (section.type === "features") {
            return (
              <section key={index} className="py-24 bg-gradient-to-b from-white to-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16 tracking-tight"
                  >
                    {section.heading}
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {section.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="group relative overflow-hidden p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-700 font-bold mb-6">
                          {String(idx + 1).padStart(2, "0")}
                        </div>

                        <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="relative z-10 text-gray-600 font-serif text-sm leading-relaxed">
                          {item.text}
                        </p>
                        <div className="relative z-10 mt-6 w-0 h-1 bg-yellow-400 rounded-full group-hover:w-16 transition-all duration-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          // Type 3: Detailed Roadmap/Steps Process Section
          if (section.type === "process") {
            return (
              <section key={index} className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                  <div className="text-center mb-20">
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-4">
                      Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                      {section.heading}
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-serif">
                      A streamlined process designed to deliver quality results efficiently.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                      {section.steps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          whileHover={{ y: -6 }}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-black font-extrabold text-lg mb-5 shadow-lg shadow-yellow-500/10">
                            {idx + 1}
                          </div>
                          <h4 className="text-base font-semibold leading-snug text-gray-100">
                            {step}
                          </h4>
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
              <section key={index} className="py-20 bg-yellow-400 text-black text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 font-serif font-medium max-w-2xl mx-auto text-black/80">
                    {section.text}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 bg-black text-white font-bold rounded-full shadow-xl hover:bg-gray-900 transition-colors"
                  >
                    <Link to="tel:+91-9711110975" className="flex items-center gap-2">
                      {section.button}
                    </Link>
                  </motion.button>
                </div>
              </section>
            );
          }

          // Type 5: Accordion-style FAQ List
          if (section.type === "faq") {
            return (
              <section key={index} className="py-24 bg-gray-50/50">
                <div className="max-w-4xl mx-auto px-6">
                  <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-4">
                      Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                      {section.heading}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {section.faqs.map((faq, idx) => (
                      <FAQItem key={idx} faq={faq} idx={idx} />
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          return null;
        })}

      
        <div className="bg-gradient-to-b text-white py-10">
          <OurExperts />
        </div>
      </div>
    </>
  );
}