import React from 'react';
import { Link } from 'react-router-dom';
import tricktionaryLogo from '../../../assets/TricktionaryLogo.png';

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>
          <Link to="/">
            <img className="trick-logo" src={tricktionaryLogo}></img>
          </Link>
        </h1>
        <nav>
          <a href="http://tricktionary.monster">Play Now!</a>
          <a href="/about">The Team</a>
          {/* <a href="/products">Products</a> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
