import { Link } from 'react-router-dom';
import TopCTA from './TopCTA';

const Navbar = () => {
  const logo = '/images/mineral-logotype.png';
  return (
    <header>
      <TopCTA />
      <div className="navbar">
        <div className="navbar-container">
          <ul className="ul-row">
            <li className="logotype">
              <Link to="/">
                <img src={logo} alt="Mineral Logo" className="logotype" />
              </Link>
            </li>
          </ul>
          <ul className="ul-row">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/treatments">Treatments</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <ul className="ul-row">
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
