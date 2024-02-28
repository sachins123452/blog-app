import React, { useState } from 'react';

// material-ui
import { Button, Grid, Typography } from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';

// assets
import { InventoryStateProvider, useInventoryState } from 'context/InventoryProvider';
import SubHeader from 'components/subHeader/SubHeader';
import InventoryMainSearch from '../components/InventoryMainSearch';
import InventoryTable from '../components/InventoryTable';
import { dispatch } from 'store/index';
import { addWarehouse, getWarehouseId } from 'store/reducers/placeOrder';
import WarehouseShippingModal from 'components/modals/contentmodal/WarehouseShippingModal';
import { store } from 'store/index';

// sales report status

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const ActiveComponents = () => {
  let { currentTheme, setIsOpen, isOpen, navigate, getwareHouseData, setSelectedWarehouseId, selectedWarehouseId } = useInventoryState();

  const handleClickOnCreateReturnRequest = () => {
    if (getwareHouseData?.data?.data?.length > 1) {
      setIsOpen(!isOpen);
    } else {
      dispatch(addWarehouse(getwareHouseData?.data?.data[0]));
      navigate('/dashboard/AddInventory');
    }
  };

  const handleWarehouseModal = (selectedData) => {
    setSelectedWarehouseId(selectedData?.WarehousesId);
    store.dispatch(addWarehouse(selectedData));
    setIsOpen(!isOpen);
    navigate('/dashboard/AddInventory');
  };

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
        title="Inventory"
        isRightEnable={true}
        rightComponent={
          <Button size="small" className="plusnewbtn_Inventory" onClick={handleClickOnCreateReturnRequest} variant="contained">
            + Create return request
          </Button>
        }
      />
      <InventoryMainSearch />
      {/* <InventorySelectedWarehouseModalContent/> */}
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      <InventoryTable />

      {
        <WarehouseShippingModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={getwareHouseData?.data?.data}
          selectedValue={selectedWarehouseId}
          setSelectedValue={setSelectedWarehouseId}
          onPress={handleWarehouseModal}
        />
      }
    </Grid>
  );
};

const Inventory = () => {
  return (
    <InventoryStateProvider>
      <ActiveComponents />
    </InventoryStateProvider>
  );
};

export default Inventory;
