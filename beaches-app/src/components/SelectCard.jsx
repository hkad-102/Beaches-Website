import React from 'react'

const SelectCard = (props) => {
  return (
    <div className='relative'>
            <img className='w-full h-full object-cover' src={props.bg} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 h-full w-full z-10'>
                <p className='left-4 bottom-4 text-2xl text-white font-bold absolute'>{props.text}</p>
            </div>
        </div>
  )
}

export default SelectCard