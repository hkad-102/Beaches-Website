import React, {useState} from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(prev => !prev)
        setLogo(!logo)
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex '>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={20}/>
            <BsPerson size={20}/>
        </div>
        {/* Mobile Menu Drop Down */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose size={20} className='text-black'/> : <HiOutlineMenuAlt3 size={20}/>}
            
        </div>
        <div onClick={handleNav} className={ nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/60 px-4 py-[24px]' : 'absolute left-[-100%]'}>
            <ul>
                <h1 className='uppercase'>Beaches.</h1>
                <li className='text-center border-b'>Home</li>
                <li className='text-center border-b'>Destination</li>
                <li className='text-center border-b'>Travel</li>
                <li className='text-center border-b'>View</li>
                <li className='text-center border-b'>Book</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-4'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaPinterest className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </ul>

        </div>
    </div>
  )
}

export default Navbar