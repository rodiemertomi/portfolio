import React from 'react'
import { Link } from 'react-router-dom'

let Links = [
  { name: 'HOME', path: '/portfolio' },
  { name: 'ABOUT ME', path: '/aboutme' },
  { name: 'PROJECTS', path: '/projects' },
]

let Socials = [
  {
    name: `Facebook`,
    icon: 'fa-brands fa-facebook',
    path: `https://www.facebook.com/rodiemertomi`,
  },
  {
    name: `Messenger`,
    icon: 'fa-brands fa-facebook-messenger',
    path: `https://www.messenger.com/t/100003568075741/`,
  },
  {
    name: `Github`,
    icon: 'fa-brands fa-github',
    path: `https://github.com/rodiemertomi`,
  },
  {
    name: `Linked In`,
    icon: 'fa-brands fa-linkedin',
    path: `https://www.linkedin.com/in/rodiemer-tominez-10a63b21b/`,
  },
]

let Contact = [
  {
    name: '+63 927 531 8445',
    icon: 'fa-solid fa-phone',
  },
  {
    name: 'rodiemertominez@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
]

const Footer = () => {
  return (
    <div className='z-[-1] bg-white shadow-md text-shadow-md text-xl flex flex-wrap justify-between text-black font-Lora px-10 py-5'>
      <div>
        Quick Links
        <ul>
          {Links.map(link => (
            <li className='text-xl md:my-0 py-1' key={link.name}>
              <Link
                to={link.path}
                className='text-black hover:text-lightblue transition-all duration-200'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Socials
        <ul>
          {Socials.map(element => (
            <li key={element.name}>
              <a href={element.path} target='_blank' rel='noreferrer'>
                <i className={element.icon}>{` ${element.name}`}</i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='pt-5 md:pt-0'>
        Contact Me
        <ul>
          {Contact.map(element => (
            <li key={element.name}>
              <i className={element.icon}></i>
              {` ${element.name}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
