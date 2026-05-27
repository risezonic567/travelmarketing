import { Mail, MapPin, Phone, Plane, } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A]  text-white pt-14 pb-6 font-serif ">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-yellow-400 p-2 rounded-full">
              <Plane className="text-[#0B1F3A]" size={22} />
            </div>
            <h1 className="text-2xl font-bold">
              Global<span className="text-yellow-400">Way</span>
            </h1>
          </div>

          <p className="text-gray-300 leading-7">
            Travel smart and grow your business globally with premium travel
            and business solutions.
          </p>

          <div className="flex gap-4 mt-6">
            <Link to="https://facebook.com"  rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black duration-300 p-3 rounded-full cursor-pointer flex items-center justify-center">
              <FaFacebook size={18} />
            </Link>
            <Link to="https://twitter.com"  rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black duration-300 p-3 rounded-full cursor-pointer flex items-center justify-center">
              <FaTwitter size={18} />
            </Link>
            <Link to="https://instagram.com"  rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black duration-300 p-3 rounded-full cursor-pointer flex items-center justify-center">
              <FaInstagram size={18} />
            </Link>
            <Link to="https://linkedin.com"  rel="noopener noreferrer" className="bg-white/10 hover:bg-yellow-400 hover:text-black duration-300 p-3 rounded-full cursor-pointer flex items-center justify-center">
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5 text-yellow-400">
            Quick Links
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <Link to="/" className="hover:text-yellow-400 duration-300 block">Home</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-yellow-400 duration-300 block">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400 duration-300 block">Services</Link>
            </li>
            <li>
              <Link to="/tour-packages" className="hover:text-yellow-400 duration-300 block">Tour Packages</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-yellow-400 duration-300 block">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5 text-yellow-400">
            Services
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <Link to="/google-ads" className="hover:text-yellow-400 duration-300 block">Google Ads</Link>
            </li>
            <li>
              <Link to="/website-design" className="hover:text-yellow-400 duration-300 block">Website Design</Link>
            </li>
            <li>
              <Link to="/seo-services" className="hover:text-yellow-400 duration-300 block">SEO Services</Link>
            </li>
            <li>
              <Link to="/business-consulting" className="hover:text-yellow-400 duration-300 block">Business Consulting</Link>
            </li>
            <li>
              <Link to="/holiday-packages" className="hover:text-yellow-400 duration-300 block">Holiday Packages</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5 text-yellow-400">
            Contact Us
          </h2>
          <div className="space-y-4 text-gray-300">
            <Link to="tel:+919876543210" className="flex items-center gap-3 hover:text-yellow-400 duration-300 group">
              <Phone size={18} className="text-yellow-400 group-hover:scale-110 duration-300" />
              <p>+91 9876543210</p>
            </Link>
            <Link to="mailto:info@globalway.com" className="flex items-center gap-3 hover:text-yellow-400 duration-300 group">
              <Mail size={18} className="text-yellow-400 group-hover:scale-110 duration-300" />
              <p>info@globalway.com</p>
            </Link>
            <Link to="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-yellow-400 duration-300 group">
              <MapPin size={18} className="text-yellow-400 mt-1 group-hover:scale-110 duration-300" />
              <p>New Delhi, India</p>
            </Link>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2026 GlobalWay. All Rights Reserved.
      </div>
    </footer>
  );
}