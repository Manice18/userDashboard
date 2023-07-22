import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["20", "", "25", "", "30", "", "35", "", "40", "", "60", "", "65"],
            // [20, 25, 30, 35, 40, 60, 65],
            datasets: [
                {
                    label: 'Employee: K 52,500',
                    data: [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 110, 119],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#4b35f8',
                },
                {
                    label: 'Employer: K 73,500',
                    data: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 100],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#0c04a4',
                },

                {
                    label: 'Total Interest: K 244,313',
                    data: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#84a9fb',
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true
                    },
                },
            },
            maintainAspectRatio: false,
            responsive: true,
            barThickness: 20,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    },
                },
                y: {
                    stacked: true,
                    grid: {
                        color: "#adacb5"
                    },
                    border: {
                        dash: [2, 8],
                    },
                    ticks: {
                        callback: function (value) {
                            return '$' + value;
                        },
                        font: {
                            weight: "bold"
                        },
                        stepSize: 100
                    },
                    min: 0,
                    max: 300
                },
            }
        })
    }, [])

    return (
        <>
            <div className='w-full relative lg:h-[40vh] sm:h-[60vh] md:h-[50vh]  m-auto md:p-4 sm:pt-4 rounded-lg bg-white'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    );
};

export default BarChart;