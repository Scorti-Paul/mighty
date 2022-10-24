import React from 'react'
import './../style/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='primary-nav'>
      <div className="logo">Mighty</div>

      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar