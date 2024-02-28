import React from 'react';
import { Grid } from '@mui/material';
import MainSearch from 'components/main_search_header_bar/MainSearch';
import StockTransferWareHouse from './StockTransferWareHouse';
import CreateStockTransferCategory from './CreateStockTransferCategory';
import CreateStockTransferSubCategory from './CreateStockTranferSubCategory';

export default function CreateStockTransferMainSearch() {
  return (
    <Grid item xs={12} width={'100%'}>
    <MainSearch
      height={'auto'}
      content={
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start' }}>
          <StockTransferWareHouse/>
          <CreateStockTransferCategory/>
          <CreateStockTransferSubCategory/>
        </div>
      }
    />
  </Grid>
  )
}
