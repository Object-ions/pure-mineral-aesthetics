import { Link } from 'react-router-dom';

const SecondInformative = () => {
  return (
    <div className="second-informative">
      <div className="second-container">
        <div className="second-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            efficitur, massa ultricies aliquet iaculis, ante leo tempor lorem,
            eget euismod arcu risus vitae justo. Donec et mauris ex. Mauris
            rhoncus dictum faucibus. Vivamus at metus rutrum, blandit velit eu,
            porttitor urna. Donec at mollis velit. Aliquam commodo vestibulum
            massa, nec tempus lacus lacinia in. Nullam in eros et tortor tempus
            aliquet et a elit.
          </p>
          <Link to={'/'} className="btn">
            Learn More About Our Treatments
          </Link>
        </div>
        <div className="second-image-wrapper">
          <img
            src="http://zahavmedspa.com/wp-content/uploads/2023/05/enecta-cannabis-extracts-80wCkpt-IKE-unsplash-1-scaled.jpg"
            alt="skincare"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondInformative;
