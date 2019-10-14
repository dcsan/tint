import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  return(
    <div className='nav-bar'>
      <Link to='/home'>home</Link> |&nbsp;
      <Link to='/editor'>editor</Link>
    </div>
  )
}

export default NavBar