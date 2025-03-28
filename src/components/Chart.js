// DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// chart.js에서 사용하고자 하는 요소(ArcElement 등) 등록
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DonutChart = () => {
  // 임의 데이터 (예: 각 상태별 과제 수)
  const data = {
    labels: ['Not Started', 'In Progress', 'Completed', 'On Hold'],
    datasets: [
      {
        label: 'Task Status',
        data: [5, 8, 3, 2],  // 임의 값
        backgroundColor: [
          '#FF6384', // 빨강
          '#36A2EB', // 파랑
          '#FFCE56', // 노랑
          '#4BC0C0'  // 청록
        ],
        hoverOffset: 4,
      },
    ],
  };

  // 차트 옵션
  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: '50%', // 도넛 형태를 위해 중앙을 잘라낼 비율
  };

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
