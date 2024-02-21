import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='w-[100px] h-full lg:w-[200px] lg:h-full flex justify-center items-center'>
        
        <img src={logo} alt="Logo" className='w-[100px] lg:w-full'/>
      
    </div>
  )
}

export default Header
