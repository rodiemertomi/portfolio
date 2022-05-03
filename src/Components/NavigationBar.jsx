import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const NavigationBar = () => {
  let Links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/aboutme' },
    { name: 'PROJECTS', path: '/projects' },
  ]
  let [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full sticky top-0 left-0 z-[1]'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl md:text-3xl cursor-pointer flex items-center font-Lora text-black'>
          <div className='hover:text-lightblue transition-all duration-200'>
            <Link to='/'>Tomi</Link>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden hover:text-lightblue transition-all duration-200'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center gap-16 font-Lora text-2xl md:text-3xl md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? 'top-20' : 'top-[-300px]'
          }`}
        >
          {Links.map(link => (
            <li className='md:ml-8 text-2xl md:my-0 my-7' key={link.name}>
              <Link
                to={link.path}
                className='text-black hover:text-lightblue transition-all duration-200'
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Button>CONTACT ME</Button>
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar
