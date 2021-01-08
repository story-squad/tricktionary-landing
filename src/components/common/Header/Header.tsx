import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>
          <Link to="/">Story Squad</Link>
        </h1>
        <nav>
          <a href="http://contest.storysquad.app">Play Now!</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
