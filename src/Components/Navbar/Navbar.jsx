import React from 'react'
import './navbar.css'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <h1><AiFillHome className='icon'/>Travel.</h1>
          </a>
        </div>

        <div className='="navBar'>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href = '#' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href = '#' className='navLink'>Explore</a>
            </li>
            <li className='navItem'>
              <a href = '#' className='navLink'>About</a>
            </li>
            <li className='navItem'>
              <a href = '#' className='navLink'>Contact</a>
            </li>

            <button className='btn'>
              <a href='#'>Book Now</a>
            </button>
          </ul>
          <div className='closeNavbar'>
            <AiOutlineClose className="icon"/>
          </div>
        </div>

        <div className='toggleNavbar'>
          <RxHamburgerMenu className="icon"/>
        </div>

      </header>
    </section>
  )
}

export default Navbar