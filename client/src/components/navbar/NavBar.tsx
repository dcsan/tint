import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  return(
    <div className='nav-bar'>
      <Link className='nav-button' to='/home'>home</Link>
      <Link className='nav-button' to='/editor'>editor</Link>
      <Link className='nav-button' to='/chat'>chat</Link>
      <Link className='nav-button' to='/todo'>todo</Link>
    </div>
  )
}

export default NavBar