import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../purchase/style/Purchase.css';

const rows = [
  {
    OrderId: 'A 1',
    WareHouse: 'Herman Beck',
    CreaatAt: 'Oct 16, 2017',
    'Total Qty': '45.00',
    'Total Amount': ' 12',
    'Order status': 'Order Placed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'B 2',
    WareHouse: 'Mary Adams',
    CreaatAt: 'Oct 12, 2017',
    'Total Qty': '245.30',
    'Total Amount': '75040',
    'Order status': 'Order Accepted',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'C 3',
    WareHouse: 'Caleb Richards',
    CreaatAt: 'May 18, 2017',
    'Total Qty': '38.00',
    'Total Amount': '4500',
    'Order status': 'GRN Pending',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'D 4',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'E 5',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'F 6',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'G 7',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'H 8',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'I 9',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'J 10',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'J 10',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'J 10',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'A 1',
    WareHouse: 'Herman Beck',
    CreaatAt: 'Oct 16, 2017',
    'Total Qty': '45.00',
    'Total Amount': ' 12',
    'Order status': 'Order Placed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'B 2',
    WareHouse: 'Mary Adams',
    CreaatAt: 'Oct 12, 2017',
    'Total Qty': '245.30',
    'Total Amount': '75040',
    'Order status': 'Order Accepted',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'C 3',
    WareHouse: 'Caleb Richards',
    CreaatAt: 'May 18, 2017',
    'Total Qty': '38.00',
    'Total Amount': '4500',
    'Order status': 'GRN Pending',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'D 4',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'E 5',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'F 6',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'G 7',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'H 8',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'I 9',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'J 10',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'J 10',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'J 10',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
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
    maxWidth: 170,
    align: 'center'

    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Total Qty',
    label: 'Total QTY',
    maxWidth: 150,
    align: 'center'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Total Amount',
    label: 'Total Amount',
    maxWidth: 170,
    align: 'center'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Order status',
    label: 'Order Status',
    maxWidth: 150,

    align: 'center'
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'Source',
    label: 'Source',
    maxWidth: 170,
    align: 'center'
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'Action',
    label: 'Action',
    //  maxWidth: 50,
    align: 'center'
    // format: (value) => value.toFixed(2),
  }
];

const PurchaseOrder = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard/OrderView');
  };

  return (
    <Grid width={400} item xs={12} md={12} lg={12}>
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
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  alert('onKeyDown!');
                }
              }}
              className="tablebtn_purchase"
            >
              {' '}
              <VisibilityIcon className="VisibilityIcon_purchase" /> View
            </div>
          )
        }}
      />
    </Grid>
  );
};

export default PurchaseOrder;
