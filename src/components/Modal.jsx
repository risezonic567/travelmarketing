import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Modal({ show, onClose }) {

 const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8z2luw', 'template_737hhog', form.current, 'uigXUlPKgly_hX1e4')
      .then(
        ()=>{
          alert("Message Sent Successfully")
        },
        (error)=>{
          console.log(error.text)
        }
      )
    }


  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ opacity: 0, scale: 0.8, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 80 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 120,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>

            <h2 className="text-3xl font-bold text-center mb-6">
              Inquiry Form
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="input-field"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="input-field"
              />

               <input
                type="text"
                name="phone"
                required
                placeholder="Your Phone Number"
                className="input-field"
              />

              <textarea
                rows="4"
                name="message"
                required
                placeholder="Your Message"
                className="input-field"
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="submit-btn"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}