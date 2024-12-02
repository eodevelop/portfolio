import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 다른 라우트를 추가할 수 있습니다 */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
