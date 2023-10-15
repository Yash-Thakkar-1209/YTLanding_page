import React from 'react'
import {VscWorkspaceTrusted} from "react-icons/vsc"

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
        <div className='flex items-center justify-center lg:flex-1 '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU" alt="Photo" className='rounded-full px-7 mx-8 lg:h-[300px]' />
        </div>
   
        <div className='lg:flex-1'>
            <h1 className='text-5xl font-bold  leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.</h1>
            <p className='font-sans text-grey-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum totam animi quo eveniet rem odio voluptatum in modi culpa!</p><br />
            <form action="" className='flex flex-col gap-1 md:flex-row'>
            <input  className='rounded-md px-4 py-3 placeholder:text-grey-400' type="text" placeholder='Enter Email address' />
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white '>Join Wishlist</button>
            </form>
            <div className='flex gap-2'>
              <VscWorkspaceTrusted />
                <h3 className='text-grey-300'>Lorem ipsum dolor sit amet.</h3> 
            </div>
        </div>
    </div>
  )
}

export default Body