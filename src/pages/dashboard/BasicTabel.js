import * as React from 'react';
import { Box, TextField, Select, MenuItem, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../../assets/fonts/Fonts.css';
import CustomPagination from 'components/pagination/Pagination';
import VisibilityIcon from '@mui/icons-material/Visibility';
import discount from '../../assets/images/icons/discount.png';
import ErrorIcon from '@mui/icons-material/Error';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from 'components/Theme/ThemeProvider';
const BasicTabel = ({
  rows,
  searchOn,
  columns,
  statusKey,
  actionButton,
  amountKey,
  statusColorFun,
  borderRadius,
  rowHeight,
  verticalAlign
}) => {
  const [page, setPage] = React.useState(1);
  const [orderBy, setOrderBy] = React.useState();
  const [order, setOrder] = React.useState('asc');
  const [searchText, setSearchText] = React.useState('');
  const [showRecords, setShowRecords] = React.useState(10);
  const [newData, setNewData] = React.useState([]);
  const [newDataTemp, setNewDataTemp] = React.useState([]);
  const { currentTheme } = useTheme();
  const handleChangePage = (e, newPage) => {
    console.log('e', e);
    console.log('newPage', newPage);

    setPage(newPage);
  };

  const getSearchExpression = (i, searchArr, txt) => {
    var newSearchData = searchArr.map((item) => {
      return i[item].toLowerCase().includes(txt.toLowerCase());
    });
    console.log('newSearchData', newSearchData);
    return newSearchData;
  };

  // const handleSearch = (e) => {
  //   setSearchText(e);
  //   let tempData = newDataTemp?.filter((i) => {
  //     console.log(typeof(searchOn[2]))
  //     // console.log('input', e);
  //     return typeof (searchOn[0] == 'string')
  //       ? i[searchOn[0]]?.toLowerCase()?.includes(e.toLowerCase())
  //       : i[searchOn[0]]?.includes(e) || typeof (searchOn[1] == 'string')
  //       ? i[searchOn[1]]?.toLowerCase()?.includes(e.toLowerCase())
  //       : i[searchOn[1]]?.includes(e) || typeof (searchOn[2] == 'string')
  //       ? i[searchOn[2]]?.toLowerCase()?.includes(e.toLowerCase())
  //       : i[searchOn[2]]?.includes(e) || typeof (searchOn[3] == 'string')
  //       ? i[searchOn[3]]?.toLowerCase()?.includes(e.toLowerCase())
  //       : i[searchOn[3]]?.includes(e) || typeof (searchOn[4] == 'string')
  //       ? i[searchOn[4]]?.toLowerCase()?.includes(e.toLowerCase())
  //       : i[searchOn[4]]?.includes(e);
  //   });
  //   console.log('filtered Data', tempData);
  //   setNewData(tempData);
  // };

  const handleSearch = (e) => {
    setSearchText(e);

    let tempData = newDataTemp?.filter((i) => {
      const searchFields = searchOn.map((field) => {
        const fieldValue = i[field];
        const lowerCaseFieldValue = typeof fieldValue === 'string' ? fieldValue.toLowerCase() : fieldValue;
        return lowerCaseFieldValue?.includes(e.toLowerCase());
      });
      console.log('searchFields', searchFields);
      return searchFields.some((fieldResult) => fieldResult);
    });

    console.log('filtered Data', tempData);
    setNewData(tempData);
    setPage(1)
  };

  const handleChangeRowsPerPage = (event) => {
    setShowRecords(event.target.value);
    setPage(1);
  };
  const itemsPerPage = showRecords;
  const startIndex = (page - 1) * showRecords;
  const endIndex = Math.min(startIndex + itemsPerPage, newData.length);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    const isNumeric = !isNaN(a[orderBy]) && !isNaN(b[orderBy]);
    if (isNumeric) {
      return b[orderBy] - a[orderBy];
    } else {
      const aValue = a[orderBy] || '';
      const bValue = b[orderBy] || '';
      return bValue.localeCompare(aValue);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      alert('handleKeyPress');
    }
  };

  React.useEffect(() => {
    if(rows){
      setNewData(rows);
      setNewDataTemp(rows)
    }
  }, [rows])
  

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        style={{
          backgroundColor: currentTheme.bodyColor,
          borderRadius: borderRadius,
          width: '100%',
          top: '10%',
          border: '1px solid #ddd',
          height: 60
        }}
      >
        <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '97%' }}>
          <Grid
            style={{
              display: 'flex',
              marginLeft: '2%',
              alignItems: 'center',
              marginTop: '1%',
              width: '40%',

              fontFamily: 'Medium',
              fontSize: '13px',
              color: currentTheme.textColor
            }}
          >
            Shows
            <Select
              value={showRecords}
              onChange={handleChangeRowsPerPage}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: '150px',
                    width: '130px',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '9px'
                    // border: '0px'
                  }
                }
              }}
              size="small"
              style={{
                backgroundColor: '#f8f8f8',
                display: 'flex',
                marginLeft: '2%',
                minWidth: '30%',
                borderRadius: '9px',
                height: '33px'
              }}
            >
              <MenuItem value={10}>10 Records</MenuItem>
              <MenuItem value={25}>25 Records</MenuItem>
              <MenuItem value={50}>50 Records</MenuItem>
            </Select>
          </Grid>
          <Grid
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f8f8f8',
              borderRadius: '9px',
              height: '30px',
              paddingLeft: '10px',
              marginTop: '1%'
            }}
          >
            <TextField
              placeholder="Search"
              style={{
                width: '100%',
                height: '75%',
                borderRadius: '9px',
                border: 'none',
                outline: 'none'
              }}
              variant="standard"
              size="small"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              InputProps={{
                disableUnderline: true,

                endAdornment: (
                  <SearchIcon color="action" style={{ fontSize: '20px', marginLeft: '10px' }} />
                  // Adjust marginLeft as needed
                )
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          minWidth: '100%',
          // borderRadius: borderRadius,
          backgroundColor: currentTheme.bodyColor,
          color: currentTheme.textColor,
          borderRight: '1px solid #ddd',
          borderLeft: '1px solid #ddd'
          // border: '1px solid #E6E6E6'
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: currentTheme.bodyColor,
                    fontFamily: 'GilroyBold',
                    color: currentTheme.textColor
                  }}
                >
                  {column.label}
                  {column.id !== 'Action' && (
                    <span
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => handleKeyPress(e)}
                      onClick={() => handleRequestSort(column.id)}
                      style={{ cursor: 'pointer', fontSize: 11 }}
                    >
                      {orderBy === column.id ? (order === 'asc' ? ' ▲' : ' ▼') : ' ↕'}
                    </span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {stableSort(newData, getComparator(order, orderBy))
              .slice(startIndex, endIndex)
              .map((row) => {
                return (
                  <TableRow
                    key={columns.id}
                    hover
                    role="checkbox"
                    sx={{ position: 'relative', height: rowHeight, verticalAlign: verticalAlign }}
                  >
                    {columns?.map((column) => {
                      const value = row[column?.id];
                      const cellStyle = column?.id == statusKey ? { ...statusColorFun(value) } : {};

                      return (
                        <TableCell
                          key={column.id}
                          align={column?.align}
                          style={{
                            ...cellStyle,
                            fontFamily: 'Medium',
                            height: row?.offer ? '75px' : '50px',
                            verticalAlign: row?.offer ? 'top' : 'middle',
                            backgroundColor: row?.offer ? '#F2F8FC' : '',
                            position: 'relative',
                            color: currentTheme?.textColor
                          }}
                        >
                          {column.id === amountKey ? (
                            <>₹{value}</>
                          ) : column.id === actionButton.key ? (
                            <>{actionButton?.value}</>
                          ) : column?.format && typeof value === 'number' ? (
                            column?.format(value)
                          ) : (
                            value
                          )}

                          {column?.id === 'instock' && row?.instock < 15 ? (
                            <div
                              onMouseEnter={() =>
                                // alert('hello')
                                {
                                  return (
                                    <div style={{ width: '200px', backgroundColor: 'ButtonText', zIndex: 100 }}>
                                      <text>hello</text>
                                    </div>
                                  );
                                }
                              }
                              style={{
                                position: 'absolute',
                                bottom: row?.offer ? '40px' : '13px',
                                right: '20px'
                              }}
                            >
                              <ErrorIcon style={{ width: '15px', color: 'red' }} />
                            </div>
                          ) : (
                            <></>
                          )}
                        </TableCell>
                      );
                    })}
                    {row?.offer ? (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0px',
                          left: '30px',
                          height: '30px',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img alt="" src={discount} style={{ width: '20px' }} />
                        <text style={{ fontSize: 12, color: '#0174BF', fontFamily: 'light' }}>{row.offer}</text>
                      </div>
                    ) : (
                      <></>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomPagination
        page={page}
        onChange={handleChangePage}
        count={Math.ceil(newData.length / itemsPerPage)}
        TotalRecord={newData.length}
        startIndex={startIndex}
        endIndex={endIndex}
        backgroundColor={currentTheme.bodyColor}
        color={currentTheme.textColor}
      />
    </Box>
  );
};

const getStatusStyle = (status) => {
  switch (status) {
    case 'Order Placed':
      return { color: '#8260e0' };
    case 'Order Accepted':
      return { color: '#55ba51' };
    case 'GRN Pending':
      return { color: '#f4bc6a' };
    case 'Order Completed':
      return { color: '#0a79c1' };
    default:
      return { color: 'black' };
  }
};
export default BasicTabel;

BasicTabel.defaultProps = {
  rowHeight: '50px',
  verticalAlign: 'middle',
  rows: [
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
  ],
  columns: [
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
  ],
  statusKey: 'Order status',
  amountKey: 'Total Amount',
  actionButton: {
    key: 'Action',
    value: (
      <div style={{ backgroundColor: '#4cb748', color: '#fff', borderRadius: 20, minWidth: 55, fontSize: 12, cursor: 'pointer' }}>
        <VisibilityIcon style={{ fontSize: 10 }} />
        View
      </div>
    )
  },
  statusColorFun: getStatusStyle,
  // borderRadius: 5,
  borderRadius: '15px 15px 0px 0px'
};
