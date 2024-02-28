import React, { useEffect, useState } from 'react';
import '../../../modules/purchase/style/CardContent.css';
import ReusableCard from 'components/cards/ResuableCard.js';
import { useProductState } from 'context/AddProductProvider.js';
import { Box, Stack, Typography, Button } from '@mui/material';
import { store } from 'store/index';
import { addWarehouse } from 'store/reducers/placeOrder';
import { useSelector } from 'react-redux';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
function CardContent({Id}) {
  const { wareHouseData, currentTheme,setIsOpen, setSelectedWarehouse } = useProductState();
  const [warehousDetails, setWarehouseDetails] = useState({});
  const { selectedWarehouseObj } = useSelector((state) => state.persistedReducer.placeOrder);
 console.log('aaaaaaaaaaaaaaaaa',selectedWarehouseObj);
  useEffect(() => {
    try{
    if (Object.keys(selectedWarehouseObj)?.length > 0) {
      setWarehouseDetails(selectedWarehouseObj);
      setSelectedWarehouse(selectedWarehouseObj?.WarehousesId)
    } else {
      if (wareHouseData?.isSuccess) {
        store.dispatch(addWarehouse(wareHouseData?.data?.data[0]));
        setSelectedWarehouse(wareHouseData?.data?.data[0]?.WarehousesId);
      }
    }
  }catch(e){
    console.warn("Error in Card Content Line 28",e)
  }
  }, [selectedWarehouseObj, wareHouseData]);

  const onChangeButton = () => {
    setIsOpen(true);
  };


  return (
    <div>
      <Box className="main_card_content">
        <div className="main_heading_card_content">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
            <LocalShippingIcon style={{ color: '#4CB748' }} />
            <Typography style={{ color: currentTheme.textColor }} variant="subtitle1">
              Shipped to
            </Typography>
          </Stack>
          {wareHouseData?.data?.data?.length > 1 && (
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

const AddProductsCardContent = ({Id}) => {
  const { currentTheme } = useProductState();
  return (
    <div style={{ backgroundColor: currentTheme.cardColor }}>
      <ReusableCard
        boxShadow={currentTheme.cardColor}
        backgroundColor={currentTheme.cardColor}
        content={<CardContent Id={Id}/>}
        borderRadius={15}
      />
    </div>
  );
};

export default AddProductsCardContent;
