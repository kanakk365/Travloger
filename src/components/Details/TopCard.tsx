import Image from 'next/image'
import React from 'react'

function TopCard() {
  return (
    <div className=" max-w-7xl mx-auto relative mt-10 h-[18rem] w-full overflow-hidden rounded-3xl  sm:h-[20rem] md:h-[17rem]">
        <Image
          src="/landing/rajasthanlong.png"
          alt="Rajasthan"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute text-center inset-y-0 left-[35%] flex flex-col justify-center mx-auto pb-10 gap-3 px-8 text-white sm:px-12 md:px-4 z-10">
          
          <h1 className='text-5xl font-semibold mb-2 '>RAJASTHAN 2025</h1>
          <p className='text-xl'>6N/7D EXCLUSIVE RAJASTHAN 2025</p>
          
        </div>
      </div>
  )
}

export default TopCard