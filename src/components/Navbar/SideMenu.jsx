import React from 'react';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

function SideMenu({ nav, setNav, setCartOpen, setFaoritesOpen, delivery, setDelivery, setInviteOpen, setHelpOpen }) {
  return (
    <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] duration-300'}>
      <AiOutlineClose size={25} className='absolute right-4 top-4 cursor-pointer' onClick={() => setNav(false)}/>
      <h2 className='text-2xl p-4'>Best<span className='font-bold'>Eats</span></h2>
      <div>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600' onClick={() => {setNav(false); setHelpOpen(true)}}><MdHelp size={25} className='mr-4'/>Help</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600' onClick={() => {setNav(false); setInviteOpen(true)}}><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600' onClick={() => {setNav(false); setFaoritesOpen(true)}}><MdFavorite size={25} className='mr-4'/>Favorites</li>
            <li className='text-xl py-4 flex cursor-pointer hover:text-orange-600' onClick={() => {setNav(false); setCartOpen(true)}}><BsFillCartFill size={25} className='mr-4'/>Cart</li>
          </ul>
      </div>
      <div className='md:hidden items-center bg-gray-200 rounded-full p-2 text-[16x] cursor-pointer relative mx-2 flex justify-between mt-[200px]' onClick={ () => setDelivery(!delivery) }>
        <div className={ delivery ? 'absolute bg-black h-[85%] w-[47%] rounded-full top-[2.5px] left-1' : 'absolute bg-black h-[85%] w-[47%] rounded-full top-[2.5px] right-1'}></div>              
        <div className='w-[125px] text-center z-10'>
          <p className={ delivery ? 'text-white' : 'text-black'}>Delivery</p>
        </div>
        <div className='w-[125px] text-center z-10'>
          <p className={ delivery ? 'text-black' : 'text-white'}>Pickup</p>
        </div>
      </div>
    </div>
  )
}

export default SideMenu