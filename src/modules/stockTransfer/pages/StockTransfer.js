import React, { useState } from 'react';
// material-ui
import { Button, Grid, Typography } from '@mui/material';
// assets
import { useNavigate } from 'react-router-dom';
import MainSearch from 'components/main_search_header_bar/MainSearch';
import DropDown from 'components/dropdown/DropDown';
import '../styles/StockTransfer.css';
import { useTheme } from 'components/Theme/ThemeProvider';
import SubHeader from 'components/subHeader/SubHeader';
import StockTransferMainSearch from '../component/StockTransferMainSearch';
import StockTransferTable from '../component/StockTransferTable';
import { StockTransferStateProvider, useStockTransferState } from 'context/StockTransferProvider';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const ActiveComponents = () => {
  let { currentTheme, navigate } = useStockTransferState();

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2.75}
      alignItems="center"
      justifyContent="space-between"
      style={{ backgroundColor: currentTheme.cardColor }}
    >
      <SubHeader
        title="Stock Transfer"
        isRightEnable={true}
        rightComponent={
          <Button
            size="small"
            className="plusnewbtn_Inventory"
            onClick={() => navigate('/dashboard/CreateStockTransfer')}
            variant="contained"
          >
            + Create new
          </Button>
        }
      />
      <StockTransferMainSearch />
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      <StockTransferTable />
    </Grid>
  );
};
const StockTransfer = () => {
  return (
    <StockTransferStateProvider>
      <ActiveComponents/>
    </StockTransferStateProvider>
  );
};

export default StockTransfer;
