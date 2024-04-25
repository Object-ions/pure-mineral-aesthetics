import { Link } from 'react-router-dom';
import treatmentsData from '../data/treatmentsData.json';

const Treatments = () => {
  return (
    <div className="treatments">
      <h2>Our Treatments</h2>
      <div className="treatments-container">
        {treatmentsData.map((treatment) => (
          <div key={treatment.id} className="treatments-card">
            <h3>{treatment.name}</h3>
            <p>{treatment.description}</p>
            <p className="treatment-price">${treatment.price}</p>
            <Link to="/" className="btn">
              Book This Treatment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
