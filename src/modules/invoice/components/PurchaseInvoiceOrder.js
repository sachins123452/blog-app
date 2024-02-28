import React from 'react';
import BasicTabel from 'pages/dashboard/BasicTabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Grid } from '../../../../node_modules/@mui/material/index';

const PurchaseInvoiceOrder = (props) => {
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

  return (
    <Grid width={400} item xs={12} md={7} lg={12}>
      <BasicTabel
        rows={rows}
        columns={columns}
        statusKey={'GRN status'}
        statusColorFun={styleColor}
        actionButton={{
          key: 'Action',
          value: (
            <div
              role="button"
              tabIndex={0}
              onClick={props.handleOpenModal}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  alert('onKeyDown!');
                }
              }}
              className="basicTable_btn_invoice_due_table"
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

export default PurchaseInvoiceOrder;

const rows = [
  {
    '#': '1',
    InvoiceId: 'ZW-INV23-001',
    OrderId: 'ZW20230825-001',
    CreaatAt: '15 Aug 2023',
    'Paid Date': '13 Aug 23',
    'Total Amount': '1265',
    'GRN status': 'Completed'
  },
  {
    '#': '2',
    InvoiceId: 'ZW-INV23-002',
    OrderId: 'ZW20230825-002',
    CreaatAt: ' 15 Aug 2023',
    'Paid Date': '14 Sep 23',
    'Total Amount': '1357',
    'GRN status': 'Completed'
  },
  {
    '#': '3',
    InvoiceId: 'ZW-INV23-003',
    OrderId: 'ZW20230825-003',
    CreaatAt: ' 15 Aug 2023',
    'Paid Date': '15 Oct 23',
    'Total Amount': '1400',
    'GRN status': 'Pending'
  },
  {
    '#': '4',
    InvoiceId: 'ZW-INV23-004',
    OrderId: 'ZW20230825-004',
    CreaatAt: ' 15 Aug 2023',
    'Paid Date': '23 Nov 23',
    'Total Amount': '1500',
    'GRN status': 'Completed'
  },
  {
    '#': '5',
    InvoiceId: 'ZW-INV23-005',
    OrderId: 'ZW20230825-005',
    CreaatAt: ' 15 Aug 2023',
    'Paid Date': '31 Dec 23',
    'Total Amount': '1600',
    'GRN status': 'Completed'
  }
];
const columns = [
  { id: '#', label: '#', minWidth: 140 },
  { id: 'InvoiceId', label: 'Invoice Id', minWidth: 140 },
  { id: 'OrderId', label: 'Order Id', minWidth: 140 },
  {
    id: 'CreaatAt',
    label: 'Raised Date',
    minWidth: 170,
    align: 'center'

    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Total Amount',
    label: 'Total Amount',
    minWidth: 150,
    align: 'center'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Paid Date',
    label: 'Paid Date',
    minWidth: 170,
    align: 'center'
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'GRN status',
    label: 'Payment Status',
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
