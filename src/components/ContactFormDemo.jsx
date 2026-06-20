import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";
export default function ContactFormDemo({ show, close }) {
  if (!show) return null;

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8z2luw', 'template_8hy1tqi', form.current, 'uigXUlPKgly_hX1e4')
      .then(
        () => {
          alert("Message Sent Successfully")
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">


      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      />


      <div
        className="
          relative
          w-[95%]
          sm:w-[90%]
          md:w-[85%]
          lg:w-[75%]
          xl:w-[65%]
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          bg-[#fdfdfa]
          rounded-3xl
          p-6
          mt-20
          md:p-10
          z-10
          text-black
          shadow-2xl
        "
      >

        <button
          onClick={close}
          className="absolute top-5 right-5 cursor-pointer text-gray-500 hover:text-black transition"
        >
          <X size={28} />
        </button>


        <h2 className="text-2xl md:text-4xl font-semibold mb-8">
          Schedule Meeting
        </h2>

        <h3 className="text-xl md:text-2xl font-medium mb-6">
          User Details
        </h3>

        <form onSubmit={sendEmail} ref={form}>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-yellow-400"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <input
              type="text"
              name="subject"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-yellow-400"
            />
          </div>

          <div className="mt-6">
            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none resize-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              mt-8
              h-14
              rounded-xl
              bg-yellow-400
              hover:bg-yellow-500
              transition
              font-semibold
              text-lg
              cursor-pointer
            "
          >
            Schedule Meeting
          </button>
        </form>
      </div>
    </div>
  );
}
