import ReusableCard from 'components/cards/ResuableCard';
import React, { useState } from 'react';
import { Box, Stack, Typography, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddInventoryMainSearch from '../components/AddInventoryMainSearch';
import AddInventoryTable from '../components/AddInventoryTable';
import SubHeader from 'components/subHeader/SubHeader';
import AddInventorySelectedProductTable from '../components/AddInventorySelectedProductTable';
import { AddInventoryStateProvider, useAddInventoryState } from 'context/AddInventoryProvider';
import AddInventoryCardContent from '../components/AddInventoryCardContent';
import {useNavigate} from 'react-router-dom'
import WarehouseShippingModal from 'components/modals/contentmodal/WarehouseShippingModal';
import { store } from 'store/index';
import { addWarehouse } from 'store/reducers/placeOrder';

const ActiveComponents = () => {

  let { currentTheme,isOpen,setIsOpen,getwareHouseData,selectedWarehouseId, setSelectedWarehouseId } = useAddInventoryState(); 
  const navigate=useNavigate()

  const handleWarehouseModal =(selectedData) =>{
    console.log("selectedData =====>>",selectedData)
    setSelectedWarehouseId(selectedData?.WarehousesId)
      store.dispatch(addWarehouse(selectedData))
      setIsOpen(!isOpen)
  }

  return (
    <>
    <Grid style={{ display: 'flex', flexDirection: 'row' }}>
      <SubHeader
        isRightEnable={false}
        isLeftEnable={true}
        title={'Choose Products'}
        leftComponent={
          <Button
            size="small"
            variant="contained"
            style={{ borderRadius: 12, width: '40px', color: '#fff', backgroundColor: '#4CB748', minWidth: '40px', marginRight: '10px' }}
            onClick={() => navigate('/dashboard/Inventory')}
          >
            <ArrowBackIcon />
          </Button>
        }
      />
    </Grid>
    <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '15px' }}>
      <Grid item md={9}>
        <AddInventoryMainSearch />
        <Grid item>
          <Typography variant="h5" style={{ padding: 2, marginTop: 10, marginBottom: 10, color: currentTheme.textColor }}>
            All Products
          </Typography>
          <AddInventoryTable />
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
        <AddInventoryCardContent/>
        <Typography variant="h5" style={{ padding: 2, marginTop: 0 }}>
          Your Cart
        </Typography>
        <AddInventorySelectedProductTable borderRadius={'20px'} />
      </Grid>
      {<WarehouseShippingModal 
      isOpen={isOpen} setIsOpen={setIsOpen} 
      data={getwareHouseData?.data?.data}
      selectedValue={selectedWarehouseId}
      setSelectedValue={setSelectedWarehouseId}
     onPress={handleWarehouseModal}
     
     />} 
    </Grid>
  </>

  );
}


export default function AddInventory() {
  return (
    <AddInventoryStateProvider>
      <ActiveComponents/>
    </AddInventoryStateProvider>
  );

}


