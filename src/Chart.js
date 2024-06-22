import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Chart.css';
import { CategoryScale } from 'chart.js';
import { Chart, BarElement, LinearScale } from 'chart.js';

Chart.register(BarElement, LinearScale);
ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const MyChart = () => {
    return (
        <div className="chart-container">
            <h3>Chart</h3>
            <Bar data={data} />
        </div>
    );
};

export default MyChart;
