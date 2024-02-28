import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react'
import { Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useInvoiceState } from 'context/SalesInvoiceProvider';

const SalesInvoiceOrder = () => {
    let {setIsOpen} = useInvoiceState();
    const handleOpenModal = () => {
        setIsOpen(true);
      };
  return (
    <Grid width={400} item xs={12} md={12} lg={12}>
    <BasicTabel
    searchOn={['#','InvoiceId','OrderId','status']}
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
                handleOpenModal()
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
    { '#': '1', InvoiceId: 'ZW-INV23-001', OrderId: 'ZW20230825-001', 'CreaatAt': '15 Aug 2023', 'Paid Date': '-', 'Total Amount': '1265', 'status': 'Completed' },
    { '#': '2', InvoiceId: 'ZW-INV23-002', OrderId: 'ZW20230825-002', 'CreaatAt': ' 15 Aug 2023', 'Paid Date': '14 Sep 23', 'Total Amount': '1357', 'status': 'Completed' },
    { '#': '3', InvoiceId: 'ZW-INV23-003', OrderId: 'ZW20230825-003', 'CreaatAt': ' 15 Aug 2023', 'Paid Date': '15 Oct 23', 'Total Amount': '1400', 'status': 'Pending' },
    { '#': '4', InvoiceId: 'ZW-INV23-004', OrderId: 'ZW20230825-004', 'CreaatAt': ' 15 Aug 2023', 'Paid Date': '23 Nov 23', 'Total Amount': '1500', 'status': 'Completed' },
    { '#': '5', InvoiceId: 'ZW-INV23-005', OrderId: 'ZW20230825-005', 'CreaatAt': ' 15 Aug 2023', 'Paid Date': '31 Dec 23', 'Total Amount': '1600', 'status': 'Completed' },


]
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
        id: 'Paid Date', label: 'Paid Date', minWidth: 170,
        align: 'center',
        // format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 150,

        align: 'center',
        // format: (value) => value.toFixed(2),
    },

    {
        id: 'Action',
        label: 'Action',
        //  minWidth: 50,
        align: 'center',
        // format: (value) => value.toFixed(2),
    },
]
export default SalesInvoiceOrder
