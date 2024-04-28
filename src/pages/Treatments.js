import { Link } from 'react-router-dom';
import treatmentsData from '../data/treatmentsData.json';
import bgGrey from '../assets/website-images/bg-images/bg-grey.jpg';

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
