import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  HelpCircle,
} from "lucide-react";

import { useParams } from "react-router-dom";
import { seoData } from "../../data/seo.js";

/* COUNTER FUNCTION */

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

export default function SeoDetails() {

  const { slug } = useParams();

  const currentService = seoData.find(
    (service) => service.slug === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!currentService) {
    return (
      <div className="text-center mt-20">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-gray-900 overflow-x-hidden">

      {/* HERO SECTION */}

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold mb-5">
              Our Premium Services
            </span>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              {currentService.hero.title}
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              {currentService.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-all flex items-center gap-2">
                {currentService.hero.primaryButton}
                <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all">
                {currentService.hero.secondaryButton}
              </button>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            <img
              src={currentService.hero.image}
              alt={currentService.hero.title}
              className="rounded-2xl w-[650px] object-cover shadow-2xl h-[400px]"
            />

          </motion.div>

        </div>

      </section>

      {/* STATS SECTION */}

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

      {/* DYNAMIC SECTIONS */}

      {currentService.sections.map((section, index) => {

        /* CONTENT SECTION */

        if (section.type === "content") {

          return (

            <section
              key={index}
              className="py-20 border-b border-gray-50"
            >

              <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className={`${section.reverse ? "lg:order-last" : ""}`}>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {section.heading}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {section.text}
                  </p>

                </div>

                <div>

                  <img
                    src={section.image}
                    alt={section.heading}
                    className="rounded-3xl shadow-xl w-full object-cover h-[350px]"
                  />

                </div>

              </div>

            </section>

          );
        }

        /* FEATURES SECTION */

        if (section.type === "features") {

          return (

            <section
              key={index}
              className="py-20 bg-gradient-to-b from-white to-gray-50"
            >

              <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                  {section.heading}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                  {section.items.map((item, idx) => (

                    <div
                      key={idx}
                      className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
                    >

                      <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 font-bold mb-4">
                        0{idx + 1}
                      </div>

                      <h3 className="text-xl font-bold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        {item.text}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </section>

          );
        }

        /* PROCESS SECTION */

        if (section.type === "process") {

          return (

            <section
              key={index}
              className="py-20 bg-gray-900 text-white"
            >

              <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                  {section.heading}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

                  {section.steps.map((step, idx) => (

                    <div
                      key={idx}
                      className="flex flex-col items-center text-center"
                    >

                      <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold mb-3">
                        {idx + 1}
                      </div>

                      <h4 className="font-semibold text-gray-200">
                        {step}
                      </h4>

                    </div>

                  ))}

                </div>

              </div>

            </section>

          );
        }

        /* CTA SECTION */

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

                <p className="text-lg mb-8 font-medium">
                  {section.text}
                </p>

                <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition">
                  {section.button}
                </button>

              </div>

            </section>

          );
        }

        /* FAQ SECTION */

        if (section.type === "faq") {

          return (

            <section
              key={index}
              className="py-20 bg-white"
            >

              <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  {section.heading}
                </h2>

                <div className="space-y-4">

                  {section.faqs.map((faq, idx) => (

                    <details
                      key={idx}
                      className="group border border-gray-200 rounded-2xl p-6 cursor-pointer bg-gray-50/50"
                    >

                      <summary className="flex items-center justify-between gap-4 font-semibold text-gray-900 text-lg list-none">

                        <span>{faq.question}</span>

                        <HelpCircle
                          size={20}
                          className="text-yellow-600 group-open:rotate-180 transition duration-300"
                        />

                      </summary>

                      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>

                    </details>

                  ))}

                </div>

              </div>

            </section>

          );
        }

        return null;

      })}

    </div>
  );
}