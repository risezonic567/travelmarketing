import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6  right-6 z-50">
      
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-10"></span>

      <motion.a
        href="https://wa.me/919711110975"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          flex
          items-center
          gap-3
          bg-green-500
          text-white
          rounded-full
          px-5
          py-4
          shadow-[0_10px_30px_rgba(34,197,94,0.5)]
          overflow-hidden
        "
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <FaWhatsapp className="text-3xl shrink-0" />

        <span
          className="
            hidden
            md:block
            font-medium
            whitespace-nowrap
          "
        >
          Chat With Us
        </span>
      </motion.a>
    </div>
  );
}