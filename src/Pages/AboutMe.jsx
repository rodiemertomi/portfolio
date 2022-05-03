import React from 'react'
import Footer from '../Components/Footer'
import { Fade, Sticky, MoveOut, batch, StickyIn, FadeIn, ZoomIn } from 'react-scroll-motion'
import Scrolls from '../Components/Scrolls'

const AboutMe = () => {
  const fadeUp = batch(Fade(), Sticky(), MoveOut(0, -1000))
  const fadeUpRight = batch(Fade(), Sticky(), MoveOut(300, -1000))
  const fadeUpLeft = batch(Fade(), Sticky(), MoveOut(-300, -1000))
  const zoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())

  return (
    <div className='bg-lightblue h-auto'>
      <div className='z-[-1]'>
        <Scrolls
          page={0}
          content={
            <div className='flex flex-col md:flex-row md:justify-between items-center justify-between gap-20 text-left'>
              <div>
                <img
                  src={require('../assets/images/latest.jpg')}
                  alt='recognition.jpg'
                  className='rounded-full w-auto shadow-xl'
                />
              </div>
              <div>
                <span className='text-lg font-Lora text-left text-shadow-xl'>
                  Hi! I'm Rodiemer Tominez, an undergrad of Marine Transportation, in pursuit of my
                  passion for Information Technology
                </span>
              </div>
            </div>
          }
          animation={fadeUp}
        />
        <Scrolls
          page={1}
          content={
            <div className='flex flex-col md:flex-row md:justify-between items-center justify-between gap-20 text-left'>
              <div>
                <img
                  src={require('../assets/images/javaLogo.jpg')}
                  alt='recognition.jpg'
                  className='rounded-full w-auto shadow-xl'
                />
              </div>
              <div>
                <span className='text-lg font-Lora text-left text-shadow-xl'>
                  Hi! I'm Rodiemer Tominez, an undergrad of Marine Transportation, in pursuit of my
                  passion for Information Technology
                </span>
              </div>
            </div>
          }
          animation={fadeUpRight}
        />
        <Scrolls
          page={2}
          content={
            <div className='flex flex-col md:flex-row md:justify-between items-center justify-between gap-20 text-left'>
              <div>
                <img
                  src={require('../assets/images/latest.jpg')}
                  alt='recognition.jpg'
                  className='rounded-full w-auto shadow-xl'
                />
              </div>
              <div>
                <span className='text-lg font-Lora text-left text-shadow-xl'>
                  Hi! I'm Rodiemer Tominez, an undergrad of Marine Transportation, in pursuit of my
                  passion for Information Technology
                </span>
              </div>
            </div>
          }
          animation={fadeUpLeft}
        />
        <Scrolls
          page={3}
          content={
            <div className='flex flex-col md:flex-row md:justify-between items-center justify-between gap-20 text-left'>
              <div>
                <img
                  src={require('../assets/images/latest.jpg')}
                  alt='recognition.jpg'
                  className='rounded-full w-auto shadow-xl'
                />
              </div>
              <div>
                <span className='text-lg font-Lora text-left text-shadow-xl'>
                  Hi! I'm Rodiemer Tominez, an undergrad of Marine Transportation, in pursuit of my
                  passion for Information Technology
                </span>
              </div>
            </div>
          }
          animation={zoomInScrollOut}
        />
      </div>
      <Footer />
    </div>
  )
}

export default AboutMe
