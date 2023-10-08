import React from 'react'
import '../app.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import PhotoCards from './PhotoCards/PhotoCards'
import Footer from './Footer/Footer'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <PhotoCards/>
    <Footer/>
    </>
  )
}

export default Main