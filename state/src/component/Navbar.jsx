import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <div>
      <Link className='logo'>Logo</Link>
    </div>
    <div className='nav-links'>
     <ul>
      <li><Link to="/home" className='links' >Home</Link></li>
      <li><Link to="/about" className='links'>About</Link></li>
      <li><Link to="/login" className='links'>Login </Link></li>
     </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar
