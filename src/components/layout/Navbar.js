import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopCTA from './TopCTA';
import hamburger from '../../assets/svg/hamburger-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logo = '/images/mineral-logotype.png';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <TopCTA />
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Mineral Logo" className="logo" />
            </Link>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={hamburger} alt="Menu" />
          </button>
          <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <Link to="/products">Products</Link>
            <Link to="/treatments">Treatments</Link>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>
          <div className={`navbar-profile ${isOpen ? 'open-inline' : ''}`}>
            <Link to="/sign-in">Sign In</Link>
            <span>/</span>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
