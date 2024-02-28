import React, { useState } from 'react';
import { Grid } from '@mui/material';
import BasicTabel from 'pages/dashboard/BasicTabel';
import StatementComponent from './StatementComponent';

import Work from '@mui/icons-material/Work';
import Undo from '@mui/icons-material/Undo';
import LocalAtm from '@mui/icons-material/LocalAtm';
import TextSnippet from '@mui/icons-material/TextSnippet';
const MultipleSegment = ({ heading, returnRequestrows, returnRequstColumns, paymentRows, paymentColumns, salesOrdersRows, salesOrdersColumns }) => {


    const headingIcons = [Work, Undo, LocalAtm, TextSnippet];
    const [selectedHeading, setSelectedHeading] = useState(0);



    const handleHeadingClick = (index) => {
        setSelectedHeading(index);
    };
    const renderTable = () => {
        const getStatusStyle = (status) => {
            switch (status) {

                case 'Completed':
                    return { color: '#55ba51', };
                case 'Pending':
                    return { color: '#f4bc6a' };

                default:
                    return { color: 'black' };
            }
        };





        if (selectedHeading === 1) {
            // Return Request is selected, render the second table
            return (
                <BasicTabel
                    rows={returnRequestrows}
                    columns={returnRequstColumns}
                    statusColorFun={getStatusStyle}
                    borderRadius={'0px 0px 0px 0px'}
                />
            );
        } else if (selectedHeading === 2) {
            // Payment is selected, render the third table




            return (
                <BasicTabel
                    rows={paymentRows}
                    columns={paymentColumns}
                    statusKey={'Return Status'}
                    statusColorFun={getStatusStyle}
                    borderRadius={'0px 0px 0px 0px'}
                />
            );
        } else if (selectedHeading === 3) {
            // Statement is selected, render the fourth table


            return (<>
                <StatementComponent />
            </>

            );
        } else {
            // Sales Orders or other headings are selected, render the first table


            return (
                <BasicTabel
                    rows={salesOrdersRows}
                    columns={salesOrdersColumns}
                   
                    borderRadius={'0px 0px 0px 0px'}
                />
            );
        }
    };
    return (
        <Grid>
            <Grid
                container
                style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,

                    display: 'flex',
                    flexDirection: 'row', // Change the direction to column
                }}
            >
                {heading?.map((item, index) => (
                    <Grid
                        key={index}
                        item

                        style={{
                            display: 'flex',
                            marginLeft: '2%',
                            height: '2.5rem',
                            cursor: 'pointer',
                            fontFamily: 'Medium',
                           
                            fontSize: '13px',
                            color: selectedHeading === index ? '#4cb748' : '#9e9e9e',
                            borderBottom: selectedHeading === index ? '2px solid #4cb748' : 'none',
                            alignItems: 'center'
                        }}
                        onClick={() => handleHeadingClick(index)}
                    >
                        <Grid item>
                            {headingIcons[index] && React.createElement(headingIcons[index], { style: { marginRight: '3px', fontSize: '10px', alignItems: 'center' } })}
                            {item}
                        </Grid>

                    </Grid>
                ))}
            </Grid>
            <Grid
                style={{ width: '100%', }}
            >

                {renderTable()}
            </Grid>
        </Grid>
    );
};

export default MultipleSegment;

MultipleSegment.defaultProps = {
    heading: ['Sales Orders', 'Return Request', 'Payment', 'Statement'],
    returnRequestrows: [
        { '#': '1', InvoiceId: 'ZW-INV23-001', OrderId: 'ZW-INV23-95802', 'GRNreturnDate': '15 JAN 2023', 'TotalReturnItems': '12', 'Return Status': 'Pending', },
        { '#': '2', InvoiceId: 'ZW-INV23-002', OrderId: 'ZW-INV23-94802', 'GRNreturnDate': '25 FEB 2023', 'TotalReturnItems': '42', 'Return Status': 'Completed', },
        { '#': '3', InvoiceId: 'ZW-INV23-003', OrderId: 'ZW-INV23-54802', 'GRNreturnDate': '30 MAR 2023', 'TotalReturnItems': '22', 'Return Status': 'Completed', },
        { '#': '4', InvoiceId: 'ZW-INV23-004', OrderId: 'ZW-INV23-56802', 'GRNreturnDate': '15 APR 2023', 'TotalReturnItems': '32', 'Return Status': 'Completed', },

    ],
    returnRequstColumns: [
        { id: '#', label: '#', minWidth: 70 },
        { id: 'InvoiceId', label: 'Invoice ID', minWidth: 120 },
        {
            id: 'OrderId',
            label: 'Order ID',
            minWidth: 130,
            align: 'center'

            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'GRNreturnDate',
            label: 'GRN/Returned Date',
            minWidth: 100,
            align: 'center'
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'TotalReturnItems', label: 'Total Return Items', minWidth: 100,
            align: 'center',
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Return Status',
            label: 'Return Status',
            minWidth: 120,

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
    ],
    paymentRows: [
        { '#': '1', InvoiceId: 'ZW-INV23-001', OrderId: 'ZW-INV23-95802', 'Raise Date': '15 JAN 2023', 'Total Amount': '1020', 'Paid Date': '30 Apr 2023', 'Return Status': 'Pending', },
        { '#': '2', InvoiceId: 'ZW-INV23-002', OrderId: 'ZW-INV23-94802', 'Raise Date': '25 FEB 2023', 'Total Amount': '4200', 'Paid Date': '15 Dec 2023', 'Return Status': 'Completed', },
        { '#': '3', InvoiceId: 'ZW-INV23-003', 'Paid Date': '15 Sep 2023', OrderId: 'ZW-INV23-54802', 'Raise Date': '30 MAR 2023', 'Total Amount': '2902', 'Return Status': 'Completed', },
        { '#': '4', InvoiceId: 'ZW-INV23-004', OrderId: 'ZW-INV23-56802', 'Raise Date': '15 APR 2023', 'Total Amount': '3250', 'Paid Date': '15 Oct 2023', 'Return Status': 'Completed', },

    ],
    paymentColumns: [
        { id: '#', label: '#', minWidth: 70 },
        { id: 'InvoiceId', label: 'Invoice ID', minWidth: 120 },
        {
            id: 'OrderId',
            label: 'Order ID',
            minWidth: 130,
            align: 'center'

            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Raise Date',
            label: 'Raise Date',
            minWidth: 100,
            align: 'center'
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Total Amount', label: 'Total amount', minWidth: 100,
            align: 'center',
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Return Status',
            label: 'Return Status',
            minWidth: 120,

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
    ],
    salesOrdersRows: [
        { OrderId: 'A 1', Customer: 'Tarun Bhadoriya', WareHouse: 'Herman Beck', CreaatAt: 'Oct 16, 2017', 'Total Qty': '45.00', 'Total Amount': ' 12', 'Order status': 'Order Placed', 'Source': 'TrueSales Mobile App' },
        { OrderId: 'B 2', Customer: 'Ansh Gupta', WareHouse: 'Mary Adams', CreaatAt: 'Oct 12, 2017', 'Total Qty': '245.30', 'Total Amount': '75040', 'Order status': 'Order Accepted', 'Source': 'TrueSales Mobile App' },
        { OrderId: 'C 3', Customer: 'Aman Rathore', WareHouse: 'Caleb Richards', CreaatAt: 'May 18, 2017', 'Total Qty': '38.00', 'Total Amount': '4500', 'Order status': 'GRN Pending', 'Source': 'TrueSales Mobile App' },
        { OrderId: 'D 4', Customer: 'Tushar Yadav', CreaatAt: 'Apr 28, 2017', 'Total Qty': '77.99', 'Total Amount': '8700', 'Order status': 'Order Completed', 'Source': 'TrueSales Mobile App' },
    ],
    salesOrdersColumns: [
        { id: 'OrderId', label: 'Order Id', minWidth: 100 },
        { id: 'Customer', label: 'Customer', minWidth: 120 },
        { id: 'WareHouse', label: 'WareHouse', minWidth: 120 },
        {
            id: 'CreaatAt',
            label: 'Order date & time',
            minWidth: 130,
            align: 'center'

            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Total Qty',
            label: 'Total QTY',
            minWidth: 100,
            align: 'center'
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Total Amount', label: 'Total Amount', minWidth: 120,
            align: 'center',
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Order status',
            label: 'Order Status',
            minWidth: 120,

            align: 'center',
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
            align: 'center',
            // format: (value) => value.toFixed(2),
        },
    ],


}
