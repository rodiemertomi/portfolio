import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Scrolls from '../Components/Scrolls'
import { batch, Fade, Sticky, MoveOut, MoveIn } from 'react-scroll-motion'

const AboutMe2 = () => {
  const fadeUp = batch(Fade(), Sticky(), MoveOut(0, -1000))
  const fadeInLeft = batch(MoveIn(0, 1000), Fade(), Sticky(), MoveOut(-2000, 0))
  const fadeInRight = batch(MoveIn(0, 1000), Fade(), Sticky(), MoveOut(2000, 0))

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='bg-lightblue'>
      <div className='h-screen'>
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
                  passion for Information Technology.
                </span>
              </div>
            </div>
          }
          animation={fadeUp}
        />
      </div>
      <div className='flex flex-col items-center justify-start h-auto font-Lora text-3xl text-shadow-md'>
        <div className='sticky top-20 md:top-32'>
          <span data-aos='fade-up' className='font-Lora text-3xl text-shadow-md'>
            My Skills
          </span>
        </div>
        <div>
          <div className='h-screen'>
            <Scrolls
              page={1}
              content={
                <div className='flex flex-col items-center justify-center text-center gap-20'>
                  <img
                    src={require('../assets/images/javaLogo.jpg')}
                    className='rounded-md w-auto md:w-[50%]'
                    alt=''
                  />
                  <span>
                    Java was my first programming language coming into Information Technology, I
                    learned basic to intermediate level of{' '}
                  </span>
                </div>
              }
              animation={fadeInLeft}
            />
          </div>
          <div className='h-screen'>
            <Scrolls
              page={2}
              content={
                <div>
                  <img src={require('../assets/images/python.png')} className='rounded-md' alt='' />
                  <span>Python</span>
                </div>
              }
              animation={fadeInRight}
            />
          </div>
          <div className='h-screen'>
            <Scrolls
              page={3}
              content={
                <div>
                  <img src={require('../assets/images/csharp.png')} className='rounded-md' alt='' />
                  <span>C#</span>
                </div>
              }
              animation={fadeInLeft}
            />
          </div>
        </div>
      </div>
      <div className='h-screen'>asdf</div>
      <Footer />
    </div>
  )
}

export default AboutMe2
