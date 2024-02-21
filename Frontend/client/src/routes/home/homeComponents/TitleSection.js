import React from 'react'
import Header from './Header'

const TitleSection = () => {
  return (
    <div className='w-[45vw] min-w-[350px] h-[100px] lg:h-[50vh] flex justify-bethween items-center text-white'>

        <Header/>

        <section className='font-zenmarugothic-regular text-[15px] lg:text-[50px] font-black pl-[20px] lg:pl-[50px]'>
            <h1>INVENTORY</h1>
            <h1>MANAGEMENT</h1>
            <h1>SYSTEM</h1>
        </section>
      
    </div>
  )
}

export default TitleSection
