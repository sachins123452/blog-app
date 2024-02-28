import React from 'react';
import styles from './OutletDetailGraphCss';
import DropDown from 'components/dropdown/DropDown';
import DataChart from 'components/charts/DataChart';
import { useTheme, useMediaQuery } from '../../../node_modules/@mui/material/index';

const OutletDetailGraph = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'));
  // const isLaptop = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'));

  const data = { categories: ['Jan 24', 'Dec 23', 'Nov 23', 'Oct 23', 'Sept 23'], data: ['250k', '125k', '520k', '180k', '500k'] };
  const rangesofColors = [
    {
      from: 200,
      to: 700,
      color: '#0174bf' // Specify your color for the range
    },
    {
      from: 0,
      to: 200,
      color: '#4cb748' // Specify another color for a different range
    }
  ];
  return (
    <div style={styles.container}>
      <div style={{ ...styles.incometextcont, flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
        {/* Income Heading */}
        <div>
          <text style={styles.incometext}>Income Chart</text>
          <text style={styles.totalincometext}>Total Income is ₹1,59,070</text>
        </div>

        {/* DropDown */}
        <div>
          <DropDown />
        </div>
      </div>
      {/* Income Graph */}
      <DataChart data={data} rangesofColors={rangesofColors} />
    </div>
  );
};

export default OutletDetailGraph;
