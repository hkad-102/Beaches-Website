import React from 'react'
import Picture1 from '../assets/picture1.jpg'
import Picture2 from '../assets/picture2.jpg'
import Picture3 from '../assets/Beach1.jpg'
import Picture4 from '../assets/Beach2.jpg'
import Picture5 from '../assets/Beach3.jpg'
import Picture6 from '../assets/picture5.jpg'
import SelectCard from './SelectCard'

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectCard bg={Picture1} text="Maldives"/>
        <SelectCard bg={Picture2} text="Singapore"/>
        <SelectCard bg={Picture3} text="Thailand"/>
        <SelectCard bg={Picture4} text="Japan"/>
        <SelectCard bg={Picture5} text="India"/>
        <SelectCard bg={Picture6} text="Jameica"/>
    </div>
  )
}

export default Select