import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Test from "./components/Test";
import Board from "./components/Board";
import ExchangeRateCalculator from "./components/ExchangeRateCalculator";
import Header from "./headerComponent/Header";
import Main from "./components/Main";
import Chart from "./components/Chart";
import Slm from "./components/Slm"
import Pivot from "./components/Pivot";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-center gap-4">
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
      >
        홈
      </button>
      <button
        onClick={() => navigate("/exchange")}
        className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded transition"
      >
        환율 계산기
      </button>
      <button
        onClick={() => navigate("/board")}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition"
      >
        게시판
      </button>
      <button
        onClick={() => navigate("/test")}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition"
      >
        테스트
      </button>

      <button
        onClick={() => navigate("/chart")}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition"
      >
        차트
      </button>
      <button
        onClick={() => navigate("/slm")}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition"
      >
        SLM
      </button>

      <button
        onClick={() => navigate("/pivot")}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition"
      >
        피벗
      </button>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Navigation /> {/* 🔹 네비게이션 추가 */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/exchange" element={<ExchangeRateCalculator />} />
        <Route path="/board" element={<Board />} />
        <Route path="/test" element={<Test />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/slm" element={<Slm />} />
        <Route path="/pivot" element={<Pivot />} />
      </Routes>
    </Router>
  );
}

export default App;
