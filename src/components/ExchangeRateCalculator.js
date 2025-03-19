import React, { useState, useEffect } from "react";

const ExchangeRateCalculator = () => {
  const [currencies, setCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("KRW");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [baseSearchTerm, setBaseSearchTerm] = useState("");
  const [targetSearchTerm, setTargetSearchTerm] = useState("");

  useEffect(() => {
    // 🔹 환율 정보 가져오기
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        const data = await response.json();
        setCurrencies(Object.keys(data.rates));
        setExchangeRate(data.rates[targetCurrency]);
      } catch (error) {
        console.error("환율 정보를 불러오지 못했습니다.", error);
      }
    };
    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  // 🔄 통화 스위칭 (기준 ↔ 변환)
  const switchCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  // ✅ "확인" 버튼 클릭 시 변환 수행
  const calculateConversion = () => {
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  };

  // 🔍 기준 통화 검색 리스트 반환
  const filteredBaseCurrencies = currencies.filter((currency) =>
    currency.toLowerCase().includes(baseSearchTerm.toLowerCase())
  );

  // 🔍 변환 통화 검색 리스트 반환
  const filteredTargetCurrencies = currencies.filter((currency) =>
    currency.toLowerCase().includes(targetSearchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">💱 환율 계산기</h2>

      {/* 🔢 입력 필드 */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">금액</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* 🌍 통화 선택 & 검색 */}
      <div className="grid grid-cols-3 gap-4 items-center">
        {/* 기준 통화 */}
        <div>
          <label className="block font-semibold mb-2">기준 통화</label>
          <input
            type="text"
            placeholder="검색 (예: USD, EUR)"
            value={baseSearchTerm}
            onChange={(e) => setBaseSearchTerm(e.target.value)}
            className="w-full border p-2 rounded mb-2"
          />
          <select
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {filteredBaseCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* 🔄 통화 스위칭 버튼 */}
        <button
          onClick={switchCurrencies}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg self-end"
        >
          🔄
        </button>

        {/* 변환 통화 */}
        <div>
          <label className="block font-semibold mb-2">변환 통화</label>
          <input
            type="text"
            placeholder="검색 (예: KRW, JPY)"
            value={targetSearchTerm}
            onChange={(e) => setTargetSearchTerm(e.target.value)}
            className="w-full border p-2 rounded mb-2"
          />
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {filteredTargetCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ✅ "확인" 버튼 */}
      <button
        onClick={calculateConversion}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded shadow-lg"
      >
        확인
      </button>

      {/* 🔢 환산 결과 */}
      <div className="mt-4 p-3 bg-gray-100 rounded-lg text-center">
        <h3 className="text-lg font-semibold">환산 결과</h3>
        <p className="text-xl font-bold">
          {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
        </p>
      </div>
    </div>
  );
};

export default ExchangeRateCalculator;
