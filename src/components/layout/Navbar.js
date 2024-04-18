import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../../assets/svg/personOutlineIcon.svg';
import TopCTA from './TopCTA';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => route === location.pathname;

  return (
    <header>
      <TopCTA />
      <div className="navbar">
        <div className="navbar-container">
          <ul className="ul-row">
            <li>
              <Link to="/">Logo</Link>
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
                Book Your Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
