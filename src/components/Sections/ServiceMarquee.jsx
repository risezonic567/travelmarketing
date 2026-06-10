import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
 {
  title: "Web Development",
  path:"/development-services/web-development"
 },
 {
  title: "CRM Solutions",
  path:"/development-services/crm-website-development"
 },
 {
  title: "SEO Optimization",
  path:"/seo-services/seo-optimization"
 },
 {
  title: "Web Designing",
  path:"/development-services/website-design"
 },
 {
  title: "Digital Marketing",
  path:"/marketing-services/digital-marketing"
 },
 {
  title: "App Development",
  path:"/development-services/android-app-development"
 },
 {
  title: "Lead Generation",
  path:"/marketing-services/lead-generation"
 },
 {
  title: "API Integration",
  path:"/development-services/amadeus-api-integration"
 },
 {
  title: "Google Ads -(PPC Advertising)",
  path:"/ads-services/google-ads"
 },
 {
  title: "E-Commerce Development",
  path:"/development-services/e-commerce-website-development"
 },
 {
  title: "Social Media Marketing",
  path:"/marketing-services/social-media-marketing"
 },
 {
  title: "iOS App Development",
  path:"/development-services/ios-app-development"
 }
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
                <Link to={service.path} className="text-white hover:text-black">
                  {service.title}
                </Link>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}