import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/x-twitter.svg';
import { ReactComponent as LocationIcon } from '../../assets/svg/location.svg';
import { ReactComponent as CallIcon } from '../../assets/svg/call.svg';

const TopCTA = () => {
  return (
    <div className="topCTA">
      <div className="navbar-container">
        <ul className="ul-row">
          <li>
            <CallIcon className="svg-icon" />
          </li>
          <li>972-353-4623</li>
          <li>
            <LocationIcon className="svg-icon" />
          </li>
          <li>4023 18th St, Ste B, San-Francisco, Ca 94114</li>
        </ul>
        <ul className="ul-row">
          <li>
            <Link to="/">
              <FacebookIcon className="svg-icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <InstagramIcon className="svg-icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TwitterIcon className="svg-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopCTA;
