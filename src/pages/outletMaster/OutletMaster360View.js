import React from 'react';
import { Grid } from '@mui/material';
import MultipleSegment from './MultipleSegment';
import OutletDetail from 'components/outletmastercomponents/OutletDetail';
import OutletDetailGraph from 'components/outletmastercomponents/OutletDetailGraph';
import ArrowBack from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
// import ReturnRequest_OrderViewCss from 'pages/purchase/returnRequest/ReturnRequst_OrderViewCss';
import { useNavigate } from 'react-router-dom';
// import '../purchase/returnRequest/ReturnRequest_OrderView.css';
import '../../modules/returnrequest/style/PurchaseReturnRequestOrderView.css';
import { useTheme } from 'components/Theme/ThemeProvider';

const OutletMaster360View = () => {
  const navigate = useNavigate();
  const { currentTheme } = useTheme();
  const handlegoBack = () => {
    navigate('/dashboard/OutletMaster');
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6} lg={6} onClick={() => handlegoBack()} style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton className="arrowIconCss_ReturnRequest_OrderViewCss">
          <ArrowBack sx={{ color: '#fff', fontSize: '1.5rem' }} />
        </IconButton>
        <Grid className="orderViewtext_Css_ReturnRequest_OrderViewCss" color={currentTheme.textColor}>
          Outlet 360 Profile
        </Grid>
      </Grid>

      <Grid item md={8} xs={12} lg={8}>
        <OutletDetail />
      </Grid>
      <Grid item md={4} xs={12} lg={4}>
        <OutletDetailGraph />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <MultipleSegment />
      </Grid>
    </Grid>
  );
};

export default OutletMaster360View;
