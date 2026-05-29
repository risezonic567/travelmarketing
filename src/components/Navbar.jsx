import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openService, setOpenService] = useState(null);

  const location = useLocation();

  const isBlogDetails =
    location.pathname.startsWith("/blog/");

  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])


  const servicesList = [
    {
      Name: "Web Designing",
      subMenu: [
        { name: "Website Design", path: "/services/website-design" },
        { name: "Web Portal Design", path: "/services/web-portal-design" },
        { name: "WordPress Website Development", path: "/services/wordpress-website-development" },
        { name: "Corporate Website Development", path: "/services/corporate-website-development" },
        { name: "Graphic Design", path: "/services/graphic-design" },
        { name: "E-commerce Website Development", path: "/services/e-commerce-website-development" },
      ]
    },

    {
      Name: "Web Developments",
      subMenu: [
        { name: "Custom API Integration", path: "/services/custom-api-integration" },
        { name: "CMS Website Development", path: "/services/cms-website-development" },
        { name: "CRM Website Development", path: "/services/crm-website-development" },
        { name: "Hotel Management System", path: "/services/hotel-management-system" },
      ],
    },

    {
      Name: "API Integration",
      subMenu: [
        { name: "Amadeus API Integration", path: "/services/amadeus-api-integration" },
        { name: "Car Rental API Integration", path: "/services/car-rental-api-integration" },
        { name: "Hotel API Integration", path: "/services/hotel-api-integration" },
        { name: "Travelpayouts API Integration", path: "/services/travelpayouts-api-integration" },
      ],
    },

    {
      Name: "Mobile App Development",
      subMenu: [
        { name: "Mobile App Development", path: "/services/mobile-app-development" },
        { name: "iOS App Development", path: "/services/ios-app-development" },
        { name: "Android App Development", path: "/services/android-app-development" },
      ],
    },

    {
      Name: "Digital Marketing",
      subMenu: [
        { name: "Content Marketing", path: "/marketing-services/content-marketing" },
        { name: "Email Marketing", path: "/marketing-services/email-marketing" },
        { name: "Data Science & Analytics", path: "/marketing-services/data-science-analytics" },
        { name: "Lead Generation", path: "/marketing-services/lead-generation" },
        { name: "Digital Marketing", path: "/marketing-services/digital-marketing" },
        { name: "Social Media Marketing", path: "/marketing-services/social-media-marketing" },
        { name: "Search Engine Optimization", path: "/marketing-services/search-engine-optimization" },
        { name: "Shopify SEO", path: "/marketing-services/shopify-seo" },
        { name: "AI Optimization", path: "/marketing-services/ai-optimization" },

      ],
    },
    {
      Name: "Ads",
      subMenu: [
        { name: "Google Ads -(PPC Advertising)", path: "/ads-services/google-ads" },
        { name: "Facebook Ads", path: "/ads-services/facebook-ads" },
        { name: "Instagram Ads", path: "/ads-services/instagram-ads" },
        { name: "LinkedIn Ads", path: "/ads-services/linkedin-ads" },
      ],

    },

    {
      Name: "SEO",
      subMenu: [
        { name: "On-Page SEO", path: "/seo/on-page-seo" },
        { name: "Off-Page SEO", path: "/seo/off-page-seo" },
        { name: "Technical SEO", path: "/seo/technical-seo" },
        { name: "Local SEO", path: "/seo/local-seo" },

      ],
      
    }
  ]

  const NavItem = ({ to, children }) => (
    <Link to={to} className="relative group py-2">
      <span className="transition group-hover:text-yellow-400 hover:text-shadow-black-300 text-white">
        {children}
      </span>
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
  
  ${showNavbar
          ? "translate-y-0"
          : "-translate-y-full"
        }

  ${isBlogDetails
          ? "bg-black backdrop-blur-md shadow-lg"
          : lastScrollY > 50
            ? "bg-black/80 backdrop-blur-md"
            : "bg-transparent"
        }
  `}
    >

      <div className="max-w-[1300px]  mx-auto px-10 py-5 flex items-center justify-between">

        <div className="text-2xl font-semibold tracking-wide flex items-center">
          <Link to="/" className="flex items-center gap-3 group">

            <div
              className="
      relative
      overflow-hidden
      px-3
      py-2
      transition-all
      duration-500
      "
            >
              <img
                src="/images/logo/dfgh.png"
                alt="Logo"
                className="
        h-12
        w-auto
        object-contain
        transition-all
        duration-500
        group-hover:scale-105
        "
              />

              <div
                className="
        absolute
        inset-0
        bg-gradient-to-r
        from-yellow-400/0
        via-yellow-400/10
        to-yellow-400/0
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-700
        "
              ></div>
            </div>



          </Link>
        </div>

        <div className="hidden md:flex items-center gap-12 text-[18px] font-serif tracking-wide">

          <NavItem to="/">Home</NavItem>
          <NavItem to="/about-us">About Us</NavItem>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-white hover:text-yellow-400 transition">
              Services <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute left-0 mt-4 w-64 bg-black text-white rounded-xl shadow-xl py-2 overflow-visible"
                >
                  {servicesList.map((item, i) => (
                    <div key={i} className="relative group/sub overflow-visible">

                      <Link
                        to={item.path}
                        className="flex items-center justify-between px-5 py-3 text-sm hover:bg-yellow-100/10 hover:text-yellow-400 transition"
                      >
                        {item.Name}

                        {item.subMenu && (
                          <ChevronDown size={14} className="-rotate-90" />
                        )}
                      </Link>

                      {item.subMenu && (
                        <div className="absolute top-0 left-full ml-1 w-56 bg-black rounded-xl shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">

                          {item.subMenu.map((sub, index) => (
                            <Link
                              key={index}
                              to={sub.path}
                              className="block px-5 py-3 text-sm hover:bg-yellow-100/10 hover:text-yellow-400 transition"
                            >
                              {sub.name}
                            </Link>
                          ))}

                        </div>
                      )}

                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/contact-us">Contact Us</NavItem>
        </div>

        <div className="flex items-center gap-4">

          <button className="hidden md:block bg-yellow-400 hover:bg-white text-black px-7 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300">
            Call Now
          </button>

          <button className="md:hidden text-white" onClick={() => setIsMobileOpen(true)}>
            <Menu size={28} />
          </button>

        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen bg-black text-white z-50 p-6"
          >

            <div className="flex justify-end">
              <button onClick={() => setIsMobileOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-10 text-xl">
              {["Home", "About Us", "Blog", "Contact Us"].map((item, index) => (
                <Link
                  key={index}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="border-b border-gray-700 pb-2"
                >
                  {item}
                </Link>
              ))}

              <div>
                <p className="text-yellow-500 font-semibold">Services</p>
                <div className="mt-3 flex flex-col gap-3 pl-3">
                  {servicesList.map((service, i) => (
                    <Link
                      key={i}
                      to={service.path}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-gray-300 hover:text-yellow-400 transition"
                    >
                      {service.Name}
                    </Link>
                  ))}
                </div>
              </div>

              <button className="bg-yellow-500 mt-6 py-3 rounded-full text-black font-semibold">
                Call Now
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar