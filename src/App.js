import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Board from "./components/Board";
import ExchangeRateCalculator from "./components/ExchangeRateCalculator";
import Header from "./headerComponent/Header";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Header />

      {/* 네비게이션 바 */}
      <nav className="sticky top-0 bg-gray-900 text-white shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center py-3 px-4">
          {/* 로고 */}
          <h1 className="text-lg font-bold">🚀 My App</h1>

          {/* 네비게이션 링크 */}
          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`
              }
            >
              홈
            </NavLink>

            <NavLink
              to="/exchange"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? "bg-green-500" : "hover:bg-gray-700"}`
              }
            >
              <div></div>
              환율 계산기
            </NavLink>

            <NavLink
              to="/board"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? "bg-red-500" : "hover:bg-gray-700"}`
              }
            >
              <div></div>
              게시판
            </NavLink>
          </div>
        </div>
      </nav>

      {/* 페이지 라우트 */}
      <div className="max-w-4xl mx-auto py-6">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/exchange" element={<ExchangeRateCalculator />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
