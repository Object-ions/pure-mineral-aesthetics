import { Link } from 'react-router-dom';
import Copyrights from './Copyrights';
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="visit-us">
          <h3>Visit Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>152-874-9852</p>
          <>
            <Link to={'/'}>FB</Link>
            <Link to={'/'}>IG</Link>
          </>
        </div>
        <div className="logo">Logo</div>
        <div className="navigation">
          <Link to={'/'}>Testimonials</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Contact</Link>
        </div>
      </div>
      <Copyrights />
    </footer>
  );
};

export default Footer;
