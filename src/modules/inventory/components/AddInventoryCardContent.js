import React, { useEffect, useState } from 'react';
import '../../../modules/purchase/style/CardContent.css';
import ReusableCard from 'components/cards/ResuableCard.js';
import { useProductState } from 'context/AddProductProvider.js';
import { Box, Stack, Typography, Button } from '@mui/material';
import { store } from 'store/index';
import { addWarehouse } from 'store/reducers/placeOrder';
import { useSelector } from 'react-redux';
import { useAddInventoryState } from 'context/AddInventoryProvider';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function CardContent({CardContentTitle}) {
  const { getwareHouseData, currentTheme, isOpen, setIsOpen, setSelectedWarehouse } = useAddInventoryState();
  const [warehousDetails, setWarehouseDetails] = useState({});
  const { selectedWarehouseObj } = useSelector((state) => state.persistedReducer.placeOrder);
  
  const getWarehouseId = useSelector((state) => state.persistedReducer.placeOrder.shipToWrhsId);
  
  console.log("selectedWarehouseObj===",selectedWarehouseObj)
  let d=getwareHouseData?.data?.data.filter((id)=>getWarehouseId.WarehousesId == id.WarehousesId)


  // useEffect(() => {
  //   try{
  //     if (getwareHouseData?.isSuccess) {
  //       setWarehouseDetails(d[0])
  //       // store.dispatch(addWarehouse(getwareHouseData?.data?.data[0]));
  //       setSelectedWarehouse(d[0].WarehousesId);
  //     }
  //   }catch(e){
  //   console.error("Error in Card Content Line 28",e)
  // }
  // }, [getWarehouseId]);


  useEffect(() => {
    try{
    if (Object.keys(selectedWarehouseObj)?.length > 0) {
      setWarehouseDetails(selectedWarehouseObj);
      setSelectedWarehouse(selectedWarehouseObj?.WarehousesId)
    } else {
      if (getwareHouseData?.isSuccess) {
        store.dispatch(addWarehouse(getwareHouseData?.data?.data[0]));
        setSelectedWarehouse(getwareHouseData?.data?.data[0]?.WarehousesId);
      }
    }
  }catch(e){
    console.warn("Error in Card Content Line 28",e)
  }
  }, [selectedWarehouseObj, getwareHouseData]);

  const onChangeButton = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <Box className="main_card_content">
        <div className="main_heading_card_content">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
            <LocalShippingIcon style={{ color: '#4CB748' }} />
            <Typography style={{ color: currentTheme.textColor }} variant="subtitle1">
              {CardContentTitle}
            </Typography>
          </Stack>
          {getwareHouseData?.data?.data?.length > 1 && (
            <div className="change_btn_card_content">
              <Button onClick={() => onChangeButton()} size="small" variant="contained" className="btnstyle_card_content">
                Change
              </Button>
            </div>
          )}
        </div>
        <div className="address_card_content_container">
          <Typography className="main_text_card_content" style={{ color: currentTheme.textColor }}>
            {warehousDetails?.Address}
          </Typography>
          <Typography className="text_address_card_content" style={{ color: currentTheme.textColor }}>
            {warehousDetails?.Name}
          </Typography>
        </div>
      </Box>
    </div>
  );
}

const AddProductsCardContent = () => {
  const { currentTheme } = useAddInventoryState();
  return (
    <div style={{ backgroundColor: currentTheme.cardColor }}>
      <ReusableCard
        boxShadow={currentTheme.cardColor}
        backgroundColor={currentTheme.cardColor}
        content={<CardContent CardContentTitle={'Warehouse'}  />}
        borderRadius={15}
      />
    </div>
  );
};

export default AddProductsCardContent;
