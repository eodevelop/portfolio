import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
      <header className="header fixed-top transparent">
        <nav>
          <Link to="/"> Home </Link>
        </nav>
      </header>
  );
};

export default Header;
