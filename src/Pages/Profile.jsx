import React, { useEffect } from 'react'
import TomiSVG from '../Components/TomiSVG'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import '../logo.css'

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='shadow-md bg-lightblue'>
      <div className='h-screen'>
        <div className='xl:pt-52 pt-20 md:pt-20 flex flex-col md:flex-row md:justify-around items-center gap-20 text-2xl md:text-3xl text-shadow-xl font-Lora text-black'>
          <div id='t-div' className='md:order-1'>
            <span title='T;'>T;</span>
          </div>
          <div className='flex flex-col items-left gap-20 text-2xl lg:text-3xl text-shadow-xl font-Lora text-black'>
            <div>Hi, I'm</div>
            <TomiSVG />
            <div>A Web Developer.</div>
            <div>
              <Link to='/aboutme'>
                <Button>Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
