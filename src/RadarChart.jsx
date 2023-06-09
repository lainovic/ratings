import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
  // Data for the radar chart
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5, 7, 3, 9, 6], // Replace with your actual data values
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the radar chart
  const options = {
    scale: {
      ticks: { beginAtZero: true, max: 10 },
    },
  };

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
