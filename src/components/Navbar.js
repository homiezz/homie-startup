
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(prevState => !prevState);
    };
  
    return (
      <div className="burger-navbar">
        <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {isOpen &&
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
        }

      </div>
    );
  };
export default Navbar;
