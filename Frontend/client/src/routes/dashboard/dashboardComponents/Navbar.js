import React from 'react'
import NavSection from './NavSection'
import TimeZone from './TimeZone'

const Navbar = ({firstName, onViewProfile, onViewSetting, onViewUser, onViewDashboard, onViewStocks}) => {
  return (
    <div className='w-full'>
      <TimeZone/>
      <div className='w-full h-[36px] flex items-center text-[20px] font-RubikRegular font-semibold mt-[10px]'>
        <h1 className='w-[150px] h-[36px] flex items-center'><span className='text-[#39DB7D]'>Hi</span>,&nbsp;&nbsp;{firstName}</h1>
        <NavSection 
          onViewProfile={onViewProfile} 
          onViewSetting={onViewSetting}
          
          onViewDashboard = {onViewDashboard}
          onViewStocks = {onViewStocks}
          onViewUser = {onViewUser}
        />
      </div>
    </div>
  )
}

export default Navbar
