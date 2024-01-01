import React, { useState } from 'react';
import Logo from '../assets/cityzen1.jpg';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';




function navbar() {
  /*const [openLinks,setOpenLinks] = useState(false);
  
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };*/


  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={Logo} />
            <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button >
                <ReorderIcon />
            </button>
        </div>
    </div>
  );
}

export default navbar;