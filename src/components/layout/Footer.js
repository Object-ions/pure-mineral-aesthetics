import { Link } from 'react-router-dom';
import Copyrights from './Copyrights';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/x-twitter.svg';

const Footer = () => {
  const logo = '/images/mineral-logo-white.png';
  const logotype = '/images/mineral-logotype-white.png';
  return (
    <footer>
      <div className="footer">
        <div className="visit-us">
          <h3>Visit Us</h3>
          <p>
            4023 18th St, Ste B,
            <br />
            San-Francisco, CA 94114
          </p>
          <p>415-874-9852</p>
          <>
            <Link to={'/'}>
              <InstagramIcon className="svg-icon" />
            </Link>
            <Link to={'/'}>
              <FacebookIcon className="svg-icon" />
            </Link>
            <Link to={'/'}>
              <TwitterIcon className="svg-icon" />
            </Link>
          </>
        </div>
        <div className="footer-logos">
          <Link to={'/'}>
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <Link to={'/'}>
            <img className="logotype" src={logotype} alt="logo" />
          </Link>
        </div>
        <div className="navigation">
          <h4>Map website:</h4>
          <Link to={'/treatments'}>Treatments</Link>
          <Link to={'/product'}>Product</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact-us'}>Contact</Link>
          <Link to={'/sign-up'}>Sign Up</Link>
          <Link to={'/profile'}>Profile</Link>
        </div>
      </div>
      <Copyrights />
    </footer>
  );
};

export default Footer;
