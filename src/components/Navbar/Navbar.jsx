import React, { useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import SideMenu from './SideMenu';

function Navbar({ nav, setNav, delivery, setDelivery, setCartOpen, setFaoritesOpen, setInviteOpen, setHelpOpen }) {
  return (
    <div className=' fixed w-full max-w-[1640] mx-auto flex justify-between items-center p-4 bg-white z-10 shadow-xl'>
      {/* left side */}
      <div className='flex items-center'>
          <div className='cursor-pointer' onClick={() => setNav(true)}>
              <AiOutlineMenu size={30}/>
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
          <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer relative ml-5' onClick={ () => setDelivery(!delivery) }>
              <div className={ delivery ? 'absolute bg-black h-[85%] w-[47%] rounded-full top-[2.5px] left-1' : 'absolute bg-black h-[85%] w-[47%] rounded-full top-[2.5px] right-1'}></div>              
              <div className='w-[60px] text-center z-10'>
                <p className={ delivery ? 'text-white' : 'text-black'}>Delivery</p>
              </div>
              <div className='w-[60px] text-center z-10'>
                <p className={ delivery ? 'text-black' : 'text-white'}>Pickup</p>
              </div>
          </div>
      </div>

      {/* search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20}/>
        <input type="text" placeholder='Search Food' className='bg-transparent w-full p-2 focus:outline-none'/>
      </div>

      {/* cart button */}
      <div className='hidden bg-black text-white md:flex items-center py-2 px-3 rounded-full cursor-pointer'>
        <BsFillCartFill size={20} className='mr-2' onClick={() => setCartOpen(true)}/> Cart
      </div>


      {/* ======= mobile menu ======= */}
      {/* overlay */}
      { nav ? <div className='bg-black/50 fixed w-full h-screen z-10 top-0 left-0 cursor-pointer' onClick={() => setNav(false)}></div> : ''}
      
      {/* side menu */}
      <SideMenu 
        nav={nav}
        setNav={setNav}
        setCartOpen={setCartOpen}
        setFaoritesOpen={setFaoritesOpen}
        delivery={delivery}
        setDelivery={setDelivery}
        setInviteOpen={setInviteOpen}
        setHelpOpen={setHelpOpen}
      />
    </div>
  )
}

export default Navbar