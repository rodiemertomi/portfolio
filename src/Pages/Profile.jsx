import React from 'react'
import TomiSVG from '../Components/TomiSVG'

const Profile = () => {
  return (
    <div className='bg-lightblue h-screen'>
      <div className='flex flex-col gap-20 top-20 items-center justify-between text-3xl text-shadow-xl'>
        <div>Hi, I'm</div>
        <TomiSVG />
        <div>A Web Developer</div>
      </div>
    </div>
  )
}

export default Profile
