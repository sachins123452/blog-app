import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { BusinessCenterOutlined } from '@mui/icons-material';
import GroupByChart from 'components/charts/GroupByChart';
import DataChart from 'components/charts/DataChart';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'components/Theme/ThemeProvider';
import useApiCall from 'api/useApiCall';

// import {useApiRequest } from 'api/Request';
import { API } from 'api/API';
import { showDanger } from 'components/nudges/Alert';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const { currentTheme } = useTheme();
  const [colors, setColors] = useState();
  const navigate = useNavigate();
  const { makeRequest } = useApiCall();
  // useEffect(() => {
  //   checkLogin();
  // }, []);

  // const checkLogin = async () => {
  //   var appToken = localStorage.getItem('@login');
  //   var token = JSON.parse(appToken);
  //   console.log('Token:', token.AppToken);

  //   if (!token) {
  //     navigate('/Login');
  //   } else {
  //     navigate('/');
  //   }
  // };

  // debugger
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let profileParams = {
  //         EmployeeId: 2217
  //       };
  //       let profileResponse = await makeRequest({ method: 'GET', url: API.getProfile, params: profileParams });
  //       console.log('profileResponse', profileResponse);
  //      if (profileResponse) {
  //       if (profileResponse?.statusCode === 200) {
  //         localStorage.setItem('@user', JSON.stringify(profileResponse?.data));
  //       } else {
  //         showDanger(`Hello==${profileResponse?.message}`);
  //       }
  //     } 
  //   } catch (profileError) {
  //     showDanger(`${profileError}`);
  //   }
  // })();
  // }, []);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5" color={currentTheme.textColor}>
          Business Overview
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total amount Of outstanding"
          count="5,4900"
          icon={
            <BusinessCenterOutlined
              sx={{ fontSize: 40, backgroundColor: '#FEEEF4', color: '#F5397D', borderRadius: '20%', padding: '8px' }}
            />
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Credit limit"
          count="12,540"
          percentage={70.5}
          isLoss
          color="error"
          icon={
            <BusinessCenterOutlined
              sx={{ fontSize: 40, backgroundColor: '#FFF9E8', color: '#FEBE16', borderRadius: '20%', padding: '8px' }}
            />
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Monthly secondary orders"
          count="48"
          percentage={27.4}
          isLoss
          color="success"
          icon={
            <BusinessCenterOutlined
              sx={{ fontSize: 40, backgroundColor: '#C9F3FC', color: '#29A7C2', borderRadius: '20%', padding: '8px' }}
            />
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total invoice due"
          count="68,325"
          percentage={17.4}
          isLoss
          color="error"
          icon={
            <BusinessCenterOutlined
              sx={{ fontSize: 40, backgroundColor: '#ECF0FF', color: '#3769FC', borderRadius: '20%', padding: '10px' }}
            />
          }
        />
      </Grid>

      {/* row 2 */}
      <Grid item xs={12} md={5} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" color={currentTheme.textColor}>
              Monthly Order Status
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false} style={{ backgroundColor: currentTheme.cardColor }}>
          <GroupByChart />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={5} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" color={currentTheme.textColor}>
              Order Quantities by Product
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false} style={{ backgroundColor: currentTheme.cardColor }}>
          <GroupByChart currentTheme={currentTheme} />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" color={currentTheme.textColor}>
              Brand Inventory - Current Month
            </Typography>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }} style={{ backgroundColor: currentTheme.cardColor }}>
          <DataChart />
        </MainCard>
      </Grid>

      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" color={currentTheme.textColor}>
              Beat Coverage
            </Typography>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }} style={{ backgroundColor: currentTheme.cardColor }}>
          <DataChart />
        </MainCard>
      </Grid>

      {/* row 4 */}

      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" color={currentTheme.textColor}>
              Trending Products
            </Typography>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }} style={{ backgroundColor: currentTheme.cardColor }}>
          {/* <DataChart/> */}
        </MainCard>
      </Grid>
      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" color={currentTheme.textColor}>
              Pending Invoice
            </Typography>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }} style={{ backgroundColor: currentTheme.cardColor }}>
          {/* <DataChart/> */}
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
