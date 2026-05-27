import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { FaFacebookF, FaLinkedinIn, FaYoutube, FaPinterestP, FaInstagram } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="min-h-screen bg-slate-950 mb-10 text-white py-11 px-4 flex items-center justify-center overflow-hidden font-sans">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        <motion.div 
          className="lg:col-span-5 flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-850 border border-slate-800/80 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Have Any Project? <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Let's Grow Together!
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              If you have any business ideas or projects, contact us to design, develop, and grow your business digitally.
            </p>
          </motion.div>

            {/* <motion.div 
              variants={itemVariants}
              className="flex-1 p-8 rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-850 border border-slate-800/80 shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[300px] group"
            >
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mb-6" />
                <p className="text-xl font-medium text-slate-300 italic">
                  "Transforming complex ideas into seamless digital realities."
                </p>
              </div>
            </motion.div> */}
        </motion.div>

        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}
        >
          <form 
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl flex flex-col gap-6 relative"
          >
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

            <div className="flex flex-col gap-1.5 group">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase group-focus-within:text-amber-400 transition-colors">
                Full Name <span className="text-yellow-500">*</span>
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/30 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1.5 group">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase group-focus-within:text-amber-400 transition-colors">
                Phone Number <span className="text-yellow-500">*</span>
              </label>
              <div className="flex bg-slate-950/60 border border-slate-800 rounded-xl focus-within:border-amber-500/80 focus-within:ring-1 focus-within:ring-amber-500/30 transition-all duration-300 overflow-hidden">
                <div className="flex items-center gap-2 px-4 bg-slate-900 border-r border-slate-800 text-slate-300 text-sm font-medium">
                  <span className="text-lg">🇮🇳</span>
                  <span>+91</span>
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone-number"
                  className="w-full bg-transparent px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 group">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase group-focus-within:text-amber-400 transition-colors">
                Email Address <span className="text-yellow-500">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Id"
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/30 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1.5 group">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase group-focus-within:text-amber-400 transition-colors">
                Message <span className="text-yellow-500">*</span>
              </label>
              <textarea 
                name="message"
                required
                rows="4"
                value={formData.message}  
                onChange={handleChange}
                placeholder="Type your message here ..."
                className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/30 transition-all duration-300 resize-none"
              />
            </div>

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-2 hover:bg-white bg-yellow-500  text-black font-semibold text-base py-4 px-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out tracking-wide"
            >
              Submit Message
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}