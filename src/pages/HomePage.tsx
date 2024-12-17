import React, { useState } from 'react';
import './HomePage.scss';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div className="home-page">
        <Header/>
        <main className="content">
          <div
              className="hero-section"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >
            <h1>웹 개발자 강민재</h1>
            <p>현재 기본 틀 제작중 입니다.</p>

            {isHovered && (
                <div className="hover-details">
                  <p>기술 스택: </p>
                </div>
            )}
          </div>

          <div className="cta-section">
            <button className="primary-btn">
              프로젝트 보기
            </button>
            <button className="secondary-btn">
              연락하기
            </button>
          </div>
        </main>
      </div>
  );
};

export default HomePage;
