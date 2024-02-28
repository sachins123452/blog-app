import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from 'components/Theme/ThemeProvider';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options

// ==============================|| MONTHLY BAR CHART ||============================== //

const DataChart = ({ data, rangesofColors }) => {
  const { currentTheme } = useTheme();
  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 365,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        borderRadius: 4,
        colors: {
          ranges: rangesofColors
        }
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: data['categories'],
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: true
    },
    grid: {
      show: true
    },
    markers: {
      colors: ['#F44336', '#E91E63', '#9C27B0']
    }
  };

  //   const { primary, secondary } = theme.palette.text;

  // alert (JSON.stringify(theme?.palette?.info?.light))
  const [series] = useState([
    {
      data: data['data']
    }
  ]);

  const [options, setOptions] = useState(barChartOptions);
  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,

      xaxis: {
        labels: {
          style: {
            fontFamily: ['GilroyBold'],
            fontSize: [13],
            colors: currentTheme.textColor
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontFamily: ['GilroyBold'],
            fontSize: [13],
            colors: currentTheme.textColor
          }
        }
      }
    }));
  }, [series]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={365} />
    </div>
  );
};

export default DataChart;

DataChart.defaultProps = {
  data: { categories: ['Complan', 'Sugar Free', 'Glucon D', 'Everyuth', 'Nycil', 'Nutralite'], data: ['90', '45', '65', '30', '75', '49'] },
  rangesofColors: [
    {
      from: 0,
      to: 50,
      color: '#0174bf' // Specify your color for the range
    },
    {
      from: 51,
      to: 100,
      color: '#4cb748' // Specify another color for a different range
    }
    // Add more ranges as needed
  ]
};
