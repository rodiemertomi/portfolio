import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  let Links = [
    { name: 'HOME', path: '/portfolio' },
    { name: 'ABOUT ME', path: '/aboutme' },
    { name: 'PROJECTS', path: '/projects' },
  ]
  let [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const changeNavBarColor = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', changeNavBarColor)
  return (
    <>
      <div
        className={`w-full sticky top-0 z-50 text-shadow-md font-bold ${
          isScrolled ? `bg-white shadow-md` : `bg-lightblue`
        } transition-all duration-300 ${open ? 'bg-white' : ''}`}
      >
        <div className='flex items-center justify-between py-4 md:px-10 px-7'>
          <div className='h-auto'>
            <Link to='/portfolio'>
              <img src={require('../assets/gifs/T.gif')} alt='' className='h-8' />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className='text-3xl absolute right-8 top-4 cursor-pointer lg:hidden'
          >
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center lg:justify-center md:justify-between lg:gap-10 md:gap-6 gap-16 font-Lora text-2xl md:text-3xl lg:py-0 md:py-8 pb-12 absolute lg:static ${
              isScrolled ? `bg-white` : `bg-lightblue`
            } md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-9 lg:pr-0 md:pr-4 transition-all duration-300 ease-in-out ${
              open ? 'top-20 bg-white' : 'top-[-300px]'
            }`}
          >
            {Links.map(link => (
              <li
                className='md:ml-8 text-2xl md:my-0 my-7'
                key={link.name}
                onClick={() => setOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`text-black ${
                    isScrolled ? 'xl:hover:text-lightblue' : 'xl:hover:text-white'
                  } transition-all duration-300`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavigationBar
