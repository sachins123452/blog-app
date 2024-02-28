import React from 'react';
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import CustomPagination from 'components/pagination/Pagination';
import NumericInput from '../../../components/numericinput/NumericInput';

const rows2 = [
  { sku: 84564564, product: 'Camera Lens', uom: 'Box', size: '1KG', mrp: 185, price: 167, instock: 10 },
  { sku: 98764564, product: 'Laptop', uom: 'Box', size: '1KG', mrp: 300, price: 270, instock: 43 },
  { sku: 98756325, product: 'Mobile', uom: 'Box', size: '250 gm', mrp: 355, price: 300, instock: 9 },
  { sku: 98652366, product: 'Handset', uom: 'Box', size: '1KG', mrp: 50, price: 30, instock: 102 },
  { sku: 13286564, product: 'Computer Accessories', uom: 'Jar', size: '2KG', mrp: 100, price: 90, instock: 83 },
  { sku: 86739658, product: 'TV', uom: 'Pack', size: '1KG', mrp: 99, price: 70, instock: 41 },
  { sku: 13256498, product: 'Keyboard', uom: 'Pack', size: '1KG', mrp: 125, price: 100, instock: 70 },
  { sku: 98753263, product: 'Mouse', uom: 'Box', size: '250 gm', mrp: 89, price: 76, instock: 10 },
  { sku: 98753275, product: 'Desktop', uom: 'Jar', size: '1KG', mrp: 185, price: 167, instock: 9 },
  { sku: 98753291, product: 'Chair', uom: 'Box', size: '3KG', mrp: 100, price: 95, instock: 14 },
  { sku: 86739658, product: 'TV', uom: 'Pack', size: '1KG', mrp: 99, price: 70, instock: 41 },
  { sku: 13256498, product: 'Keyboard', uom: 'Pack', size: '1KG', mrp: 125, price: 100, instock: 70 },
  { sku: 98753263, product: 'Mouse', uom: 'Box', size: '250 gm', mrp: 89, price: 76, instock: 10 },
  { sku: 98753275, product: 'Desktop', uom: 'Jar', size: '1KG', mrp: 185, price: 167, instock: 9 },
  { sku: 98753291, product: 'Chair', uom: 'Box', size: '3KG', mrp: 100, price: 95, instock: 14 },
  { sku: 86739658, product: 'TV', uom: 'Pack', size: '1KG', mrp: 99, price: 70, instock: 41 },
  { sku: 13256498, product: 'Keyboard', uom: 'Pack', size: '1KG', mrp: 125, price: 100, instock: 70 },
  { sku: 98753263, product: 'Mouse', uom: 'Box', size: '250 gm', mrp: 89, price: 76, instock: 10 },
  { sku: 98753275, product: 'Desktop', uom: 'Jar', size: '1KG', mrp: 185, price: 167, instock: 9 },
  { sku: 98753291, product: 'Chair', uom: 'Box', size: '3KG', mrp: 100, price: 95, instock: 14 },
  { sku: 86739658, product: 'TV', uom: 'Pack', size: '1KG', mrp: 99, price: 70, instock: 41 },
  { sku: 13256498, product: 'Keyboard', uom: 'Pack', size: '1KG', mrp: 125, price: 100, instock: 70 },
  { sku: 98753263, product: 'Mouse', uom: 'Box', size: '250 gm', mrp: 89, price: 76, instock: 10 },
  { sku: 98753275, product: 'Desktop', uom: 'Jar', size: '1KG', mrp: 185, price: 167, instock: 9 },
  { sku: 98753291, product: 'Chair', uom: 'Box', size: '3KG', mrp: 100, price: 95, instock: 14 }
];

const headCells2 = [
  {
    id: 'sku',
    align: 'left',
    disablePadding: false,
    label: 'SKU'
  },
  {
    id: 'product',
    align: 'left',
    disablePadding: true,
    label: 'Product'
  },
  {
    id: 'uom',
    align: 'left',
    disablePadding: false,
    label: 'UOM'
  },
  {
    id: 'size',
    align: 'left',
    disablePadding: false,
    label: 'Size'
  },
  {
    id: 'mrp',
    align: 'left',
    disablePadding: false,
    label: 'MRP'
  },
  {
    id: 'price',
    align: 'left',
    disablePadding: false,
    label: 'Price(PTD)'
  },
  {
    id: 'instock',
    align: 'left',
    disablePadding: false,
    label: 'IN-Stock'
  },
  {
    id: 'qty',
    align: 'left',
    disablePadding: false,
    label: 'Quantity'
  }
];

const AddProductTable = () => {
  const [page, setPage] = React.useState(1);

  const handleChangePage = (e, newPage) => {
    console.log('e', e);
    setPage(newPage);
  };

  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  const currentPageData = rows2.slice(startIndex, endIndex);

  return (
    <Box width={'100%'} sx={{ marginRight: '10px', maxHeight: '100%' }}>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          minWidth: '70%',
          borderRadius: 5,
          backgroundColor: '#fff',
          border: '1px solid #E6E6E6',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headCells2.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ backgroundColor: '#fff', fontFamily: 'GilroyBold' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* <OrderTableHead order={order} orderBy={orderBy} /> */}
          <TableBody>
            {currentPageData?.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.sku}>
                {headCells2?.map((column) => {
                  const value = row[column?.id];

                  return (
                    <TableCell key={column.id} align={column?.align} style={{ fontFamily: 'Medium' }}>
                      {column.id === 'qty' ? (
                        // Conditionally render actionButton.value for "Action" column
                        <>
                          <NumericInput />
                        </>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CustomPagination
          page={page}
          onChange={handleChangePage}
          count={Math.ceil(rows2.length / 10)}
          TotalRecord={rows2.length}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </TableContainer>
    </Box>
  );
};
export default AddProductTable;

// const styles = {
//   input: {
//     color: '#000',
//     width: '85px',
//     backgroundColor: '#E5F1F8'
//   },
//   plus: {
//     backgroundColor: '#5DA6D6'
//   },
//   minus: {
//     backgroundColor: '#5DA6D6'
//   },

//   btnUp: {
//     backgroundColor: '#E5F1F8',
//     position: 'absolute',
//     right: 2,
//     width: '2.26ex',
//     borderColor: 'rgba(0,0,0,.1)',
//     borderStyle: 'solid',
//     textAlign: 'center',
//     cursor: 'default',
//     transition: 'all 0.1s',
//     background: '#E5F1F8',
//     boxShadow: '-1px -1px 3px rgba(0,0,0,.1) inset,' + '1px 1px 3px rgba(255,255,255,.7) inset'
//   },
//   btnDown: {
//     backgroundColor: '#E5F1F8',
//     position: 'absolute',
//     right: 2,
//     width: '2.26ex',
//     borderColor: 'rgba(0,0,0,.1)',
//     borderStyle: 'solid',
//     textAlign: 'center',
//     cursor: 'default',
//     transition: 'all 0.1s',
//     background: '#E5F1F8',
//     boxShadow: '-1px -1px 3px rgba(0,0,0,.1) inset,' + '1px 1px 3px rgba(255,255,255,.7) inset'
//   }
// };
