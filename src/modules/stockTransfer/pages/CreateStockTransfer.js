import React, { useState } from 'react';
import { Box, Stack, Typography, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import SubHeader from 'components/subHeader/SubHeader';
import { CreateStockTransferStateProvider, useCreateStockTransferState } from 'context/CreateStockTransferProvider';
import CreateStockTransferMainSearch from '../component/CreateStockTransferMainSearch';
import CreateStockTransferTable from '../component/CreateStockTransferTable';
import CreateStockTransferSelectedTable from '../component/CreateStockTransferSelectedTable';



const ActiveComponents = () => {
  let { currentTheme,setOpen,open,navigate } = useCreateStockTransferState(); 
  return (
    <>
    <Grid style={{ display: 'flex', flexDirection: 'row' }}>
      <SubHeader
        isRightEnable={false}
        isLeftEnable={true}
        title={'Place Order'}
        leftComponent={
          <Button
            size="small"
            variant="contained"
            style={{ borderRadius: 12, width: '40px', color: '#fff', backgroundColor: '#4CB748', minWidth: '40px', marginRight: '10px' }}
            onClick={() => navigate('/dashboard/StockTransfer')}
          >
            <ArrowBackIcon />
          </Button>
        }
      />
    </Grid>
    <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '15px' }}>
      <Grid item md={9}>
        <CreateStockTransferMainSearch/>
        <Grid item>
          <Typography variant="h5" style={{ padding: 2, marginTop: 10, marginBottom: 10, color: currentTheme.textColor }}>
            All Products
          </Typography>
          <CreateStockTransferTable/>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="h5" style={{ padding: 2, marginTop: 0 }}>
          Your Cart
        </Typography>
        <CreateStockTransferSelectedTable borderRadius={'20px'} />
      </Grid>
    </Grid>
  </>

  );
}


export default function CreateStockTransfer() {
  return (
    <CreateStockTransferStateProvider>
      <ActiveComponents/>
    </CreateStockTransferStateProvider>
  );

}


