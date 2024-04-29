import bgImage from '../assets/website-images/bg-section.jpg';
import blackStone from '../assets/website-images/black-caviar.png';
const Informative = () => {
  return (
    <div className="informative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="informative-container">
        <div className="informative-image">
          <div className="image-wrapper">
            <img src={blackStone} alt="skincare" />
          </div>
        </div>

        <div className="informative-text">
          <h3>Nature Meets Innovation</h3>
          <p>
            At Pure Mineral Aesthetics, we blend the purity of natural minerals
            with the latest skincare innovations. Our treatments are a testament
            to our commitment to both quality and sustainability.
          </p>
          <p>
            Dedicated to providing you with a serene environment, our
            aestheticians use only the finest, ethically-sourced minerals to
            ensure your skin receives the care it deserves.
          </p>
          <p>
            Elevate your beauty routine with a holistic approach that nurtures
            your skin and soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Informative;
