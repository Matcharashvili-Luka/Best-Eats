import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <span></span><h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Foods <span className='text-orange-500'>Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover mt-20' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
    </div>
  )
}

export default Hero