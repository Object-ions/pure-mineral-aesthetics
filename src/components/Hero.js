import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/svg/arrow_forward.svg';
import heroImage from '../assets/website-images/hero.png';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-container">
        <div className="hero-text">
          <h2>Revitalize Your Essence with Pure Mineral Aesthetics</h2>
          <p>
            Discover the harmony of nature and luxury. Our exclusive
            mineral-based skincare treatments are designed to rejuvenate your
            skin and enhance your natural beauty. Experience the touch of
            pureness and sophistication in every session.
          </p>
          <Link to="/treatments" className="btn">
            <span>Explore Treatments</span>
            <ArrowIcon className="svg-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
