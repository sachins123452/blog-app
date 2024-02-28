import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react'
import { Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
const SalesOrder = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/dashboard/SalesOrderView');
    }
  return (
    <Grid width={400} item xs={12} md={12} lg={12}>
    <BasicTabel
    searchOn={['OrderId','Customer','WareHouse']}
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
            onClick={() => {
              handleClick();
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
  )
}

const rows = [
  {
    OrderId: 'A 1',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'Herman Beck',
    CreaatAt: 'Oct 16, 2017',
    'Total Qty': '45.00',
    'Total Amount': ' 12',
    'Order status': 'Order Placed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'B 2',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'Mary Adams',
    CreaatAt: 'Oct 12, 2017',
    'Total Qty': '245.30',
    'Total Amount': '75040',
    'Order status': 'Order Accepted',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'C 3',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'Caleb Richards',
    CreaatAt: 'May 18, 2017',
    'Total Qty': '38.00',
    'Total Amount': '4500',
    'Order status': 'GRN Pending',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'D 4',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'E 5',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'F 6',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'G 7',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'H 8',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'I 9',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'J 10',
    Customer: 'Mediserv Pvt Ltd',
    WareHouse: 'June Lane',
    CreaatAt: 'Apr 28, 2017',
    'Total Qty': '77.99',
    'Total Amount': '8700',
    'Order status': 'Order Completed',
    Source: 'TrueSales Mobile App'
  },
  {
    OrderId: 'K 11',
    Customer: 'Mediserv Pvt Ltd',
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
  { id: 'Customer', label: 'Customer', minWidth: 140 },
  { id: 'WareHouse', label: 'WareHouse', minWidth: 150 },
  {
    id: 'CreaatAt',
    label: 'Order date & time',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'Total Qty',
    label: 'Total QTY',
    minWidth: 150,
    align: 'center'
  },
  {
    id: 'Total Amount',
    label: 'Total Amount',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'Order status',
    label: 'Order Status',
    minWidth: 150,
    align: 'center'
  },
  {
    id: 'Source',
    label: 'Source',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'Action',
    label: 'Action',
    align: 'center'
  }
];
export default SalesOrder
