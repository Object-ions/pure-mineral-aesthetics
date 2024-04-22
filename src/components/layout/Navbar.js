import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/" exact activeClassName="active">
              <img src={logo} alt="Mineral Logo" className="logo" />
            </NavLink>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={hamburger} alt="Menu" />
          </button>
          <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <NavLink to="/products" activeClassName="active">
              Products
            </NavLink>
            <NavLink to="/treatments" activeClassName="active">
              Treatments
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/contact-us" activeClassName="active">
              Contact Us
            </NavLink>
          </nav>
          <div className={`navbar-profile ${isOpen ? 'open-inline' : ''}`}>
            <NavLink to="/sign-in" activeClassName="active">
              Sign In
            </NavLink>
            <span>/</span>
            <NavLink to="/sign-up" activeClassName="active">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
