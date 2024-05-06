import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data || chartData} />
    </div>
  );
};

export default PieChart;
