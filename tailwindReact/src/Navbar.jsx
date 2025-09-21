import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-evenly bg-slate-700 text-white mx-auto py-4'>
    <div className='logo'>
        <span className='font-bold text-xl '>i Task</span>
    </div>
    <ul className='flex gap-20 mx-9 justify-evenly'>
        <li className='cursor-pointer hover:font-bold transition-all duration-500'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-500'>Your Tasks</li>
    </ul>
   </nav>
  )
}

export default Navbar
