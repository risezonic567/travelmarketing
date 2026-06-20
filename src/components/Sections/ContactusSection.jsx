import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactSection() {
       const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d8z2luw",
        "template_737hhog",
        form.current,
        "uigXUlPKgly_hX1e4"
      )
      .then(
        () => {
          alert("Message Sent Successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="relative min-h-screen bg-[#050038] py-12 px-4 flex items-center justify-center overflow-hidden">
      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[140px]" />
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="bg-[#080437] backdrop-blur-xl border border-yellow-800 rounded-2xl p-6 md:p-10 shadow-2xl">
          
         
          <div className="text-center mb-8">
            <span className="text-zinc-700 bg-yellow-400 rounded-2xl uppercase tracking-[3px] text-lg p-1 font-semibold">
              Contact Us
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something <span className="text-yellow-400">Amazing</span>
            </h2>

            <p className="mt-2 text-md text-zinc-400 max-w-md mx-auto">
              Share your project idea and we'll help transform it into a digital solution.
            </p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <div>
              <label className="block mb-1.5 text-md font-medium text-zinc-400">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-zinc-600/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 outline-none transition-all duration-200 hover:border-yellow-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1.5 text-md font-medium text-zinc-400">
                  Phone Number
                </label>
                <div className="flex bg-zinc-600/50 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-200 focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-400/10 hover:border-yellow-400">
                  <div className="px-3 flex items-center border-r border-zinc-800 text-sm text-zinc-400 bg-zinc-600/50">
                    🇮🇳 +91
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                    className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder-zinc-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1.5 text-md font-medium text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-zinc-600/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 outline-none transition-all duration-200 hover:border-yellow-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1.5 text-md font-medium text-zinc-400">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                required
                placeholder="Tell us about your project..."
                className="w-full bg-zinc-600/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-400 outline-none resize-none transition-all duration-200 hover:border-yellow-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full mt-2 py-3.5 rounded-xl font-semibold text-sm bg-white text-black hover:bg-zinc-100 transition-colors shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}