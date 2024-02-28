import React, { useState } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import ShippingLocationModal from 'components/modals/contentmodal/Shippinglocationmodal';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import './CardContent.css';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';

export default function CardContent({data, shipToWrhsId }) {
  const [open, setopen] = React.useState(false);
  const { currentTheme } = useTheme();
  const getWarehousesData = useGetWarehouseQuery();
  const getData = getWarehousesData?.data?.data;
  const [getWarehouseId, setWarehouseId] = useState(null);

  const filteredData = getData?.filter((item) => item?.Id == shipToWrhsId);

  const handleCloseButton = () => {
    setopen(false);
  };

  const handleVerifyButton = () => {
    setopen(false);
  };

  const handleWarehouseIdChange = (warehouseId) => {
    setWarehouseId(warehouseId);
  };

  return (
    <div style={{ backgroundColor: currentTheme.bodyColor }}>
      <Box className="main_card_content">
        <ShippingLocationModal
          handleClose={() => handleCloseButton()}
          showModal={open}
          onClick={() => handleVerifyButton()}
          onWarehouseIdChange={handleWarehouseIdChange}
          shipToWrhsId={shipToWrhsId}
          data={data}
          
        />
        <div className="main_heading_card_content">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
            <LocalShippingIcon style={{ color: '#4CB748' }} />
            <Typography style={{ color: currentTheme.textColor }} variant="subtitle1">
              Shipped to
            </Typography>
          </Stack>
          <div className="change_btn_card_content">
            <Button
              onClick={() => setopen(true)}
              size="small"
              variant="contained"
              // style={{ borderRadius: 10, backgroundColor: '#4CB748' }}
              className="btnstyle_card_content"
            >
              Change
            </Button>
          </div>
        </div>
        {filteredData &&
          filteredData.map((itm, ind) => {
            return (
              <div className="address_card_content_container">
                <Typography className="main_text_card_content" style={{ color: currentTheme.textColor }}>
                  {itm.Address}
                </Typography>
                <Typography className="text_address_card_content" style={{ color: currentTheme.textColor }}>
                  {itm.Name}
                </Typography>
              </div>
            );
          })}
      </Box>
    </div>
  );
}
