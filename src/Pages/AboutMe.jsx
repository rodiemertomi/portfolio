import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Carousel from 'react-elastic-carousel'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    Aos.init()
  }, [])

  const { ref: mySkillsRef, inView: mySkillInView } = useInView()
  const { ref: projectsRef, inView: projectInView } = useInView()

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1280, itemsToShow: 3 },
  ]

  return (
    <>
      <div className='bg-lightblue'>
        <div className='flex flex-col justify-center items-center h-screen w-auto gap-20'>
          <div className='flex justify-center items-between'>
            <img
              src={require('../assets/images/latest.jpg')}
              alt='latestPicture.jpg'
              className='rounded-full lg:w-[25%] w-[50%] shadow-xl'
            />
          </div>
          <div className='text-lg lg:text-3xl font-Lora text-center text-shadow-xl text-black 2xl:w-1/2 lg:w-3/4 px-5'>
            Hi! I'm Rodiemer Tominez, an undergrad of Marine Transportation, in pursuit of my
            passion for Information Technology. I am aspiring to be a web developer some day if
            opportunity presents itself.
          </div>
        </div>
        <div className='flex flex-col justify-center items-center h-screen w-auto gap-20'>
          <div
            className='flex justify-center items-between'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            <img
              src={require('../assets/images/avion.png')}
              alt='Avion.png'
              className='rounded-lg p-5 bg-white lg:w-[100%] w-[75%] shadow-xl'
            />
          </div>
          <div
            className='text-lg lg:text-3xl font-Lora text-center text-shadow-xl text-black 2xl:w-1/2 lg:w-3/4 px-5'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            I enrolled on a web development course at Avionschool last October 2021. The course was
            for front and back-end buy I only finished the front-end because of personal matters.
            Having said that, I learned a lot from their organization and I wish to continue if time
            permits.
          </div>
        </div>
        <div className='flex flex-col justify-center items-center h-screen w-auto gap-20'>
          <div
            className='flex justify-center items-between'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            <img
              src={require('../assets/images/SAPCert.PNG')}
              alt='Avion.png'
              className='rounded-lg p-5 bg-white lg:w-[50%] w-[75%] lg:hover:scale-125 transition-transform duration-200 shadow-xl'
            />
          </div>
          <div
            className='text-lg lg:text-3xl font-Lora text-center text-shadow-xl text-black 2xl:w-1/2 pb-20 lg:w-3/4 px-5'
            data-aos='fade-up'
            data-aos-offset='400'
          >
            This is the certificate I received here at STI Global City. It is for finishing a course
            using SAPB1, a business management software designed for small and medium-sized
            enterprises. An ERP solution that aims to automate key business functions in financials,
            operations, and human resources.
          </div>
        </div>
        <div>
          <div
            className={`flex justify-center sticky top-[64px] z-10 left-0 py-4 ${
              mySkillInView ? `bg-lightblue` : ''
            }`}
            data-aos='fade-down'
            data-aos-offset='400'
            ref={mySkillsRef}
          >
            <span className='font-Lora text-3xl text-shadow-md text-black'>My Skills</span>
          </div>
          <section
            className='lg:flex lg:justify-around lg:h-[60vh]'
            data-aos='fade-up'
            data-aos-offset='500'
          >
            <div
              data-aos='fade-up'
              data-aos-offset='500'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10'
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
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10'
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
          <section
            className='lg:flex lg:justify-around lg:h-[60vh]'
            data-aos='fade-up'
            data-aos-offset='500'
          >
            <div
              data-aos='fade-up'
              data-aos-offset='500'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10'
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
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10'
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
              data-aos='fade-up'
              data-aos-offset='500'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10'
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
          <section
            className='lg:flex lg:justify-around pb-20 lg:h-[60vh]'
            data-aos='fade-up'
            data-aos-offset='500'
          >
            <div
              data-aos='fade-up'
              data-aos-offset='550'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10'
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
              data-aos='fade-up'
              data-aos-offset='550'
              className='h-[80%] bg-lightblue flex flex-col items-center pt-10'
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
        <div className='h-screen pt-20 flex flex-col gap-20'>
          <div
            className={`flex justify-center sticky top-[64px] z-10 left-0 py-4 ${
              projectInView ? `bg-lightblue` : ''
            }`}
            data-aos='fade-down'
            data-aos-offset='500'
            ref={projectsRef}
          >
            <span className='font-Lora text-3xl text-shadow-md text-black'>
              My Projects Preview
            </span>
          </div>
          <div
            className='sticky top-[20%] translate-y-[-50%] px-10'
            data-aos='fade-down'
            data-aos-offset='500'
          >
            <Carousel breakPoints={breakPoints}>
              <div className='flex flex-col justify-center items-center md:px-5'>
                <img src={require('../assets/gifs/calculator.gif')} alt='' />
                <h1 className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                  Calculator
                </h1>
                <a
                  href='https://rodiemertomi.github.io/Calculator/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button>Try it</Button>
                </a>
              </div>
              <div className='flex flex-col justify-center items-center md:px-5'>
                <img src={require('../assets/gifs/tictactoe.gif')} alt='' />
                <h1 className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                  TicTacToe
                </h1>
                <a
                  href='https://rodiemertomi.github.io/TicTacToe/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button>Try it</Button>
                </a>
              </div>
              <div className='flex flex-col justify-center items-center md:px-5'>
                <img src={require('../assets/gifs/momentum.gif')} alt='' />
                <h1 className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                  Momentum App
                </h1>
                <a href='https://rodiemertomi.github.io/Momentum/' target='_blank' rel='noreferrer'>
                  <Button>Try it</Button>
                </a>
              </div>
              <div className='flex flex-col justify-center items-center md:px-5'>
                <img src={require('../assets/gifs/landingpage.gif')} alt='' />
                <h1 className='font-Lora text-xl lg:text-4xl pt-5 tracking-widest text-black font-black'>
                  Product Landing Page
                </h1>
                <a
                  href='https://rodiemertomi.github.io/ProductLandingPage/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button>Try it</Button>
                </a>
              </div>
            </Carousel>
          </div>
        </div>
        <div
          className='flex justify-center items-center lg:pb-32 lg:pt-10 pb-5 pt-5'
          data-aos='fade-up'
        >
          <div>
            <Link to='/projects'>
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutMe
