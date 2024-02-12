import React from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';
import {TiMicrophone} from 'react-icons/ti';
import {BsCameraVideo, BsYoutube, BsBell} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoAppsSharp} from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/mrbeast.png'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../store';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

export default function Navbar() {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state)=>state.youtubeApp.searchTerm);

    const handleSearch =()=> {
        if(location.pathname !== '/search'){
            navigate('/search');
        }else{
            dispatch(clearVideos());
            dispatch(getSearchPageVideos(false));
        }
    }
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
            <form onSubmit={e=>{
                e.preventDefault();
                handleSearch();
            }}>
                <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 ">
                    <div className="flex gap-4 items-center pr-5 ">
                        <div>
                            <AiOutlineSearch className='text-xl'/>
                        </div>
                        <input type="text" className='w-96 bg-zinc-900 focus:outline-none border-none'
                        value={searchTerm} onChange={e=> dispatch(changeSearchTerm(e.target.value))}/>
                        {/* <AiOutlineClose className=' '/> */}
                        <AiOutlineClose className={`text-xl cursor-pointer ${!searchTerm ? 'invisible': "visible"}`}
                        onClick={()=> dispatch(clearSearchTerm())}/> 
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
                    <AiOutlineSearch className='text-xl'/>
                    </button>
                </div>
            </form>
            <div className='text-xl p-3 bg-zinc-800 rounded-full'>
                <TiMicrophone />
            </div>
        </div>
        <div className='flex gap-4 items-center text-xl'>
            <BsCameraVideo />
            <IoAppsSharp />
            <div className='relative'>
                <BsBell />
                <span className='absolute bottom-2 left-2 text-xs bg-red-500 rounded-full px-1'>
                    68+
                </span>
            </div>
            <img src= {Logo} alt="Logo" className='h-9 w-9 rounded-full ml-2'/>
        </div>
    </div>
  )
}
