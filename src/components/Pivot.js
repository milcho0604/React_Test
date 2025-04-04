import React from "react";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";

const pivotData = [
  { 계약: "계약001", 지표ID: "IND10100", 월: "1월", SLA: 94.2 },
  { 계약: "계약001", 지표ID: "IND10110", 월: "3월", SLA: 97.8 },
  { 계약: "계약002", 지표ID: "IND20220", 월: "3월", SLA: 89.0 },
  { 계약: "계약003", 지표ID: "IND20225", 월: "2월", SLA: 91.3 },
  { 계약: "계약004", 지표ID: "IND30300", 월: "3월", SLA: 96.1 },
  { 계약: "계약005", 지표ID: "IND30310", 월: "4월", SLA: 92.5 },
  { 계약: "계약006", 지표ID: "IND40400", 월: "5월", SLA: 90.2 },
];

export default function PivotInteractive() {
  const [state, setState] = React.useState({
    data: pivotData,
    rows: ["계약"],
    cols: ["월"],
    aggregatorName: "Average",
    vals: ["SLA"],
    rendererName: "Table",
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">📊 SLA 피벗 테이블</h2>
      <PivotTableUI
        data={pivotData}
        onChange={s => setState(s)}
        {...state}
        unusedOrientationCutoff={Infinity}
      />
    </div>
  );
}
