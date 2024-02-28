import React from 'react';

// material-ui
import { Button, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

// assets
import BasicTabel from 'pages/dashboard/BasicTabel';
import { useNavigate } from 'react-router-dom';
import MainSearch from 'components/main_search_header_bar/MainSearch';
import OutletMasterCss from './OutletMasterCss';
import { useTheme } from 'components/Theme/ThemeProvider';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import '../../modules/purchase/style/Purchase.css';
// sales report status

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const OutletMaster = () => {
  const { currentTheme } = useTheme();  
  const navigate = useNavigate();

  const rows = [
    {
      '#': '1',
      'Customer ID': 'ZW-CST-001',
      Name: 'Mediserv Pvt.Ltd',
      Address: 'A 12,Yogeshwar Complex,Satellite Road,Ahmedabad 380015,Gujarat',
      'Contact Person': `Ashok Sharma 7985628373`,
      'Credit Balance': '12,540',
      Status: 'Active'
    },
    {
      '#': '2',
      'Customer ID': 'ZW-CST-002',
      Name: 'Wellness Mart ',
      Address: '56B,Sumel Business Park,Asarwa Ahmedabaad 380016,Gujarat',
      'Contact Person': `Vikram Malik 9956289473`,
      'Credit Balance': '29,773',
      Status: 'Active'
    },
    {
      '#': '3',
      'Customer ID': 'ZW-CST-003',
      Name: 'Wellness World ',
      Address: '10,Earth Complex,Vraj Vihar,Satellite,Ahmedabaad 382480,Gujarat',
      'Contact Person': `Ayush Pandit 8958628473`,
      'Credit Balance': '7,375',
      Status: 'Active'
    },
    {
      '#': '4',
      'Customer ID': 'ZW-CST-004',
      Name: 'Vitality Plus ',
      Address: '11,Ayodhya Nagar,Society Ranip,Ahmedabaad 390015,Gujarat',
      'Contact Person': `Abhay Gupta 7256828473`,
      'Credit Balance': '7,375',
      Status: 'InActive'
    }
  ];
  const columns = [
    { id: '#', label: '#', minWidth: 60 },
    { id: 'Customer ID', label: 'Customer Id', minWidth: 120 },
    {
      id: 'Name',
      label: 'Name',
      minWidth: 150,
      align: 'center'

      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Address',
      label: 'Address',
      minWidth: 170,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Contact Person',
      label: 'Contact Person',
      minWidth: 150,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Credit Balance',
      label: 'Credit Balance',
      minWidth: 150,

      align: 'center'
      // format: (value) => value.toFixed(2),
    },
    {
      id: 'Status',
      label: 'Status',
      minWidth: 100,
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

  const handleClick = () => {
    navigate('/dashboard/OutletMaster360View');
  };
  const handleonClick = () => {
    navigate('/dashboard/AddOutlet');
  };
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return { color: '#55ba51' };
      case 'InActive':
        return { color: '#f4bc6a' };

      default:
        return { color: 'black' };
    }
  };
  return (
    <div style={{ height: '100vh' }}>
      <Grid container rowSpacing={2} columnSpacing={2.75} alignItems="center" justifyContent="space-between">
        {/* row 1 */}
        <Grid item xs={12} md={12} lg={12} style={OutletMasterCss.mainContainer}>
          <Typography variant="h5" sx={{ color: currentTheme.textColor }}>
            Outlet Master
          </Typography>

          <Button size="small" onClick={() => handleonClick()} variant="contained" style={{ backgroundColor: '#0174bf' }}>
            + Add New
          </Button>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <MainSearch />
        </Grid>
        <Grid width={'100%'} item xs={12} md={12} lg={12}>
          <BasicTabel
            rows={rows}
            columns={columns}
            searchOn={['OrderId', 'WareHouse']}
            statusKey={'Order status'}
            amountKey={'Total Amount'}
            actionButton={{
              key: 'Action',
              value: (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleClick}
                  // onKeyDown={(event) => {
                  //   if (event.key === 'Enter' || event.key === ' ') {
                  //     alert('onKeyDown!');
                  //   }
                  // }}
                  // className="tablebtn_purchase"
                >
                  {' '}
                  <VisibilityIcon className="VisibilityIcon_purchase" /> View
                </div>
              )
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default OutletMaster;
