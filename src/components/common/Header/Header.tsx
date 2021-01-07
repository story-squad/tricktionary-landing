import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <h1>
        <Link to="/">Story Squad</Link>
      </h1>
      <nav></nav>
    </div>
  );
};

export default Header;
