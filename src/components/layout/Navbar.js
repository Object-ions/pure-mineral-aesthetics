import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import TopCTA from './TopCTA';
import hamburger from '../../assets/svg/hamburger-icon.png';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const logo = '/images/mineral-logotype.png';

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

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
            {user ? (
              <NavLink to="/profile">Profile</NavLink>
            ) : (
              <>
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Sign In
                </NavLink>
                <span>/</span>
                <NavLink
                  to="/sign-up"
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
