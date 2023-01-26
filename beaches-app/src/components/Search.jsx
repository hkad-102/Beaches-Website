import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
          <div>
            <h2 className='uppercase'>Luxury Included vacations for two people</h2>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae maxime totam voluptatum facere corrupti esse in odio delectus! Ducimus nulla saepe inventore qui cupiditate tenetur vero iusto praesentium, deserunt at commodi, laudantium quos aut labore quo impedit aliquam consequatur deleniti velit rerum sed veniam itaque! Commodi, iusto culpa esse autem hic odit voluptates quos voluptatem quo officiis nulla dignissimos aspernatur necessitatibus magni? A est, eaque necessitatibus omnis fuga autem distinctio temporibus ipsam quam, assumenda quaerat tenetur, non totam voluptates odio aperiam explicabo. Soluta dolorem quae excepturi reprehenderit sint dignissimos iure consequuntur molestiae quibusdam sapiente deleniti, dolorum et molestias quisquam tempora!</p>
          </div>
          <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
              <button>
                <RiCustomerService2Fill size={50} />
              </button>
              <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
              <button>
                <MdOutlineTravelExplore size={50} />
              </button>
              <div>
                <h3 className='py-2'>AUTOMATED BOOKING</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
            <div className='flex flex-col my-2'>
              <label>Destination</label>
              <select className='border rounded-md p-2'>
                <option>Maldives</option>
                <option>Thailand</option>
                <option>Singapore</option>
                <option>Bangkok</option>
              </select>
            </div>
            <div className='flex flex-col my-2'>
              <label>Check-In</label>
              <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col my-2'>
              <label>Check-Out</label>
              <input className='border rounded-md p-2' type="date" />
            </div>
            <button className='w-full my-4'>Rates & Availabilites</button>
          </form>
        </div>
    </div>
  )
}

export default Search