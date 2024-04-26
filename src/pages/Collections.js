import React from 'react';
import { Link } from 'react-router-dom';
import caviar from '../assets/website-images/bg-images/caviar.jpg';
import gold from '../assets/website-images/bg-images/gold.jpg';
import platinum from '../assets/website-images/bg-images/platinum.jpg';

const Collections = () => {
  return (
    <div className="collections">
      <h2>Our Skincare Collections</h2>
      <div className="collections-container">
        <Link to="/collection/caviar">
          <div
            className="collections-card"
            style={{ background: `url(${caviar})` }}
          >
            <div className="collections-text caviar">
              <h3>Caviar Collection</h3>
              <p>PHENOMENAL LIFTING AND FIRMING</p>
              <p>
                The range of Skin Caviar's lifting and firming creams and serums
                helps restore the appearance of the face skin elasticity and
                tone. Find smoothed and refined skin texture with daily
                application of Skin Caviar rituals.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/collection/pure-gold">
          <div
            className="collections-card"
            style={{ background: `url(${gold})` }}
          >
            <div className="collections-text">
              <h3>Pure Gold Collection</h3>
              <p>RADIANCE RE-IGNITED</p>
              <p>
                Enhances the appearance of radiance in the skin immediately and
                over time. Helps revitalise the skin's appearance while
                promoting the feeling of increased plumpness from intense
                hydration.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/collection/platinum-rare">
          <div
            className="collections-card"
            style={{ background: `url(${platinum})` }}
          >
            <div className="collections-text">
              <h3>Platinum Rare Collection</h3>
              <p>The most scientifically advanced skincare</p>
              <p>
                Based on La Prairie’s Science of Haute-Rejuvenation, the
                Platinum Rare Collection offers the highest performance to
                address all signs of ageing. It provides a noticeable
                line-smoothing effect and helps support the underlying structure
                of the skin.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Collections;
