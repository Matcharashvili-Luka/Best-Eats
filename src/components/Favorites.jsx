import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Favorites({ favorites, setFavorites, favoritesOpen, setFaoritesOpen }) {
    function removeFood(arr, food){
        return arr.filter((item) => item.id != food.id);
    }

  return (
    <div className={favoritesOpen ? 'absolute top-0 left-0 w-full h-full duration-300' : 'absolute top-[-110%] left-0 w-full h-full duration-300'}>
        <div className={favoritesOpen ? 'bg-black/50 fixed w-full h-screen z-10 top-0 left-0 cursor-pointer' : ''} onClick={() => setFaoritesOpen(false)}></div>
        <div className='bg-white w-[90%] h-auto fixed z-10 ml-[5%] mt-[20%] p-2 md:mt-[10%] lg:mt-[5%] md:w-[50%] md:mx-[25%]'>
            <div className='flex text-3xl items-center justify-between shadow-xl'>
                <h1>favorites</h1>
                <AiOutlineClose className='cursor-pointer' onClick={() => setFaoritesOpen(false)}/>
            </div>
            <div className='mt-5 overflow-hidden h-80 overflow-y-scroll'>
                {favorites.length ? 
                    favorites.map((item, index) => {
                        return (
                            <div className='flex items-center justify-between mt-2 pr-2' key={index}>
                                <div className='flex items-center'>
                                    <img className='h-[2.5rem] w-[2.5rem] md:h-[3rem] md:w-[3rem] object-cover rounded-full' src={item.image} alt=""/>
                                    <p className='ml-2 text-sm md:text-lg'>{item.name}</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='text:sm md:text-lg mr-7'>{item.price}</p>
                                    <AiOutlineClose 
                                        className='text:sm md:text-lg text-white bg-black rounded-full cursor-pointer hover:scale-110 hover:bg-orange-500' 
                                        onClick={() => setFavorites(removeFood(favorites, item))}
                                    />
                                </div>
                            </div>
                        )
                    })
                    :
                    <p>No Favorite Food!</p>
                }
            </div>
            <div className='flex justify-center mt-5'>
                <button 
                    className='hover:border-black hover:bg-black bg-orange-600 text-white border-orange-600' 
                    onClick={() => {alert(favorites.length ? 'Good Job!' : 'No Favorite Food!'); setFaoritesOpen(false)}}
                >Order Favorite Menu</button>
            </div>     
        </div>
    </div>
  )
}

export default Favorites