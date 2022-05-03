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
      <div className='h-[90vh]'>
        <Scrolls
          page={0}
          content={
            <div className='flex flex-col md:flex-row md:justify-between items-center md:gap-20 gap-5 text-left'>
              <div>
                <img
                  src={require('../assets/images/latest.jpg')}
                  alt='latest.jpg'
                  className='rounded-full w-auto shadow-xl'
                />
              </div>
              <div>
                <span className='text-lg font-Lora text-left text-shadow-xl md:text-2xl'>
                  Hi! I'm Rodiemer Tominez, an undergrad of Marine Transportation, in pursuit of my
                  passion for Information Technology.
                </span>
              </div>
            </div>
          }
          animation={fadeUp}
        />
      </div>
      <div className='flex flex-col items-center justify-start h-auto font-Lora text-lg text-shadow-md'>
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
                <div className='flex flex-col items-center justify-center text-center gap-5 text-shadow-xl'>
                  <img
                    src={require('../assets/images/javaLogo.jpg')}
                    className='rounded-md w-auto md:w-1/2 shadow-xl'
                    alt=''
                  />
                  <span className='text-sm'>
                    Java was my first programming language coming into Information Technology, I
                    learned basic to intermediate level of knowledge in Java Programming
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
                <div className='flex flex-col items-center justify-center text-center gap-10 text-shadow-xl'>
                  <img
                    src={require('../assets/images/python.png')}
                    className='rounded-md w-auto md:w-1/2 shadow-xl'
                    alt=''
                  />
                  <span className='text-sm'>
                    Going from Java to Python was a game changer, even though I studied it for just
                    a brief period I learned quite a bit from it. I even got the chance to teach my
                    underclassmen a thing or two about Python.
                  </span>
                </div>
              }
              animation={fadeInRight}
            />
          </div>
          <div className='h-screen'>
            <Scrolls
              page={3}
              content={
                <div className='flex flex-col items-center justify-center text-center gap-10 text-shadow-xl'>
                  <img
                    src={require('../assets/images/htmlCssJs.jpeg')}
                    className='rounded-md w-auto md:w-1/2 shadow-xl'
                    alt=''
                  />
                  <span>Web Development</span>
                </div>
              }
              animation={fadeInLeft}
            />
          </div>
          <div className='h-screen'>
            <Scrolls
              page={4}
              content={
                <div className='flex flex-col items-center justify-center text-center gap-10 text-shadow-xl'>
                  <img
                    src={require('../assets/images/reactJs.png')}
                    className='rounded-md w-auto md:w-1/2 shadow-xl'
                    alt=''
                  />
                  <span>C#</span>
                </div>
              }
              animation={fadeInRight}
            />
          </div>
          <div className='h-screen'>
            <Scrolls
              page={5}
              content={
                <div className='flex flex-col items-center justify-center text-center gap-10 text-shadow-xl'>
                  <img
                    src={require('../assets/images/tailwindCSS.png')}
                    className='rounded-md w-auto md:w-1/2 shadow-xl'
                    alt=''
                  />
                  <span>C#</span>
                </div>
              }
              animation={fadeInRight}
            />
          </div>
        </div>
      </div>
      <div className='h-screen pt-20'>asdf</div>
      <Footer />
    </div>
  )
}

export default AboutMe2
