import { useState } from "react";
import { clsx } from "clsx";

const rawData = [
  {
    service: "서비스A",
    serviceGroup: "그룹1",
    contract: "계약001",
    indicator: "IND10100",
    year: 2025,
    month: 3,
    quarter: "1분기",
    half: "상반기",
    value: "94.2%",
  },
  {
    service: "서비스A",
    serviceGroup: "그룹1",
    contract: "계약001",
    indicator: "IND10110",
    year: 2025,
    month: 3,
    quarter: "1분기",
    half: "상반기",
    value: "97.8%",
  },
  {
    service: "서비스B",
    serviceGroup: "그룹2",
    contract: "계약002",
    indicator: "IND20220",
    year: 2025,
    month: 3,
    quarter: "1분기",
    half: "상반기",
    value: "89.0%",
  },
  {
    service: "서비스B",
    serviceGroup: "그룹2",
    contract: "계약003",
    indicator: "IND20225",
    year: 2025,
    month: 2,
    quarter: "1분기",
    half: "상반기",
    value: "91.3%",
  },
];

function pivotData(data) {
  const pivotMap = new Map();

  data.forEach((item) => {
    const key = `${item.service}|${item.serviceGroup}|${item.contract}|${item.indicator}`;
    if (!pivotMap.has(key)) {
      pivotMap.set(key, {
        service: item.service,
        serviceGroup: item.serviceGroup,
        contract: item.contract,
        indicator: item.indicator,
        year: item.year,
        month_1: "",
        month_2: "",
        month_3: "",
        quarter_1: "",
        half_1: "",
      });
    }
    const record = pivotMap.get(key);
    if (item.month === 1) record.month_1 = item.value;
    if (item.month === 2) record.month_2 = item.value;
    if (item.month === 3) record.month_3 = item.value;
    if (item.quarter === "1분기") record.quarter_1 = item.value;
    if (item.half === "상반기") record.half_1 = item.value;
  });

  return Array.from(pivotMap.values());
}

export default function SlmPivotTable() {
  const [data] = useState(pivotData(rawData));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">SLA 피벗 테이블</h2>
      <div className="overflow-auto border rounded-xl shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">서비스</th>
              <th className="p-2">서비스 그룹</th>
              <th className="p-2">계약</th>
              <th className="p-2">지표</th>
              <th className="p-2">1월</th>
              <th className="p-2">2월</th>
              <th className="p-2">3월</th>
              <th className="p-2">1분기</th>
              <th className="p-2">상반기</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 border-t">
                <td className="p-2">{row.service}</td>
                <td className="p-2">{row.serviceGroup}</td>
                <td className="p-2">{row.contract}</td>
                <td className="p-2">{row.indicator}</td>
                <td className="p-2">{row.month_1}</td>
                <td className="p-2">{row.month_2}</td>
                <td className="p-2">{row.month_3}</td>
                <td className="p-2">{row.quarter_1}</td>
                <td className="p-2">{row.half_1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
