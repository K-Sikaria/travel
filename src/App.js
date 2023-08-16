import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Carousel/>
  {/*<Footer/> */}
    </>
  )
}

export default App