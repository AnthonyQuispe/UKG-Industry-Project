import React from 'react'
import UkgIcon from '../../assets/logo-green.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"



const Navbar = () => {
  return (
    <nav className='nav'>
    <Link to='/dashboard'><motion.img className='nav__image' src={UkgIcon} alt='logo'
    animate={{
      x:50,
      opacity: 1
    }}
    initial={{
      opacity:0.1
    }}
    transition={{
      type:"spring",
      stiffness: 100
    }}
    /></Link>
    <div className='diver'></div>
    <Link to='/'><p className='nav__text'>Language</p></Link>
    </nav>
  )
}

export default Navbar