import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    text: "Their team created an outstanding website and helped us grow our online presence with premium SEO strategies. Highly recommended for business growth.",
  },

  {
    id: 2,
    name: "Priya Verma",
    role: "Travel Consultant",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    text: "Amazing experience working with them. The design quality, support, and attention to detail were absolutely premium and professional.",
  },

  {
    id: 3,
    name: "Aman Gupta",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    text: "From branding to website development, everything was delivered perfectly. Their modern design approach really impressed our clients.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative py-6 bg-white overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

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

          <span className="uppercase tracking-[4px] text-yellow-500 text-md font-semibold">
            Testimonials
          </span>

          <h2 className="text-xl md:text-4xl font-bold text-[#0B1F3A] mt-6 leading-tight">
            What Our Clients <br />

            <span className="text-yellow-500">
              Say About Us
            </span>
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-[650px] object-cover"
              />

            </div>

            <div
              className="
              absolute
              bottom-10
              -right-8
              bg-[#0B1F3A]
              px-8
              py-6
              rounded-3xl
              shadow-2xl
              "
            >

              <h3 className="text-5xl font-bold text-yellow-400">
                4.9
              </h3>

              <p className="text-white/70 mt-2 text-lg">
                Client Rating
              </p>

            </div>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="h-full"
            >

              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>

                  <div
                    className="
                    bg-[#0B1F3A]
                    rounded-[40px]
                    p-12
                    text-white
                    relative
                    overflow-hidden
                    min-h-[450px]
                    flex
                    flex-col
                    justify-between
                    "
                  >

                    <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/10 blur-[100px] rounded-full"></div>

                    <div>

                      <div className="text-8xl text-yellow-400 leading-none">
                        “
                      </div>

                      <p className="text-xl leading-10 text-white/80 mt-6 relative z-10">
                        {item.text}
                      </p>

                    </div>

                    <div className="flex items-center gap-5 mt-10">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400"
                      />

                      <div>

                        <h4 className="text-2xl font-bold">
                          {item.name}
                        </h4>

                        <p className="text-yellow-400 mt-1">
                          {item.role}
                        </p>

                      </div>

                    </div>

                  </div>

                </SwiperSlide>
              ))}

            </Swiper>

          </motion.div>

        </div>
      </div>
    </section>
  );
}