import React from "react";
import Board from "./components/Board";
import ExchangeRateCalculator from "./components/ExchangeRateCalculator";
import Header from "./headerComponent/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <ExchangeRateCalculator />
      <Main />

    </div>
  );
}

export default App;
