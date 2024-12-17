import React, { useRef } from 'react';
import './HomePage.scss';
import Header from '../components/Header';
import { motion, useScroll, useTransform } from 'framer-motion';

const HomePage: React.FC = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
      <div className="home-page" ref={ref}>
        <Header/>
        <motion.div
            className="parallax-container"
            style={{
              y: backgroundY
            }}
        >
          <motion.div
              className="hero-content"
              style={{
                y: textY
              }}
          >
            <h1>웹 개발자 포트폴리오</h1>
            <p>혁신적인 디자인, 창의적인 솔루션</p>

            <div className="scroll-indicators">
              <div className="scroll-down">
                <span>Scroll Down</span>
                <div className="arrow"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <section className="content-section">
          <div className="section-content">
            <h2>내 프로젝트</h2>
            <div className="project-grid">
              {/* 프로젝트 카드들 */}
            </div>
          </div>
        </section>
      </div>
  );
};

export default HomePage;
