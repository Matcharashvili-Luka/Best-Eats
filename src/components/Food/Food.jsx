import React, { useState } from 'react';
import { data } from '../../Data/Data.js';
import SingleFood from './SingleFood.jsx';
 
function Food() {
    const[foods, setFoods] = useState(data);
    const[filter, setFilter] = useState('all');

    // filter type 
    const filterType = (category) => {
        setFoods(
            data.filter((food) => { return food.category == category })
        )
    }
    const filterPrice = (price) => {
        setFoods(
            data.filter((food) => { return food.price == price})
        )
    }

    // filter elements and style
    const typeFilterElements = ['Burger', 'Pizza', 'Salad', 'Chicken'];
    const priceFilterElements = ['$', '$$', '$$$', '$$$$'];

    const buttonStyle = 'm-1 w-[80px] flex justify-center border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white';
    const activeButtonStyle = 'm-1 w-[80px] flex justify-center border-orange-600 bg-orange-600 text-white';

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between mt-5'>
            {/* filter type */}
            <div>
                <p className='font-gold text-gray-700 ml-2'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button
                        onClick={() => { setFoods(data); setFilter('all') }} 
                        className={filter == 'all' ? activeButtonStyle : buttonStyle}
                    >All</button>

                    {typeFilterElements.map((item) => (
                        <button
                            onClick={() => { filterType(item.toLowerCase()); setFilter(item.toLowerCase()) }} 
                            className={filter == item.toLowerCase() ? activeButtonStyle : buttonStyle}
                        >{item}</button>
                    ))}
                </div>
            </div>
            {/* filter price */}
            <div className='mt-1'>
                <p className='font-gold text-gray-700 ml-2'>Filter Price</p>
                <div className='flex justify-between flex-wrap max-w-[390px] w-full'>
                    {priceFilterElements.map((item) => (
                        <button
                            onClick={() => { filterPrice(item); setFilter(item) }} 
                            className={filter == item ? activeButtonStyle : buttonStyle}
                        >{item}</button>
                    ))}
                </div>
            </div>
        </div>


        {/* grid */}
        <SingleFood foods={foods} />
    </div>
  )
}

export default Food