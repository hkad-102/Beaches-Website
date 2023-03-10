import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Video from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className="w-full h-full object-cover" src={Video} autoPlay muted loop></video>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/20'></div>
        <div className='absolute w-full h-full top-0 flex flex-col justify-center text-center text-white p-4'>
            <h1>First Class Travel</h1>
            <h2 className='py-4'>Top 1% Location WorldWide</h2>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/70'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] text-black font-[Poppins] focus:outline-none mx-2' type="text" placeholder='Search Destination' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} /></button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default Hero