import React from 'react'

const Button = props => {
  return (
    <button className='border border-black bg-lightblue rounded-3xl font-Lora text-black transition-all duration-500 hover:bg-darkblue hover:text-white px-6 py-2'>
      {props.children}
    </button>
  )
}

export default Button
