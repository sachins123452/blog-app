import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

const AmountTabel = ({ headingTittle, rows, header_backgroundColor, balanceDue, amount, inputField, colSpan,color,unit,backgroundColor ,borderRadius}) => {

    return (
        <TableContainer component={Box} sx={{borderRadius:3,border: '1px solid #ddd'}}>
            <Table sx={{ minWidth: 700, backgroundColor:backgroundColor}} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        {headingTittle?.map((column) => (
                            <TableCell
                                key={column.id}
                                align={'center'}
                                style={{ backgroundColor: header_backgroundColor, fontFamily: 'GilroyBold', color: color }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((data, index) => (
                        <TableRow key={index}>
                            {headingTittle.map((column) => (
                                <TableCell key={column.id} align="center" style={{color:color}}>
                                    {column.id === inputField.key ? inputField.value : data[column.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                    <TableRow

                    >
                        <TableCell align="right" colSpan={5} style={{ fontFamily: 'GilroyBlack',color: color }}>{balanceDue}</TableCell>
                        <TableCell  align="center" colSpan={1} style={{ fontFamily: 'GilroyBlack',color: color }}>{amount}</TableCell>
                       {unit&& <TableCell  align="center" colSpan={1} style={{ fontFamily: 'GilroyBlack',color: color }}>{unit}</TableCell>}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AmountTabel;
AmountTabel.defaultProps = {
    headingTittle: [
        {
            id: 'Date',
            label: 'Date',
            minWidth: 140,
        },
        {
            id: 'Transactions',
            label: 'Transactions',

        },
        {
            id: 'Details',
            label: 'Details',

        },
        {
            id: 'Amount',
            label: 'Amount',

        },
        {
            id: 'Payment',
            label: 'Payment',

        },
        {
            id: 'Balance',
            label: 'Balance',

        },

    ],
    rows: [
        { Date: '01 Apr 2023', 'Transactions': 'Opening Balance', Details: 'ZW38573-DSC', 'Amount': '8,03520', 'Payment': ' 1240', 'Balance': '84028' },
        { Date: '01 Sep 2023', 'Transactions': 'Opening Balance', Details: 'ZW38573-DSC', 'Amount': '5,03520', 'Payment': ' 1240', 'Balance': '84028' },
        { Date: '05 Oct 2023', 'Transactions': 'Opening Balance', Details: 'ZW38573-DSC', 'Amount': '4,03520', 'Payment': ' 1240', 'Balance': '84028' },
        { Date: '01 Dec 2023', 'Transactions': 'Opening Balance', Details: 'ZW38573-DSC', 'Amount': '3,03520', 'Payment': ' 1240', 'Balance': '84028' },
        { Date: '01 Jun 2023', 'Transactions': 'Payment', Details: 'ZW38573-DSC', 'Amount': '2,03520', 'Payment': ' 140', 'Balance': '54028' },
    ],
    header_backgroundColor: '#0174bf',
    balanceDue: 'Balance Due',
    amount: '₹283,874',
    inputField: {
        key: 'InputField', value: <div


            style={{ backgroundColor: '#4cb748', color: '#fff', borderRadius: 20, minWidth: 55, fontSize: 12, cursor: 'pointer' }}>

            View</div>
    },
    colSpan: 5,
    color:'#fff',
    /* unit:'262' */
}