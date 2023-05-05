import React from 'react'
import UkgIcon from '../../assets/logo-green.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='nav'>
    <Link to='/dashboard'><img className='nav__image' src={UkgIcon} alt='logo' /></Link>
    <Link to='/'><p className='nav__text'>Language</p></Link>
    </nav>
  )
}

export default Navbar