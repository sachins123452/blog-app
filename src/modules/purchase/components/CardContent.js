import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import '../../purchase/style/CardContent.css';
import { useTheme } from 'components/Theme/ThemeProvider';

export default function CardContent({ data, onChangeButton }) {
  console.log('warehouseData', data);
  const { currentTheme } = useTheme();

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
          <div className="change_btn_card_content">
            <Button onClick={onChangeButton} size="small" variant="contained" className="btnstyle_card_content">
              Change
            </Button>
          </div>
        </div>
        <div className="address_card_content_container">
          {/* <Typography className="main_text_card_content" style={{ color: currentTheme.textColor }}>
            {data?.Address}
          </Typography> */}
          <Typography className="text_address_card_content" style={{ color: currentTheme.textColor }}>
            {data?.Name}
          </Typography>
        </div>
      </Box>
    </div>
  );
}
