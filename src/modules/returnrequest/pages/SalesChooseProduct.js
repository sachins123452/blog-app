import React, { useState } from 'react';
import { Grid, Button,Typography } from '@mui/material';
import { useTheme } from 'components/Theme/ThemeProvider';
import { SalesChooseProductProvider, useSalesChooseProductState } from 'context/SalesChooseProductProvider';
import SubHeader from 'components/subHeader/SubHeader';
import SalesChooseProductOrder from '../components/SalesChooseProductOrder';

import SalesSelectProduct from '../components/SalesSelectProduct';
import SalesChooseProductCard from '../components/SalesChooseProductCard';
const SalesChooseProduct = () => {
  
  const SalesChooseProductComponents = () => {
    const {currentTheme}=useSalesChooseProductState()
    return (
      <Grid height={'100vh'}>
        <SubHeader title="Choose Products" isRightEnable={false} isLeftEnable={true} />
        <SalesChooseProductCard/>
        <Grid container spacing={2}  style={{ display: 'flex', flexDirection: 'row', marginTop: '15px',justifyContent: 'space-between',  }}>
          <Grid item md={8.5}>
          {/* <Typography variant="h5" style={{ padding: 2, marginTop: 30, color: currentTheme.textColor }}>
         All Products
       </Typography> */}
            <SalesChooseProductOrder />
          </Grid>
          <Grid item md={3.5}>
            <SalesSelectProduct/>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return (
    
    <SalesChooseProductProvider>
      <SalesChooseProductComponents />
    </SalesChooseProductProvider>
  );
};
export default SalesChooseProduct;
