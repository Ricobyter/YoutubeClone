import React from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';
import {TiMicrophone} from 'react-icons/ti';
import {BsCameraVideo, BsYoutube, BsBell} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoAppsSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-14 px-14 bg-[#212121] opacity-95 sticky top-0 z-50'>
        <div className="flex gap-8 text-2xl items-center">
            <div className='cursor-pointer'>
                <GiHamburgerMenu />
            </div>
        <Link to = '/'>
            <div className="flex gap-1 items-center justify-center">
                <BsYoutube className='text-3xl text-red-600'/>
                <span className='text-white font-medium ml-2 text-xl'>YouTube</span>
                </div>
        </Link> 
        </div>
        <div className='flex items-center justify-center gap-5 '>
            <form >
                <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 ">
                    <div className="flex gap-4 items-center pr-5 ">
                        <div>
                            <AiOutlineSearch className='text-xl'/>
                        </div>
                        <input type="text" className='w-96 bg-zinc-900 focus:outline-none border-none'/>
                        {/* <AiOutlineClose className=' '/> */}
                        <AiOutlineClose className='text-xl cursor-pointer'/>
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
                    <AiOutlineSearch className='text-xl'/>
                    </button>
                </div>
            </form>
            
        </div>
    </div>
  )
}
