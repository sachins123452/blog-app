import React from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

// assets
import BasicTabel from 'pages/dashboard/BasicTabel';
import MainSearch from 'components/main_search_header_bar/MainSearch';
// import Schemes_OffersCss from './Schems_OfferCss';
import { useTheme } from 'components/Theme/ThemeProvider';
import './Schemes_Offers.css';

// sales report status

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Schemes_Offers = () => {
  const { currentTheme } = useTheme();

  const rows = [
    {
      '#': '1',
      'Scheme Name': 'Summer Savings Bonanza',
      Type: 'Discount',
      'Targetted for': 'Purchase',
      'Scheme Start/End Date': '10 Feb 2024 - 10 Mar 2024',
      'Scheme Duration': '1 Month',
      Status: 'Upcoming'
    },
    {
      '#': '2',
      'Scheme Name': 'Festive Mega Rewards',
      Type: 'Points Redemption',
      'Targetted for': 'Sales',
      'Scheme Start/End Date': '01 Jan 2024 - 31 Jan 2024',
      'Scheme Duration': '1 Month',
      Status: 'On-going'
    },
    {
      '#': '3',
      'Scheme Name': 'Winter Clearance Sale ',
      Type: 'By One,Get One(BOGO)',
      'Targetted for': 'Purchase',
      'Scheme Start/End Date': '15 May 2023 - 15 May 2023',
      'Scheme Duration': '1 Month',
      Status: 'Completed'
    },
    {
      '#': '4',
      'Scheme Name': 'Spring Product ShowCase',
      Type: 'New Product Launch',
      'Targetted for': 'Purchase',
      'Scheme Start/End Date': '01 Apr 2023 - 30 Apr 2023',
      'Scheme Duration': '1 Month',
      Status: 'Completed'
    }
  ];
  const columns = [
    { id: '#', label: ' #', minWidth: 60 },
    {
      id: 'Scheme Name',
      label: 'Scheme Name',
      minWidth: 150,
      align: 'center'

      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Type',
      label: 'Type',
      minWidth: 150,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Targetted for',
      label: 'Targetted for',
      minWidth: 150,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Scheme Start/End Date',
      label: 'Scheme Start/End Date',
      minWidth: 190,

      align: 'center'
      // format: (value) => value.toFixed(2),
    },
    {
      id: 'Scheme Duration',
      label: 'Scheme Duration',
      minWidth: 150,
      align: 'center'
      // format: (value) => value.toFixed(2),
    },
    {
      id: 'Status',
      label: 'Status',
      minWidth: 130,
      align: 'center'
      // format: (value) => value.toFixed(2),
    },
    {
      id: 'Action',
      label: 'Action',
      //  minWidth: 50,
      align: 'center'
      // format: (value) => value.toFixed(2),
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'On-going':
        return { color: '#55ba51' };
      case 'Upcoming':
        return { color: '#f4bc6a' };
      case 'Completed':
        return { color: '#0a79c1' };
      default:
        return { color: 'black' };
    }
  };

  return (
    <Grid height={'100vh'}>
      {/* row 1 */}
      <Grid container height={'70%'}>
        <Grid item xs={12} md={12} lg={12} className="mainContainer_schemes_offers">
          <Typography variant="h5" color={currentTheme.textColor}>
            Schemes & Offers
          </Typography>
        </Grid>
        <Grid item width={'100%'}>
          <MainSearch height={'auto'} />
        </Grid>

        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

        {/* row 2 */}
        <Grid width={400} item xs={12} md={12} lg={12}>
          <BasicTabel
            rows={rows}
            columns={columns}
            statusKey={'Status'}
            statusColorFun={getStatusStyle}
            actionButton={{
              key: 'Action',
              value: (
                <div role="button" tabIndex={0} className="ViewtextCss_schemes_offers">
                  {' '}
                  <VisibilityIcon style={{ fontSize: 10 }} /> View
                </div>
              )
            }}
          />
        </Grid>
      </Grid>

      {/* row 3 */}
    </Grid>
  );
};

export default Schemes_Offers;
