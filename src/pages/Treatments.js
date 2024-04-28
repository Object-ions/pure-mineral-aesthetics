import { Link } from 'react-router-dom';
import treatmentsData from '../data/treatmentsData.json';
import bgGrey from '../assets/website-images/bg-images/bg-grey.jpg';

import img1 from '../assets/website-images/treatments/1.png';
import img2 from '../assets/website-images/treatments/2.png';
import img3 from '../assets/website-images/treatments/3.png';
import img4 from '../assets/website-images/treatments/4.png';
import img5 from '../assets/website-images/treatments/5.png';
import img6 from '../assets/website-images/treatments/6.png';
import img7 from '../assets/website-images/treatments/7.png';

const images = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
};

const Treatments = () => {
  return (
    <div className="treatments">
      <h2>Our Treatments</h2>
      <div className="treatments-container">
        {treatmentsData.map(({ name, id, description, price }) => (
          <div
            key={id}
            className="treatments-card"
            style={{ background: `url(${bgGrey})` }}
          >
            <div
              className="treatment-image"
              style={{ background: `url(${images[id]})` }}
            ></div>
            <div className="treatment-content">
              <h3>{name}</h3>
              <p>{description}</p>
              <p>${price}</p>

              <Link to="/" className="btn">
                Book This Treatment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
