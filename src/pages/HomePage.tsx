import React from 'react';
import './HomePage.scss';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <h1>환영합니다!</h1>
    </div>
  );
};

export default HomePage;