import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function Invite({ inviteOpen, setInviteOpen }) {
  return (
    <div className={inviteOpen ? 'absolute top-0 left-0 w-full h-full duration-300' : 'absolute top-[-110%] left-0 w-full h-full duration-300'}>
        <div className={inviteOpen ? 'bg-black/50 fixed w-full h-screen z-10 top-0 left-0 cursor-pointer' : ''} onClick={() => setInviteOpen(false)}></div>
        <div className='bg-green-400 w-[90%] h-auto fixed z-10 ml-[5%] mt-[30%] p-2 md:mt-[20%] lg:mt-[10%] md:w-[50%] md:mx-[25%]'>
            <div className='flex text-3xl items-center justify-between shadow-xl'>
                <h1>Invite Friends</h1>
                <AiOutlineClose className='cursor-pointer' onClick={() => setInviteOpen(false)}/>
            </div>      
            <div>
                <div className='flex mt-5'>
                    <p className='font-bold mr-2 w-20'>Website</p>
                    <p>www.besteats.com</p>
                </div>
                <div className='flex mt-2'>
                    <p className='font-bold mr-2 w-20'>Address</p>
                    <p>Tbilisi/Gldani/VII</p>
                </div>
                <div className='flex mt-2'>
                    <p className='font-bold mr-2 w-20'>Number</p>
                    <p>+995 598-53-53-53</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invite