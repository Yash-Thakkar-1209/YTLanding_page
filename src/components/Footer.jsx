import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row justify-between'>
        <ul className='flex gap-6 font-sans text-grey-800'>
            <li className='border-2 rounded-2xl px-3 py-2'>
            <a href="#">Facebook</a>
            </li>
            <li className='border-2 rounded-2xl px-3 py-2'>
            <a href="#">Facebook</a>
            </li>
            <li className='border-2 rounded-2xl px-3 py-2'>
            <a href="#">Facebook</a>
            </li>
        </ul>
        <div className='flex gap-2'>
            <img src="" alt="" />
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis!</a>
            </div>
        </div>
            
            

    </div>
  )
}

export default Footer