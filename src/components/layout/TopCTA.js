import React from 'react';
import { Link } from 'react-router-dom';

const TopCTA = () => {
  return (
    <div className="topCTA">
      <div className="navbar-container">
        <ul className="ul-row">
          <li>X</li>
          <li>972-353-4623</li>
          <li>X</li>
          <li>8700 E Pinnacle Peak Rd. Suite 101 Scottsdale AZ</li>
        </ul>
        <ul className="ul-row">
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Instagram</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopCTA;
