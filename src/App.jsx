import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactusPage from './pages/ContactusPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhyChooseUsPage from './components/Sections/WhychooseusSection'

export default function App() {
  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/contact-us' element={<ContactusPage />} />
        <Route path='/why-choose-us' element={<WhyChooseUsPage />} />

    </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}
