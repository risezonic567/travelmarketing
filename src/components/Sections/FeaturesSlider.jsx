import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Plane,
  Building2,
  BadgeCheck,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Flight Booking",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    desc: "Get the best domestic and international flight deals with smooth booking support worldwide.",
  },

  {
    id: 2,
    title: "Luxury Hotels",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    desc: "Book luxury hotels and resorts worldwide at affordable prices.",
  },

  {
    id: 3,
    title: "Visa Assistance",
    icon: BadgeCheck,
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop",
    desc: "Professional visa support for tourist and business travel.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative py-28 bg-white overflow-hidden font-serif">

      <div className="max-w-[1400px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
            Featured Travel Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mt-5">
            Explore The World <br />
            <span className="text-yellow-500">
              With Comfort & Luxury
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-8 max-w-2xl">
            We provide complete travel solutions including international flights,
            luxury hotels, and visa assistance designed for smooth and premium
            experiences.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            mt-10
            flex
            items-center
            gap-3
            bg-[#0B1F3A]
            hover:bg-yellow-400
            hover:text-black
            text-white
            font-semibold
            px-8
            py-4
            rounded-full
            transition-all
            duration-300
            "
          >
            Explore All Services

            <ArrowRight
              size={18}
              className="transition duration-300"
            />
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-24">

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            className="
            group
            relative
            lg:col-span-2
            h-[520px]
            rounded-[40px]
            overflow-hidden
            border
            border-gray-200
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            "
          >

            <img
              src={services[0].image}
              alt=""
              className="
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-10 z-10">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center">
                  <Plane className="text-black" size={28} />
                </div>

                <span className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold">
                  Premium Travel
                </span>

              </div>

              <h3 className="text-5xl font-bold text-white mb-6">
                Flight Booking
              </h3>

              <p className="text-gray-200 max-w-2xl leading-8 text-lg">
                Get the best domestic and international flight deals with
                smooth booking experiences and premium travel support.
              </p>

              <button
                className="
                mt-8
                bg-yellow-400
                hover:bg-white
                text-black
                font-semibold
                px-7
                py-3.5
                rounded-full
                transition-all
                duration-300
                "
              >
                Explore More
              </button>

            </div>
          </motion.div>

          <div className="flex flex-col gap-8">

            {services.slice(1).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                  group
                  relative
                  h-[245px]
                  rounded-[32px]
                  overflow-hidden
                  border
                  border-gray-200
                  shadow-[0_10px_35px_rgba(0,0,0,0.06)]
                  "
                >

                  <img
                    src={item.image}
                    alt=""
                    className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-7 z-10">

                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center">
                        <Icon className="text-black" size={22} />
                      </div>

                      <span className="bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full text-xs">
                        Featured
                      </span>

                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-200 text-sm mt-3 leading-6">
                      {item.desc}
                    </p>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}