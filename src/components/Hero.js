import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/svg/arrow_forward.svg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h2>Revitalize Your Essence with Pure Mineral Aesthetics</h2>
          <p>
            Discover the harmony of nature and luxury. Our exclusive
            mineral-based skincare treatments are designed to rejuvenate your
            skin and enhance your natural beauty. Experience the touch of
            pureness and sophistication in every session.
          </p>
          <Link to="/" className="btn">
            <span>Explore Treatments</span>
            <ArrowIcon className="svg-icon" />
          </Link>
        </div>

        <div className="hero-image"></div>
      </div>
    </div>
  );
};

export default Hero;
