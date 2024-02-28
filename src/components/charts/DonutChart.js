import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Grid } from '../../../node_modules/@mui/material/index';
 
const DonutChart = ({ labels, data, width, height, mainwidth }) => {
  const [chartData] = useState({
    series: data,
    options: {
      chart: {
        type: 'donut'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      labels: labels
    }
  });
 
  return (
    <Grid style={{ backgroundColor: '#fff', width: mainwidth, borderRadius: 5 }}>
      <ReactApexChart options={chartData.options} series={chartData.series} width={width} height={height} type="donut" />
    </Grid>
  );
};
 
export default DonutChart;
 
DonutChart.defaultProps = {
  labels: ['Planned Call ', 'Achieved Calls', 'Missed Calls', 'Zero billing outlets', 'Productive calls'],
  data: [44, 55, 41, 17, 15],
  width: '410px',
  height: '410px'
};
 
