import { Link } from 'react-router-dom';
import TopCTA from './TopCTA';
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow_forward.svg';

const Navbar = () => {
  const logo = '/images/mineral-logotype.png';
  return (
    <header>
      <TopCTA />
      <div className="navbar">
        <div className="navbar-container">
          <ul className="ul-row">
            <li>
              <Link to="/">
                <img src={logo} alt="Mineral Logo" className="logotype" />
              </Link>
            </li>
          </ul>
          <ul className="ul-row">
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
              <Link to="/book-appointment" className="btn">
                <span>Book Your Appointment</span>{' '}
                <ArrowIcon className="svg-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
