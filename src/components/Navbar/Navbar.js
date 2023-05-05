import React from 'react'
import UkgIcon from '../../assets/logo-green.png'
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav className='nav'>
    <img className='nav__image' src={UkgIcon} alt='logo' />
    <p className='nav__text'>Language</p>
    </nav>
  )
}

export default Navbar