import React, { useState } from 'react'
import logo from '../panda images/OIG.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'




function Navbar() {
    
    const [openLinks, setOpenLinks] =useState(false) 
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
    <div className='navbar'>
      <div className='leftSide'id={openLinks ? "open" : "close"} >
        <img src={logo} />
        <div className='hidenLinks'>
            <Link to="/">Home </Link>
            <Link to="/menu">Menu </Link>
            <Link to="/about">About </Link>
            <Link to="/contact">Contact </Link>
        </div>
      </div>
      <div className='rightSide'></div>
        <Link to="/">Home </Link>
        <Link to="/menu">Menu </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        
        <button onClick={toggleNavbar}>
              
        </button>
        
    </div>
  )
}

export default Navbar
