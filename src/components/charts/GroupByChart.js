// import { useEffect, useState } from 'react';


import ReactApexChart from 'react-apexcharts';
import { useTheme } from 'components/Theme/ThemeProvider';
// chart options


// ==============================|| MONTHLY BAR CHART ||============================== //

const GroupedBarChart = ({data}) => {
    const {currentTheme}=useTheme()
    const options = {
        chart: {
            type: 'bar',
            height: 365, 
            toolbar: {
                show: false
            },
            width:'50%',
        },

        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                columnWidth: '45%',


                colors: {
                    ranges: [
                        {
                            from: 0,
                            to: 25,
                            color: '#0174bf' // Specify your color for the range
                        },
                        {
                            from: 51,
                            to: 100,
                            color: '#4cb748' // Specify another color for a different range
                        },
                        {
                            from: 25,
                            to: 50,
                            color: '#eb5769' // Specify another color for a different range
                        },
                        // Add more ranges as needed
                    ]
                }
            },
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            show: true,
            width: 3,
            colors: ['transparent'],
            
        },
        xaxis: {
            categories: data['categories'],
            labels: {
                style: {

                    fontFamily: ['GilroyBold'],
                    fontSize: [13],
                    colors: currentTheme.textColor
                },


            },
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: false

            },

        },

        yaxis: {
            show: true,
            labels: {
                style: {

                    fontFamily: ['GilroyBold'],
                    fontSize: [13],
                    colors: currentTheme.textColor
                },


            },
        },
        grid: {
            show: true
        },


    };

    return (
        <ReactApexChart
            options={options}
            series={data?.coloums}
            type="bar"
            height={350}
            width="100%"
        />
    );
};

export default GroupedBarChart;

GroupedBarChart.defaultProps={
    data:{ categories: ['Category 1', 'Category 2', 'Category 3'],
    coloums:[
        {
            name: '',
            color: '',
            data: [14, 24, 19],
        },
        {
            name: '',
            color: '',
            data: [54, 52, 51],
        },
        {
            name: '',
            color: '',
            data:  [32, 40, 33],
        },
    ],

}

}
