import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/svg/arrow_forward.svg';

import ruby from '../assets/website-images/gems/ruby.png';
import jade from '../assets/website-images/gems/jade.png';
import quarts from '../assets/website-images/gems/quarts.png';
import amethyst from '../assets/website-images/gems/amethyst.png';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        <h3>Our Services</h3>
        <div className="service-card">
          <div className="image-wrapper">
            <img src={quarts} alt="quarts" />
          </div>
          <h4>Quartz Hydration Facial</h4>
          <p>
            Immerse yourself in a hydrating bliss with our quartz-infused
            facial, perfect for restoring vitality to thirsty skin.
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <img src={amethyst} alt="amethyst" />
          </div>
          <h4>Amethyst Calming Treatment</h4>
          <p>
            Soothe and calm your skin with the purifying properties of amethyst,
            designed to reduce inflammation and promote peace.
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <img src={ruby} alt="ruby" />
          </div>
          <h4>Ruby Revitalizing Boost</h4>
          <p>
            Experience the energizing effect of ruby crystals that aim to
            invigorate your skin and boost your natural glow.
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <img src={jade} alt="jade" />
          </div>
          <h4>Jade Contouring Magic</h4>
          <p>
            Define and contour with the healing touch of jade, known for its
            abilities to enhance skin elasticity and sculpt your features.
          </p>
        </div>
        <Link to="/treatments" className="btn">
          <span>Explore All Our Treatments</span>
          <ArrowIcon className="svg-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
