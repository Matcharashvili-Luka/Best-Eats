import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';

function SideMenu({ nav, setNav }) {
  return (
    <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] duration-300'}>
    <AiOutlineClose size={25} className='absolute right-4 top-4 cursor-pointer' onClick={() => setNav(false)}/>
    <h2 className='text-2xl p-4'>Best<span className='font-bold'>Eats</span></h2>
    <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
        <li className='text-xl py-4 flex  cursor-pointer hover:text-orange-600'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
        <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600'><MdFavorite size={25} className='mr-4'/>Favorites</li>
        <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600'><MdHelp size={25} className='mr-4'/>Help</li>
        <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600'><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
        <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
        <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600'><BsFillCartFill size={25} className='mr-4'/>Cart</li>
        </ul>
    </nav>
    </div>
  )
}

export default SideMenu