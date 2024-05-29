import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you want to use from Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);
const LineChart = ({ filter }) => {
  const data = {
    labels: ['01/05','02/05','03/05','04/05','05/05','06/05','07/05','08/05','09/05','10/05','11/05','12/05','13/05','14/05','15/05','16/05','16/05','18/05','19/05','20/05','21/05','22/05','23/05','24/05','25/05','26/05','27/05','28/05','29/05','30/05'],
    datasets: [
      {
        label: 'ລາຄາຂາຍ',
        data: [65, 59, 80, 81, 56, 55, 40,70,40,90,20,80],
        fill: false,
        borderColor: 'rgb(255,140,0)',
        tension: 0.1,
      },
    ],
  }

  // Define options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return <Line data={data} options={options}  />;
  
};


const LineChartBuy = () => {
    // Define the data for the chart
    const data = {
      labels: ['12','ເດືອນ2', 'ເດືອນ3','ເດືອນ4','ເດືອນ5','ເດືອນ6','ເດືອນ7','ເດືອນ1','ເດືອນ8','ເດືອນ9','ເດືອນ10','ເດືອນ 11','ເດືອນ 12',],
      datasets: [
        {
          label: 'ລາຄາຊື້',
          data: [65, 59, 80, 81, 56, 55, 40,70],
          fill: false,
          borderColor: 'green',
          tension: 0.1,
        },
      ],
    };
  
    // Define options for the chart
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
       
      },
    };
    return (
          <Line data={data} options={options} />
      );
  
  };
  export { LineChart, LineChartBuy };
