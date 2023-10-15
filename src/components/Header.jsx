import React from 'react'
import {FaBars} from "react-icons/fa"

const Header = () => {
  return (
    <div className='flex justify-between'>
    <div className='flex items-center justify-center gap-2'>
        <img src="" alt="logo" />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 text-sm text-white px-2.5 py-1.5 rounded-2xl'>Hoster is hiring</button>
    </div>
    <ul className='hidden lg:flex justify-between items-center text-grey-400 gap-6'>
        <li>
            <a href="#">plans</a>
        </li>
        <li>
            <a href="#">plans</a>
        </li>
        <li>
            <a href="#">plans</a>
        </li>
    </ul>
    <div className='hidden lg:flex justify-center items-center gap-6'>
        <a className='text-grey-400' href="#">Sign In</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white '>Join Wishlist</button>
    </div>
    <div className='lg:hidden'>
    <FaBars/>
    </div>
    </div>
  )
}

export default Header