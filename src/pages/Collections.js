import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/collection/platinum-rare">Platinum Rare Collection</Link>
      <Link to="/collection/caviar">Caviar Collection</Link>
      <Link to="/collection/pure-gold">Pure Gold Collection</Link>
    </div>
  );
};

export default Collections;
