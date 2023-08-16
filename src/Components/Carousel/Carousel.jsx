import React,{useEffect} from 'react'
import './carousel.css'

import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'

import {IoLocationSharp} from 'react-icons/io5'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { init } from 'aos'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: "Undoubtedly the most celebrated island in the South Pacific, Bora Bora is French Polynesia's leading lady. Her beauty is unrivaled and her fame, unwavering. Bora Bora is one of the few places on earth that everyone hopes to witness in their lifetime—and once you see it, you are forever enamored."
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Mach Pichu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "Located on top of a mountain in the middle of a tropical forest, it is considered the tourist attraction par excellence in Peru. The historic sanctuary is a place that captivates tourists not only for its dazzling architectural beauty, but also for its important historical-cultural legacy, which has led it to be recognized and admired throughout the world."
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "The Great Barrier Reef is recognised as providing unique, high-standard and world-class tourism experiences. Its long-term attractiveness as a tourism destination is largely based on the Great Barrier Reef being the world's largest, best-known and best-managed coral reef which is home to a spectacular and diverse array of species."
  },
]

const Carousel = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='carousel container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right"
         className='title'>
          Most visited destinations
        </h3>
      </div>

      <div data-aos="fade-up"
      className='secContent grid'>
        {
          Data.map(({id, imgSrc, destTitle,location, grade, fees, description}) => {
            return( 
              <div key={id} className="singleDestination">
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>
                
                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className="continent flex">
                    <IoLocationSharp className='icon' />
                    <span className='name'>{location}</span>
                  </span>
                  
                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  
                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Carousel