import { Link } from 'react-router-dom';
import Copyrights from './Copyrights';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/x-twitter.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h2>Pure Mineral Aesthetics</h2>
        <div className="visit-us">
          <h3>Location</h3>
          <p>
            4023 18th St, Ste B,
            <br />
            San-Francisco, CA 94114
          </p>
          <p>415-874-9852</p>
          <>
            <h3>Socials</h3>
            <br />
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
        <div className="footer-policies">
          <h3>Policies</h3>
          <Link to={'/'}>FQA</Link>
          <Link to={'/'}>Terms & Conditions</Link>
          <Link to={'/'}>Privacy Policy</Link>
          <Link to={'/'}>Shipping Policy</Link>
          <Link to={'/'}>Refund Policy</Link>
          <Link to={'/'}>Cookie Policy</Link>
          <Link to={'/'}>Accessibility Statement</Link>
        </div>
        <div className="navigation">
          <h3>Menu</h3>
          <Link to={'/sign-up'}>Sign Up</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/treatments'}>Treatments</Link>
          <Link to={'/collection'}>Collection</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact-us'}>Contact</Link>
        </div>
        <div className="news-letter">
          <h3>Join Our News Letter!</h3>
          <label>Email Address:</label>
          <input type="email" />
          <button className="btn">Subscribe</button>
          <p>* By clicking subscribe I agree to news letter policy</p>
        </div>
      </div>
      <Copyrights />
    </footer>
  );
};

export default Footer;
