import React from 'react'

function SingleFood({ foods }) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 cursor-pointer'>
        {foods.map((food) => (
            <div key={food.id} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                <img src={food.image} alt={food.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{food.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-full'>{food.price}</span>
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SingleFood