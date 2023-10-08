import React,{useEffect} from 'react'
import './footer.css'
import {AiOutlineTwitter, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className='secContent container'>
        <div className='footerCard flex'>
          <div data-aos="fade-up" className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                Travel.
              </a>
            </div>

            <div className="footerParagraph">
            Discover a world of possibilities as you browse through our carefully curated travel guides, insightful blog articles, and a wide range of travel resources. Whether you're planning a relaxing beach getaway, an adrenaline-pumping adventure, or a culturally enriching experience, we've got you covered.
            </div>

            <div className='footerSocails flex'>
              <AiOutlineTwitter className="logo" />
              <AiFillYoutube className="logo" />
              <AiFillInstagram className="logo" />
            </div>
          </div>

          <div data-aos="fade-up" className='footerLinks grid'>
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Payment
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Resources
              </li>

            </div>

            <div className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                RentalCar
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                TripAdvisor
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                HostelWorld
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Trivago
              </li>

            </div>

            <div className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                London
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                California
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Indonesia
              </li>
              <li className='footerList flex'>
                <FiChevronRight classNameicon/>
                Europe
              </li>

            </div>
          </div>

          <div className='footerDiv flex'>
            <small>COPYRIGHTS RESERVED - Travel. 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer