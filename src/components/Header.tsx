import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">홈</Link>
        {/* 다른 링크 추가 가능 */}
      </nav>
    </header>
  );
};

export default Header;