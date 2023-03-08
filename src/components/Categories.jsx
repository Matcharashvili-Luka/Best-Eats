import React from 'react';
import { categories } from '../Data/Data';

function Categories() {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated
      </h1>
      
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item) => (
          <div key={item.id} className='bg-gray-200 rounded-lg p-4 flex justify-between items-center'>
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </div>
        ))}
      </div>

      <div className='w-[110%] text-sm bg-orange-500 text-white py-1 flex justify-center mt-[100px] mb-[-45px] ml-[-50px]'>
        Created By Luka Matcharashvili
      </div>
    </div>
  )
}

export default Categories