import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutMe = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className='shadow-md bg-lightblue'>
        <div className='h-screen'>
          <div className='flex flex-col justify-center items-center h-4/5 w-auto gap-20'>
            <div className='flex justify-center items-between'>
              <img
                src={require('../assets/images/latest.jpg')}
                alt='latestPicture.jpg'
                className='rounded-full lg:w-[25%] w-[50%] shadow-xl'
              />
            </div>
            <div className='text-lg lg:text-3xl font-Lora text-center text-shadow-xl text-black'>
              Hi! I'm Rodiemer Tominez, an undergrad of Marine Transportation, <br></br>in pursuit
              of my passion for Information Technology
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center bg-transparent'>
            <span
              data-aos='fade-up'
              data-aos-offset='250'
              className='font-Lora text-3xl text-shadow-md text-black'
            >
              My Skills
            </span>
          </div>
          <section className='lg:flex lg:justify-around'>
            <div
              data-aos='fade-up'
              data-aos-offset='500'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10 justify-between'
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                alt='Java'
                className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[100%] w-[50%] shadow-xl h-auto'
              />
              <span className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                Java
              </span>
            </div>
            <div
              data-aos='fade-up'
              data-aos-offset='500'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10 justify-between'
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                alt='python'
                className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[100%] w-[50%] shadow-xl h-auto'
              />
              <span className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                Python
              </span>
            </div>
          </section>
          <section className='lg:flex lg:justify-around'>
            <div
              data-aos='fade-right'
              data-aos-offset='500'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10 justify-between'
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                alt='html'
                className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[100%] w-[50%] shadow-xl h-auto'
              />
              <span className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                HTML
              </span>
            </div>
            <div
              data-aos='fade-up'
              data-aos-offset='500'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10 justify-between'
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                alt='CSS'
                className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[100%] w-[50%] shadow-xl h-auto'
              />
              <span className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                CSS
              </span>
            </div>
            <div
              data-aos='fade-left'
              data-aos-offset='500'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10 justify-between'
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                alt='JavaScript'
                className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[100%] w-[50%] shadow-xl h-auto'
              />
              <span className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                JavaScript
              </span>
            </div>
          </section>
          <section className='lg:flex lg:justify-around pb-20'>
            <div
              data-aos='fade-right'
              data-aos-offset='550'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10 justify-between'
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt='ReactJS'
                className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[100%] w-[50%] shadow-xl h-auto bg-white'
              />
              <span className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                React JS
              </span>
            </div>
            <div
              data-aos='fade-left'
              data-aos-offset='550'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10 justify-between'
            >
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
                alt='Tailwind CSS'
                className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[100%] w-[50%] shadow-xl h-auto bg-white'
              />
              <span className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                Tailwind CSS
              </span>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AboutMe
