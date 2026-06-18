import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactusPage from './pages/ContactusPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhyChooseUsPage from './components/Sections/WhychooseusSection'
import BlogList from './pages/blog/BlogList'
import BlogDetails from './pages/blog/BlogDetails'
import ScrollTop from './components/ScrollTop'
import ServiceDetails from './components/services/webdevelopmentDetails'
import MarketingDetails from './components/services/marketingservices'
import AdsDetails from './components/services/ads'
import SeoDetails from './components/services/seo'
import NotFound from './components/404NotFound'
import WhatsAppButton from './components/WhatsApp'
import Modal from './components/Modal'


function AppContent() {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isShown = sessionStorage.getItem("modalShown")
    if (location.pathname === "/" && !isShown) {
      const timer = setTimeout(()=>{
          setShow(true);
          sessionStorage.setItem("modalShown","true")
      },3000)
      return ()=>clearTimeout(timer)
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <Modal show={show} onClose={() => {
        setShow(false)
        sessionStorage.setItem("modalShown","true")
      }} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/contact-us' element={<ContactusPage />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog/:slug' element={<BlogDetails />} />
        <Route path='/development-services/:slug' element={<ServiceDetails />} />
        <Route path='/marketing-services/:slug' element={<MarketingDetails />} />
        <Route path='/ads-services/:slug' element={<AdsDetails />} />
        <Route path='/seo-services/:slug' element={<SeoDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default function App() {
   
  return (

    <BrowserRouter>
    <ScrollTop/>
    <AppContent/>
    </BrowserRouter>

  )
}
