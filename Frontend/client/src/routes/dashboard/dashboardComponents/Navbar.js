import React from 'react'
import NavSection from './NavSection'
import TimeZone from './TimeZone'

const Navbar = ({firstName, lastName}) => {
  return (
    <div className='w-full'>
      <TimeZone/>
      <div className='w-full h-[36px] flex items-center text-[20px] font-RubikRegular font-semibold mt-[10px]'>
        <h1 className='w-[150px] h-[36px] flex items-center'><span className='text-[#39DB7D]'>Hi</span>,&nbsp;&nbsp;{firstName}</h1>
        <NavSection/>
      </div>
    </div>
  )
}

export default Navbar
