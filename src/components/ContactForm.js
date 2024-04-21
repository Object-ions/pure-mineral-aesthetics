import { useLocation } from 'react-router-dom';
import MapComponent from './MapComponent';

const ContactForm = () => {
  const location = useLocation();

  // Leaflet configuration
  const center = [37.761222, -122.434559]; // Coordinates for the address
  const zoom = 17; // Zoom level
  const mapStyle = { height: '400px', width: '75%' }; // Style for the map

  const logo = '/images/mineral-logo.png';
  return (
    <div className="contact-form">
      <div className="contact-container">
        <div className="form-wrapper">
          <img src={logo} alt="logo" className="logo" />
          {location.pathname === '/contact-us' && (
            <div className="contact-us">
              <p>Via call, email or address</p>
              <p>hello@minerals.com</p>
              <p>Phone: 972-353-4623</p>
              <p>Address: 4023 18th St, Ste B, San Francisco, CA 94114</p>
            </div>
          )}
          <h2>Get in Touch</h2>
          <p>
            Ready to embark on a journey to pure, radiant skin? Contact us to
            schedule your consultation and take the first step towards a glowing
            complexion.
          </p>
          <form>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              aria-label="Full Name"
            />

            <input
              type="email"
              id="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />

            <input
              type="tel"
              id="phone-number"
              placeholder="Phone Number"
              aria-label="Phone Number"
            />

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>

        <br />
        <br />
        {location.pathname === '/contact-us' && (
          <MapComponent center={center} zoom={zoom} style={mapStyle} />
        )}
      </div>
    </div>
  );
};

export default ContactForm;
