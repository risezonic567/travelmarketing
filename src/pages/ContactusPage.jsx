import React from 'react'
import ContactSection from '../components/Sections/ContactusSection'
import { Mail, PhoneCall, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactusPage() {
  return (
    <div className='w-full overflow-hidden bg-white'>


      <section className='relative pt-40 pb-28 overflow-hidden mb-10'>


        <div className='absolute inset-0'>

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className='w-full h-full object-cover'
          />


          <div className='absolute inset-0 bg-black/50' />

        </div>



        <div className='relative max-w-7xl mx-auto px-4'>

          <div className='max-w-4xl mx-auto text-center'>


            <span className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-yellow-400 text-sm font-medium mb-6'>

              Contact Us

            </span>


            <h1 className='text-5xl md:text-5xl font-black text-white leading-tight'>

              Let’s Build Something

              <span className='bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>

                {' '}Amazing

              </span>

            </h1>


            <p className='text-gray-300 text-lg font-serif leading-relaxed mt-7 max-w-2xl mx-auto'>

              Have a project in mind? Need help with web development,
              SEO, CRM solutions or digital marketing?
              Our team is ready to help your business grow.

            </p>


            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14'>


              <div className='bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-white hover:-translate-y-2 hover:bg-white/15 transition duration-300'>

                <div className='w-14 h-14 rounded-xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-4 text-yellow-400'>

                  <PhoneCall size={28} />

                </div>

                <h3 className='font-semibold text-lg'>

                  Call Us

                </h3>

                <p className='text-gray-300 text-sm mt-2'>

                <Link
                  to="tel:+91-9711110975"
                  className="text-gray-300 text-sm mt-2 hover:text-yellow-400 duration-300"
                >

               tel:+91-9711110975

                </Link>

                </p>
              </div>


              <div className='bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-white hover:-translate-y-2 hover:bg-white/15 transition duration-300'>

                <div className='w-14 h-14 rounded-xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-4 text-yellow-400'>

                  <Mail size={28} />

                </div>

                <h3 className='font-semibold text-lg'>

                  Email Us

                </h3>

                <p className='text-gray-300 text-sm mt-2'>

                  <Link
                    to="mailto:info@risezonic.com"
                    className="text-gray-300 text-sm mt-2 hover:text-yellow-400 duration-300"
                  >

                   Mail-to: info@risezonic.com

                  </Link>

                </p>
              </div>


              <div className='bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-white hover:-translate-y-2 hover:bg-white/15 transition duration-300'>

                <div className='w-14 h-14 rounded-xl bg-yellow-400/20 flex items-center justify-center mx-auto mb-4 text-yellow-400'>

                  <MapPin size={28} />

                </div>

                <h3 className='font-semibold text-lg'>

                  Location

                </h3>

                <Link
                  to="https://maps.app.goo.gl/Npvor4UUwEzxWS9b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-gray-300 text-sm mt-2 hover:text-yellow-400 duration-300'
                >

                  RZ11/D, Upper Ground Floor Opp.<br/> Palam Metro Station Gate No 3,<br/> Palam Dwarka Road, Delhi, 110045

                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>


      <ContactSection />

    </div>
  )
}