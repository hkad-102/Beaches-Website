import React from 'react'
import Picture1 from '../assets/picture1.jpg'
import Picture2 from '../assets/picture2.jpg'
import Picture3 from '../assets/picture3.jpg'
import Picture4 from '../assets/picture4.jpg'
import Picture5 from '../assets/picture5.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All Inclusive Resorts</h1>
        <p>On Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Picture5} alt="/" />
            <img className='w-full h-full object-cover' src={Picture2} alt="/" />
            <img className='w-full h-full object-cover' src={Picture3} alt="/" />
            <img className='w-full h-full object-cover' src={Picture4} alt="/" />
            <img className='w-full h-full object-cover' src={Picture1} alt="/" />
        </div>
    </div>
    
  )
}

export default Destinations