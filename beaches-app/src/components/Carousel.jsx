import React, {useState} from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'


const sliderData = [
    {
        url: 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
        url: 'https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
        url: 'https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
        url: 'https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
        url: 'https://images.pexels.com/photos/531035/pexels-photo-531035.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
        url: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
]
const Carousel = () => {
    const [slide, setSlide] = useState(0)

    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }
  return (
    <div className='max-w-[940px] px-4 py-16 mx-auto relative flex justify-center item-center'>
        <BsArrowLeftCircle onClick={prevSlide} className='absolute top-[50%] text-4xl text-black bg-white rounded-full cursor-pointer left-0'/>
        <BsArrowRightCircle onClick={nextSlide} className='absolute top-[50%] text-4xl text-black bg-white rounded-full cursor-pointer right-0'/>
        {sliderData.map((item, index) => {
            return (
                <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'} >
                    {index === slide && (<img src={item.url} className='w-full rounded-md' alt="/" />) }
                </div>
            )
        })}
      
    </div>
  )
}

export default Carousel
