import React from "react";

export default function ContactFormDemo({ show, close }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center">
      
      
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      ></div>

    
      <div className="relative max-w-4xl w-full mx-auto p-8 bg-[#fdfdfa] rounded-3xl z-10 text-black">

      
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-4xl font-semibold mb-8">
          Schedule Meeting
        </h2>

        <h3 className="text-2xl font-medium mb-6">
          User Details
        </h3>

        <div className="grid lg:grid-cols-2 gap-6">
            
          <input className="input" placeholder="Name" />
          <input className="input" placeholder="Email" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-9 ">
          <input className="input" placeholder="Company Name"/>
          <input className="input" placeholder="Phone Number" />
        </div>

        <div className="mt-6">
          <textarea
            rows="6"
            placeholder="Message"
            className="input resize-none"
          />
        </div>

        <button className="w-full mt-8 h-14 rounded-xl bg-yellow-400 font-semibold">
          Schedule Meeting
        </button>

      </div>
    </div>
  );
}