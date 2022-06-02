import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Button from '../Components/Button'

const Projects = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className='bg-lightblue'>
        <div className='h-1/3 flex pt-10 flex-col lg:flex-row lg:justify-around lg:items-center'>
          <div
            className='lg:w-[50%] flex justify-center items-center lg:h-screen'
            data-aos='fade-up'
            data-aos-offset='250'
          >
            <img
              src={require('../assets/images/packettracer.PNG')}
              alt='Packet Tracer'
              className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[75%] w-[75%] shadow-xl h-auto'
            />
          </div>
          <div
            className='text-left lg:w-[50%] flex flex-col lg:justify-center justify-around lg:gap-20 gap-10 items-center lg:h-screen h-1/3 pt-10 px-10'
            data-aos='fade-up'
            data-aos-offset='250'
          >
            <h1 className='self-start font-black text-lg lg:text-4xl font-Lora'>
              Kalibrr Proposed Network Structure
            </h1>
            <p className='font-Lora text-lg lg:text-2xl'>
              This was a group project for one of our classes in my Second Year at STI Global City
              where we had to hypothetically propose a network structure for a company. This was
              done using Packet Tracer, it features three layers of structures each with their own
              authorization levels for security purposes.
            </p>
          </div>
        </div>
        <div className='h-1/3 flex pt-10 flex-col lg:flex-row lg:justify-around lg:items-center'>
          <div
            className='lg:w-[50%] flex justify-center items-center lg:h-screen'
            data-aos='fade-up'
            data-aos-offset='600'
          >
            <img
              src={require('../assets/gifs/calculator.gif')}
              alt='Calculator'
              className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[75%] w-[75%] shadow-xl h-auto'
            />
          </div>
          <div
            className='text-left lg:w-[50%] flex flex-col lg:justify-center justify-around lg:gap-20 gap-10 items-center lg:h-screen h-1/3 pt-10 px-10'
            data-aos='fade-up'
            data-aos-offset='600'
          >
            <h1 className='self-start font-black text-lg lg:text-4xl font-Lora'>
              Simple Calculator
            </h1>
            <p className='font-Lora text-lg lg:text-2xl'>
              A crude imitation of a simple calculator that features digit delimiter by formatting
              the operands with proper comma placement, removal of insignificant digits both from
              whole numbers and decimal numbers, and other features a simple calculator may have.
            </p>
            <a
              className='self-start'
              href='https://rodiemertomi.github.io/Calculator/'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Try it</Button>
            </a>
          </div>
        </div>
        <div className='h-1/3 flex pt-10 flex-col lg:flex-row lg:justify-around lg:items-center'>
          <div
            className='lg:w-[50%] flex justify-center items-center lg:h-screen'
            data-aos='fade-up'
            data-aos-offset='600'
          >
            <img
              src={require('../assets/gifs/landingpage.gif')}
              alt='Calculator'
              className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[75%] w-[75%] shadow-xl h-auto'
            />
          </div>
          <div
            className='text-left lg:w-[50%] flex flex-col lg:justify-center justify-around lg:gap-20 gap-10 items-center lg:h-screen h-1/3 pt-10 px-10'
            data-aos='fade-up'
            data-aos-offset='600'
          >
            <h1 className='self-start font-black text-lg lg:text-4xl font-Lora'>
              Product Landing Page for Redragon
            </h1>
            <p className='font-Lora text-lg lg:text-2xl'>
              A crude product landing page for redragon gaming peripherals which was tasked to us
              individually during our bootcamp at Avion. This is the project that made me enjoy web
              development, and the reason that I am continuing it up until now.
            </p>
            <a
              className='self-start'
              href='https://rodiemertomi.github.io/ProductLandingPage/'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Try it</Button>
            </a>
          </div>
        </div>
        <div className='h-1/3 flex pt-10 flex-col lg:flex-row lg:justify-around lg:items-center'>
          <div
            className='lg:w-[50%] flex justify-center items-center lg:h-screen'
            data-aos='fade-up'
            data-aos-offset='600'
          >
            <img
              src={require('../assets/gifs/momentum.gif')}
              alt='Calculator'
              className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[75%] w-[75%] shadow-xl h-auto'
            />
          </div>
          <div
            className='text-left lg:w-[50%] flex flex-col lg:justify-center justify-around lg:gap-20 gap-10 items-center lg:h-screen h-1/3 pt-10 px-10'
            data-aos='fade-up'
            data-aos-offset='600'
          >
            <h1 className='self-start font-black text-lg lg:text-4xl font-Lora'>
              One Piece Themed Momentum App
            </h1>
            <p className='font-Lora text-lg lg:text-2xl'>
              This is my version of a momentum app, it features the updated time and date for your
              region, a to do list and a main focus to keep you in track and as a bonus, a music app
              to keep you entertained (although it may be loud so I suggest you lower your volume a
              bit.).
            </p>
            <a
              className='self-start'
              href='https://rodiemertomi.github.io/Momentum/'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Try it</Button>
            </a>
          </div>
        </div>
        <div className='h-1/3 flex pt-10 flex-col lg:flex-row lg:justify-around lg:items-center'>
          <div
            className='lg:w-[50%] flex justify-center items-center lg:h-screen'
            data-aos='fade-up'
            data-aos-offset='600'
          >
            <img
              src={require('../assets/gifs/tictactoe.gif')}
              alt='Calculator'
              className='rounded-3xl border-4 border-white border-opacity-75 lg:w-[75%] w-[75%] shadow-xl h-auto'
            />
          </div>
          <div
            className='text-left lg:w-[50%] flex flex-col lg:justify-center justify-around lg:gap-20 gap-10 items-center lg:h-screen h-1/3 pt-10 px-10 pb-32'
            data-aos='fade-up'
            data-aos-offset='600'
          >
            <h1 className='self-start font-black text-lg lg:text-4xl font-Lora'>
              Star Wars Themed Tictactoe
            </h1>
            <p className='font-Lora text-lg lg:text-2xl'>
              A tictactoe battle between the Dark side and the Light side, choose your side wisely.
              It features tracking of moves to put into a history to let you see where you have gone
              wrong.
            </p>
            <a
              className='self-start'
              href='https://rodiemertomi.github.io/TicTacToe/'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Try it</Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
