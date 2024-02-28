import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react';
import { Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSalesReturnRequestState } from 'context/SalesReturnRequestProvider';
const SalesReturnRequestOrder = () => {
  let { setIsOpenModal} = useSalesReturnRequestState();
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <Grid width={400} item xs={12} md={12} lg={12}>
      <BasicTabel
        searchOn={['#', 'InvoiceId', 'OrderId', 'Return Status']}
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
                handleOpenModal();
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
  );
};

const rows = [
  {
    '#': '1',
    InvoiceId: 'ZW-INV23-0011',
    OrderId: 'ZW20230825-001',
    'GRN/Return Date': '15 Aug 2023',
    'Total Return Items': '1265',
    'Return Status': 'Completed'
  },
  {
    '#': '2',
    InvoiceId: 'ZW-INV23-002',
    OrderId: 'ZW20230825-002',
    'GRN/Return Date': ' 15 Aug 2023',
    'Total Return Items': '1357',
    'Return Status': 'Completed'
  },
  {
    '#': '3',
    InvoiceId: 'ZW-INV23-003',
    OrderId: 'ZW20230825-003',
    'GRN/Return Date': ' 15 Aug 2023',
    'Total Return Items': '1400',
    'Return Status': 'Pending'
  },
  {
    '#': '4',
    InvoiceId: 'ZW-INV23-004',
    OrderId: 'ZW20230825-004',
    'GRN/Return Date': ' 15 Aug 2023',
    'Total Return Items': '1500',
    'Return Status': 'Completed'
  },
  {
    '#': '5',
    InvoiceId: 'ZW-INV23-005',
    OrderId: 'ZW20230825-005',
    'GRN/Return Date': ' 15 Aug 2023',
    'Total Return Items': '1600',
    'Return Status': 'Completed'
  }
];
const columns = [
  { id: '#', label: '#', minWidth: 140 },
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
    minWidth: 150,
    align: 'center'
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
export default SalesReturnRequestOrder;
