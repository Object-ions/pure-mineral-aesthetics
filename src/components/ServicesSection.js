import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/svg/arrow_forward.svg';
import img1 from '../assets/website-images/treatments/1.png';
import img2 from '../assets/website-images/treatments/2.png';
import img3 from '../assets/website-images/treatments/3.png';
import img4 from '../assets/website-images/treatments/4.png';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        <h3>Our Services</h3>
        <div className="service-card">
          <div className="image-wrapper">
            <img src={img1} alt="facial" />
          </div>
          <h4>Oxygen Facial</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            similique veniam eligendi minima natus eveniet ipsa non saepe, sed
            nisi.
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <img src={img2} alt="facial" />
          </div>
          <h4>HydraFacial</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            perferendis ea reiciendis rem mollitia accusantium fugiat eius
            corrupti eligendi aspernatur.
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <img src={img3} alt="facial" />
          </div>
          <h4>Chemical Peel</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deserunt
            nostrum obcaecati nihil consequuntur magnam quidem assumenda animi
            ipsum.
          </p>
        </div>
        <div className="service-card">
          <div className="image-wrapper">
            <img src={img4} alt="facial" />
          </div>
          <h4>LED Light Therapy</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            blanditiis a enim recusandae, tempora aperiam itaque nisi provident
            iste debitis! Non, quam!
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
