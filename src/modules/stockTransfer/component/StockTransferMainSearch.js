import MainSearch from 'components/main_search_header_bar/MainSearch';
import React from 'react';
import { Grid } from '@mui/material';
import TimeDropDown from './TimeDropDown';

// import OrderStatusDropdown from './OrderStatusDropdown';

const StockTransferMainSearch = () => {
  return (
    <Grid item xs={12} width={'100%'}>
      <MainSearch
        height={'auto'}
        content={
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start' }}>
            {/* <TimeDropDown/> */}
          </div>
        }
      />
    </Grid>
  );
};

export default StockTransferMainSearch;
