import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import TestimonialSection from '../components/Testimonials'
import ServicesMarquee from '../components/Sections/ServiceMarquee'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden">
      
        <img
          src="/images/Aboutus_banner.jpg.jpeg"
          alt="TravelAboutusBanner"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>


        <div className="relative z-10 flex flex-col justify-start mt-52  h-full text-white px-20">



          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            mt-6
            max-w-5xl
            "
          >
            Grow Your Business <br />

            <span className="text-yellow-400">
              With Smart Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
            text-lg
            md:text-xl
            text-gray-100
            mt-8
            max-w-3xl
            leading-8
            font-serif
            "
          >
            We help businesses grow through premium websites, SEO,
            branding, travel services, and modern digital experiences
            designed for performance and success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >

            <button
              className="
              bg-yellow-400
              hover:bg-white
              text-black
              font-semibold
              px-8
              py-4
              rounded-full
              transition-all
              duration-300
              flex
              items-center
              gap-3
              "
            >
              Explore Services

              <ArrowRight size={18} />
            </button>

            <Link
            to= "tel:+91-9711110975"
              className="
              border
              border-white/30
              hover:border-yellow-400
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
            Call Us
            </Link>

          </motion.div>

        </div>

      </section>

      <section className="py-28 bg-white overflow-hidden relative">

        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full"></div>
      

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="relative">

              <div className="rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

                <img
                  src="/images/About Page intro w-600px h-500px.jpg.jpeg"
                  alt="About Page Intro"
                  className="w-full h-full object-cover"
                />

              </div>

              <div
                className="
          absolute
          bottom-10
          -right-10
          bg-[#0B1F3A]
          text-white
          px-8
          py-6
          rounded-3xl
          shadow-2xl
          "
              >

                <h3 className="text-5xl font-bold text-yellow-400">
                  10+
                </h3>

                <p className="mt-2 text-lg text-white/80">
                  Years Experience
                </p>

              </div>

            </div>

            <div>

              <span className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
                About Our Company
              </span>

              <h2 className="text-5xl md:text-6xl font-bold text-[#0B1F3A] leading-tight mt-6">
                Creating Premium <br />

                <span className="text-yellow-500">
                  Travel Experiences
                </span>

              </h2>

              <p className="text-gray-600 text-lg font-serif leading-9 mt-8">
                We are passionate about delivering unforgettable travel and
                business experiences with innovation, comfort, and trust.
                Our goal is to help clients explore the world through premium
                services, modern solutions, and personalized support.
              </p>

              <p className="text-gray-600 text-lg font-serif leading-9 mt-6">
                From luxury travel planning to digital business growth,
                we combine creativity, technology, and customer-focused
                strategies to build long-term relationships and exceptional journeys.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-12">

                <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">

                  <h4 className="text-2xl font-bold text-[#0B1F3A]">
                    24/7 Support
                  </h4>

                  <p className="text-gray-600 mt-3 font-serif leading-7">
                    Dedicated assistance anytime for smooth travel experiences.
                  </p>

                </div>

                <div className="bg-[#0B1F3A] rounded-3xl p-6">

                  <h4 className="text-2xl font-bold text-yellow-400">
                    Trusted Service
                  </h4>

                  <p className="text-white/70 mt-3 font-serif leading-7">
                    Thousands of happy clients trust our premium solutions.
                  </p>

                </div>

              </div>

              {/* <button
          className="
          mt-12
          bg-yellow-400
          hover:bg-[#0B1F3A]
          hover:text-white
          text-black
          px-8
          py-4
          rounded-full
          font-semibold
          transition-all
          duration-300
          "
        >
          Explore More
        </button>*/}
            </div>

          </div>
        </div>
      </section>


      <ServicesMarquee />
      <TestimonialSection />
    </div>
  )
}

