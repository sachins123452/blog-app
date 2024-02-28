import React from 'react';

import avtar1 from '../../../assets/images/users/avatar-1.png';
import avtar2 from '../../../assets/images/users/avatar-2.png';
import avtar3 from '../../../assets/images/users/avatar-3.png';
import avtar4 from '../../../assets/images/users/avatar-4.png';

// material-ui
import { Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from 'components/Theme/ThemeProvider';
// assets
import BasicTabel from 'pages/dashboard/BasicTabel';
import { useNavigate } from 'react-router-dom';
// import {showDanger, showSuccess} from '../../components/nudges/Alert'
// sales report status

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DSR = () => {
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  const rows = [
    {
      OrderId: 'A 1',
      img: avtar1,
      WareHouse: 'Herman Beck',
      CreaatAt: 'Oct 16, 2017',
      'Total Qty': '45.00',
      'Total Amount': ' 12',
      'Order status': 'Order Placed',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'B 2',
      img: avtar2,
      WareHouse: 'Mary Adams',
      CreaatAt: 'Oct 12, 2017',
      'Total Qty': '245.30',
      'Total Amount': '75040',
      'Order status': 'Order Accepted',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'C 3',
      img: avtar3,
      WareHouse: 'Caleb Richards',
      CreaatAt: 'May 18, 2017',
      'Total Qty': '38.00',
      'Total Amount': '4500',
      'Order status': 'GRN Pending',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'D 4',
      img: avtar4,
      WareHouse: 'June Lane',
      CreaatAt: 'Apr 28, 2017',
      'Total Qty': '77.99',
      'Total Amount': '8700',
      'Order status': 'Order Completed',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'E 5',
      img: avtar2,
      WareHouse: 'June Lane',
      CreaatAt: 'Apr 28, 2017',
      'Total Qty': '77.99',
      'Total Amount': '8700',
      'Order status': 'Order Completed',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'F 6',
      img: avtar1,
      WareHouse: 'June Lane',
      CreaatAt: 'Apr 28, 2017',
      'Total Qty': '77.99',
      'Total Amount': '8700',
      'Order status': 'Order Completed',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'G 7',
      img: avtar3,
      WareHouse: 'June Lane',
      CreaatAt: 'Apr 28, 2017',
      'Total Qty': '77.99',
      'Total Amount': '8700',
      'Order status': 'Order Completed',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'H 8',
      img: avtar4,

      WareHouse: 'June Lane',
      CreaatAt: 'Apr 28, 2017',
      'Total Qty': '77.99',
      'Total Amount': '8700',
      'Order status': 'Order Completed',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'I 9',
      img: avtar1,
      WareHouse: 'June Lane',
      CreaatAt: 'Apr 28, 2017',
      'Total Qty': '77.99',
      'Total Amount': '8700',
      'Order status': 'Order Completed',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'J 10',
      img: avtar4,
      WareHouse: 'June Lane',
      CreaatAt: 'Apr 28, 2017',
      'Total Qty': '77.99',
      'Total Amount': '8700',
      'Order status': 'Order Completed',
      Source: 'TrueSales Mobile App'
    },
    {
      OrderId: 'K 11',
      img: avtar2,
      WareHouse: 'June Lane',
      CreaatAt: 'Apr 28, 2017',
      'Total Qty': '77.99',
      'Total Amount': '8700',
      'Order status': 'Order Completed',
      Source: 'TrueSales Mobile App'
    }
  ];
  const columns = [
    { id: 'OrderId', label: 'Order Id', minWidth: 140 },
    { id: 'WareHouse', label: 'WareHouse', minWidth: 150 },
    {
      id: 'CreaatAt',
      label: 'Order date & time',
      minWidth: 170,
      align: 'center'

      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Total Qty',
      label: 'Total QTY',
      minWidth: 150,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Total Amount',
      label: 'Total Amount',
      minWidth: 170,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Order status',
      label: 'Order Status',
      minWidth: 150,

      align: 'center'
      // format: (value) => value.toFixed(2),
    },
    {
      id: 'Source',
      label: 'Source',
      minWidth: 170,
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

  const handleClick = (data) => {
    console.log('Purchase Component Line No 174 -->', data);
    navigate('/dashboard/DSR360View');
  };

  return (
    <Grid container xs={12} style={{}}>
      {/* row 1 */}
      <Grid item xs={12} md={12} lg={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ color: currentTheme.textColor }}>
          Distributor Sales Representative
        </Typography>
      </Grid>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid width={400} item xs={12} md={12} lg={12} style={{marginTop:'1%'}}>
        <BasicTabel
          rows={rows}
          columns={columns}
          statusKey={'Order status'}
          amountKey={'Total Amount'}
          actionButton={{
            key: 'Action',
            value: (
              <div
                role="button"
                tabIndex={0}
                onClick={(row) => {
                  handleClick(row);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    alert('onKeyDown!');
                  }
                }}
                style={{ backgroundColor: '#4cb748', color: '#fff', borderRadius: 20, minWidth: 55, fontSize: 12, cursor: 'pointer' }}
              >
                {' '}
                <VisibilityIcon style={{ fontSize: 10 }} /> View
              </div>
            )
          }}
        />
      </Grid>

      {/* row 3 */}
    </Grid>
  );
};

export default DSR;
