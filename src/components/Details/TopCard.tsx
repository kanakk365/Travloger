import Image from 'next/image'
import React from 'react'

function TopCard() {
  return (
    <div className="max-w-7xl mx-auto relative mt-6 sm:mt-10 h-[12rem] sm:h-[15rem] md:h-[18rem] lg:h-[20rem] w-full overflow-hidden  sm:rounded-3xl">
        <Image
          src="/landing/rajasthanlong.png"
          alt="Rajasthan"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 z-10">
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-1 sm:mb-2 md:mb-3 text-white'>RAJASTHAN 2025</h1>
          <p className='text-xs sm:text-sm md:text-base lg:text-xl text-white'>6N/7D EXCLUSIVE RAJASTHAN 2025</p>
        </div>
      </div>
  )
}

export default TopCard