import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h3>Our Services</h3>
      <div className="service-card">
        <div className="image-wrapper">{/* <img src="" alt="" /> */}</div>
        <h4>Signature Facial</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          efficitur, massa ultricies aliquet iaculis, ante leo tempor lorem,
          eget euismod arcu risus vitae justo.
        </p>
      </div>
      <div className="service-card">
        <div className="image-wrapper">{/* <img src="" alt="" /> */}</div>
        <h4>Signature Facial</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          efficitur, massa ultricies aliquet iaculis, ante leo tempor lorem,
          eget euismod arcu risus vitae justo.
        </p>
      </div>
      <div className="service-card">
        <div className="image-wrapper">{/* <img src="" alt="" /> */}</div>
        <h4>Signature Facial</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          efficitur, massa ultricies aliquet iaculis, ante leo tempor lorem,
          eget euismod arcu risus vitae justo.
        </p>
      </div>
      <div className="service-card">
        <div className="image-wrapper">{/* <img src="" alt="" /> */}</div>
        <h4>Signature Facial</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          efficitur, massa ultricies aliquet iaculis, ante leo tempor lorem,
          eget euismod arcu risus vitae justo.
        </p>
      </div>
      <Link to={'/'} className="btn">
        Book Your Appointment Now
      </Link>
    </div>
  );
};

export default ServicesSection;
