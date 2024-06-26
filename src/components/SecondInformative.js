import { Link } from 'react-router-dom';
import plainSkincare from '../assets/website-images/second-informative.png';

const SecondInformative = () => {
  return (
    <div className="second-informative">
      <div className="second-container">
        <div className="second-text">
          <h2>Delve Deeper into Skincare</h2>
          <p>
            Our skincare collection is curated to include mineral-rich formulas
            that protect and enhance your skin. Each product is a blend of
            nature's best ingredients, ensuring you always put your purest face
            forward.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem non
            voluptate temporibus nam minima modi molestiae fugit natus, nesciunt
            ipsam quasi quisquam earum magni. Est magni voluptatibus sequi
            fugiat illum.
          </p>
          <Link to={'/collections'} className="btn">
            Check Out Our Skincare Collection
          </Link>
        </div>
        <div className="second-image-wrapper">
          <img src={plainSkincare} alt="skincare" />
        </div>
      </div>
    </div>
  );
};

export default SecondInformative;
