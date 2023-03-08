import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { BsFillCartFill } from 'react-icons/bs';

function SingleFood({ foods, favorites, setFavorites, cart, setCart }) {

    function containsFood(arr, food){
        for(let item of arr){
            if(item.id == food.id) return true;
        }
        return false;
    }

    function addFood(arr, food){
        let exist = containsFood(arr, food);

        if(!exist){
            arr = [...arr, food];
        }else{
            arr = arr.filter((item) => item.id != food.id);
        }   
        return arr;
    }

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10'>
        {foods.map((food) => (
            <div key={food.id} className='border shadow-lg hover:scale-105 duration-300 rounded-lg relative overflow-hidden' >
                <img src={food.image} alt={food.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{food.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-full'>{food.price}</span>
                    </p>
                </div>
                <div className='flex items-center justify-start ml-2 text-2xl pb-2'>
                    <MdFavorite 
                        className={ containsFood(favorites, food) ? 'text-orange-500 cursor-pointer hover:scale-110 duration-300 mr-2' : 'cursor-pointer hover:scale-110 duration-300 mr-2'}
                        onClick={() => setFavorites(addFood(favorites, food))}
                    />
                    <BsFillCartFill 
                        onClick={() => setCart(addFood(cart, food))}
                        className={ containsFood(cart, food) ? 'text-orange-500 cursor-pointer hover:scale-110 duration-300' : 'cursor-pointer hover:scale-110 duration-300'}
                    />
                </div>
            </div>
        ))}
    </div>
  )
}

export default SingleFood