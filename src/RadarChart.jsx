import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Teamwork', 'Innovation', 'Efficiency', 'Results'],
  datasets: [
    {
      label: 'Ratings',
      data: [2, 7, 3, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const RadarChart = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarChart;
