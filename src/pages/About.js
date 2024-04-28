import { Link } from 'react-router-dom';
import aboutImage from '../assets/website-images/about.jpg';
const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-title">
          <h2>
            At Pure Mineral Aesthetics, we believe in the power of natural
            beauty
          </h2>
          <p>
            Our treatments are designed to harness the therapeutic benefits of
            mineral-rich gemstones, combined with advanced aesthetic techniques
            to rejuvenate your skin and spirit.
          </p>
        </div>
        <div
          className="about-image"
          style={{ background: `url(${aboutImage})` }}
        ></div>
      </div>

      <div className="about-text">
        <h2>Lorem, ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
          reiciendis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          placeat rem neque quisquam qui architecto sint necessitatibus
          doloribus voluptatibus omnis magnam vero expedita nobis provident
          iusto repellat, tenetur, alias facere deleniti recusandae velit.
          Soluta voluptatibus voluptatum iste dolores, fugiat, incidunt quos
          debitis quae adipisci consectetur aliquam tempora consequatur facilis?
          Sit?
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          placeat, veritatis dolor voluptatem expedita vel excepturi, magnam
          accusamus facere maiores pariatur ea consequatur voluptatibus
          perspiciatis cum deserunt! Voluptas, doloribus corporis?
        </p>
        <h3 className="align-right">And that's why we are here!</h3>
        <Link to="/contact-us" className="btn">
          Schedule Your Appointment
        </Link>
      </div>
    </div>
  );
};

export default About;
