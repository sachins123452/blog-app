import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { Grid } from '../../../../node_modules/@mui/material/index';

const PurchaseReturnRequestOrder = () => {
  const navigate = useNavigate();

  const styleColor = (status) => {
    switch (status) {
      case 'Pending':
        return { color: '#f4bc6a' };
      case 'GRN Pending':
        return { color: '#f4bc6a' };
      case 'Completed':
        return { color: '#0a79c1' };
      default:
        return { color: 'red' };
    }
  };
  const handleClick = () => {
    navigate('/dashboard/ReturnRequest_OrderView');
  };

  return (
    <Grid width={400} item xs={12} md={7} lg={12}>
      <BasicTabel
        rows={rows}
        columns={columns}
        statusKey={'Return Status'}
        statusColorFun={styleColor}
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
              className="viewCss_Return_Request"
            >
              {' '}
              <VisibilityIcon style={{ fontSize: 10 }} /> View
            </div>
          )
        }}
      />
    </Grid>
  );
};

export default PurchaseReturnRequestOrder;

const rows = [
  {
    '#': '1',
    InvoiceId: 'ZW-INV23-001',
    OrderId: 'ZW20230825-001',
    'GRN/Return Date': '15 Aug 2023',
    'Paid Date': '13 Aug 23',
    'Total Return Items': '1265',
    'Return Status': 'Completed'
  },
  {
    '#': '2',
    InvoiceId: 'ZW-INV23-002',
    OrderId: 'ZW20230825-002',
    'GRN/Return Date': ' 15 Aug 2023',
    'Paid Date': '14 Sep 23',
    'Total Return Items': '1357',
    'Return Status': 'Completed'
  },
  {
    '#': '3',
    InvoiceId: 'ZW-INV23-003',
    OrderId: 'ZW20230825-003',
    'GRN/Return Date': ' 15 Aug 2023',
    'Paid Date': '15 Oct 23',
    'Total Return Items': '1400',
    'Return Status': 'Pending'
  },
  {
    '#': '4',
    InvoiceId: 'ZW-INV23-004',
    OrderId: 'ZW20230825-004',
    'GRN/Return Date': ' 15 Aug 2023',
    'Paid Date': '23 Nov 23',
    'Total Return Items': '1500',
    'Return Status': 'Completed'
  },
  {
    '#': '5',
    InvoiceId: 'ZW-INV23-005',
    OrderId: 'ZW20230825-005',
    'GRN/Return Date': ' 15 Aug 2023',
    'Paid Date': '31 Dec 23',
    'Total Return Items': '1600',
    'Return Status': 'Completed'
  }
];
const columns = [
  { id: '#', label: '#', minWidth: 90 },
  { id: 'InvoiceId', label: 'Invoice Id', minWidth: 140 },
  { id: 'OrderId', label: 'Order Id', minWidth: 140 },
  {
    id: 'GRN/Return Date',
    label: 'GRN/Return Date',
    minWidth: 170,
    align: 'center'

    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Total Return Items',
    label: 'Total Return Items',
    minWidth: 170,
    align: 'center'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Paid Date',
    label: 'Type',
    minWidth: 170,
    align: 'center'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Return Status',
    label: 'Return Status',
    minWidth: 150,

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
