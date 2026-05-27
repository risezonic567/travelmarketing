import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import {
  Globe,
  Search,
  BarChart3,
  MonitorSmartphone,
  Code2,
  ShoppingCart,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import "swiper/css";

const services = [
  {
    title: "SEO Optimization",
    desc: "Boost your website ranking with advanced SEO strategies.",
    icon: Search,
  },
  {
    title: "Web Development",
    desc: "Modern and responsive websites for every business niche.",
    icon: Globe,
  },
  {
    title: "Analytics & Growth",
    desc: "Track visitors and improve conversions effectively.",
    icon: BarChart3,
  },
  {
    title: "Responsive Design",
    desc: "Mobile-friendly websites with smooth user experience.",
    icon: MonitorSmartphone,
  },
  {
    title: "Custom Coding",
    desc: "Clean and scalable code for fast performance.",
    icon: Code2,
  },
  {
    title: "E-Commerce Store",
    desc: "Sell products online with secure payment systems.",
    icon: ShoppingCart,
  },
  {
    title: "Website Security",
    desc: "Protect your website from threats and vulnerabilities.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Performance",
    desc: "Lightning-fast websites optimized for speed.",
    icon: Rocket,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFB800]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B1D51] blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#FFB800] uppercase tracking-[4px] text-sm font-semibold">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
            Premium Digital <br />
            <span className="text-[#FFB800]">
              Services For Businesses
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-6 leading-relaxed">
            We create powerful SEO strategies and high-performing websites
            designed to help businesses grow faster online.
          </p>
        </motion.div>

        {/* Swiper Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 100,
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
                      y: -12,
                      scale: 1.03,
                    }}
                    className="
                    relative
                    h-full
                    rounded-3xl
                    border
                    border-[#1E3A8A]
                    bg-[#111827]/70
                    backdrop-blur-xl
                    p-8
                    overflow-hidden
                    group
                    transition-all
                    duration-500
                    hover:border-[#FFB800]
                    hover:shadow-[0_0_35px_rgba(255,184,0,0.18)]
                    "
                  >

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-[#FFB800]/5 to-transparent"></div>

                    {/* Icon */}
                    <div
                      className="
                      relative
                      z-10
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#FFB800]/10
                      flex
                      items-center
                      justify-center
                      mb-7
                      transition-all
                      duration-500
                      group-hover:bg-[#FFB800]
                      group-hover:rotate-6
                      "
                    >
                      <Icon
                        size={30}
                        className="
                        text-[#FFB800]
                        transition-all
                        duration-500
                        group-hover:text-black
                        "
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-[15px]">
                        {service.desc}
                      </p>
                    </div>

                    {/* Bottom Line Animation */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#FFB800] group-hover:w-full transition-all duration-500"></div>

                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}