import React, { useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useDispatch } from 'react-redux';
import SubHeader from 'components/subHeader/SubHeader';
import AddProductsMainSearch from '../components/AddProductsMainSearch';
import AllProductsSelectedProductTables from '../components/AllProductsSelectedProductTables';
import { useNavigate} from 'react-router-dom';
import AddProductsCardContent from '../components/AddProductsCardContent';
import AddProductsBasicTable from '../components/AddProductsBasicTable';
// import { addWarehouseId } from 'store/reducers/placeOrder';
import { ProductStateProvider, useProductState } from 'context/AddProductProvider';
import WarehouseShippingModal from 'components/modals/contentmodal/WarehouseShippingModal';
import { addWarehouse } from 'store/reducers/placeOrder';
import { store } from 'store/index';



const ActiveComponent = () => {
  const { currentTheme,wareHouseData ,isOpen,setIsOpen,selectedWarehouse, setSelectedWarehouse} = useProductState();
  const navigate = useNavigate();

  const handleleftButton = () => {
    navigate('/dashboard/purchase');
  };

  const handleWarehouseModal =(selectedData) =>{
    console.log("selectedData =====>>",selectedData)
    setSelectedWarehouse(selectedData?.WarehousesId)
      store.dispatch(addWarehouse(selectedData))
      setIsOpen(!isOpen)
  }

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
              onClick={handleleftButton}
            >
              <ArrowBackIcon />
            </Button>
          }
        />
      </Grid>
     <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '15px' }}> 
        <Grid item md={9}>
          <AddProductsMainSearch />
          <Grid item>
            <Typography variant="h5" style={{ padding: 2, marginTop: 10, marginBottom: 10, color: currentTheme.textColor }}>
              All Products
            </Typography>
            <AddProductsBasicTable />
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <AddProductsCardContent />
          <Typography variant="h5" style={{ padding: 2, marginTop: 0 }}>
            Your Cart
          </Typography>
          <AllProductsSelectedProductTables borderRadius={'20px'} />
        </Grid>
      </Grid>
     {<WarehouseShippingModal 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      data={wareHouseData?.data?.data}
      selectedValue={selectedWarehouse}
      setSelectedValue={setSelectedWarehouse}
     onPress={handleWarehouseModal}
     
     />} 
    </>
  );
};

export default function AddProducts() {

  return (
    <ProductStateProvider>
      <ActiveComponent />
    </ProductStateProvider>
  );
}



