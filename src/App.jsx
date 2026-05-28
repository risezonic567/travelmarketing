import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactusPage from './pages/ContactusPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhyChooseUsPage from './components/Sections/WhychooseusSection'
import BlogList from './pages/blog/BlogList'
import BlogDetails from './pages/blog/BlogDetails'
import ScrollTop from './components/ScrollTop'

export default function App() {
  return (

    <BrowserRouter>
    <ScrollTop/>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/contact-us' element={<ContactusPage />} />
        <Route path='/why-choose-us' element={<WhyChooseUsPage />} />

        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog/:slug' element={<BlogDetails />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
