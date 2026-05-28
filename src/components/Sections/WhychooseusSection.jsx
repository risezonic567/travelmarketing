import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Users,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Services",
    desc: "Professional solutions with transparency and reliability for every client.",
  },

  {
    icon: Rocket,
    title: "Business Growth",
    desc: "Modern digital strategies designed to boost your online presence.",
  },

  {
    icon: Users,
    title: "Expert Team",
    desc: "Creative professionals delivering premium experiences and support.",
  },

  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Helping businesses connect with customers worldwide digitally.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="overflow-x-hidden">

      <section className="relative py-32  overflow-hidden">



        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
              }}
            >

              <span className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold">
                Why Choose Us
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mt-6">
                Premium Digital <br />

                <span className="text-yellow-400">
                  Experience Agency
                </span>
              </h1>

              <p className=" text-lg leading-9 font-serif mt-8 max-w-2xl">
                We build modern websites, powerful SEO strategies, branding,
                and premium digital experiences that help businesses grow
                faster and stand out online.
              </p>

              <div className="space-y-5 mt-10">

                {[
                  "Modern & Creative Design",
                  "SEO Optimized Websites",
                  "Fast Performance",
                  "Premium Client Support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2
                      className="text-yellow-400 shrink-0"
                      size={22}
                    />

                    <p className="text-black text-lg font-serif">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              <button
                className="
                mt-12
                bg-yellow-400
                hover:bg-white
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                flex
                items-center
                gap-3
                transition-all
                duration-300
                "
              >
                Get Started

                <ArrowRight size={18} />
              </button>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="relative"
            >

              <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  className="w-[600px] h-[350px] border object-cover"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}

              </div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-8
                -left-6
                bg-white
                rounded-3xl
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                "
              >

                <h3 className="text-5xl font-bold text-yellow-500">
                  10+
                </h3>

                <p className="text-[#07182E] mt-2 font-medium">
                  Years Experience
                </p>

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      <section className="py-28 bg-white relative overflow-hidden">

        <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6">

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
            className="text-center mb-20"
          >

            <span className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
              Our Advantages
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#07182E] mt-6">
              What Makes Us Different
            </h2>

            <p className="text-gray-600 text-lg font-serif leading-8 max-w-3xl mx-auto mt-6">
              We combine creativity, technology, and strategy to create
              premium experiences that help businesses succeed digitally.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
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
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                  group
                  bg-white
                  border
                  border-gray-200
                  rounded-[30px]
                  p-8
                  overflow-hidden
                  relative
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  hover:border-yellow-400
                  transition-all
                  duration-500
                  "
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-yellow-400/5 to-transparent"></div>

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-8">
                    <Icon className="text-black" size={28} />
                  </div>

                  <h3 className="relative z-10 text-2xl font-bold text-[#07182E] mb-4">
                    {item.title}
                  </h3>

                  <p className="relative z-10 text-gray-600 leading-8 font-serif">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

    </div>
  );
}