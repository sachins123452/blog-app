import React, { useState } from 'react';
import { Box, Stack, Typography, Button, Grid, Input } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReusableCard from 'components/cards/ResuableCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import complan from '../../assets/images/products/complan.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SubTotalCart from 'components/subTotalCart/SubTotalCart';
import { useNavigate } from 'react-router-dom';
import PurchaseSchemaOffer from 'components/purchase_schema_offer/PurchaseSchemaOffer';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import Orderplacedmodal from 'components/modals/contentmodal/Orderplacedmodal';
import offer from '../../assets/images/icons/offer.png';
import './MyCartStyle.css';
import { useTheme } from 'components/Theme/ThemeProvider';

export const OrderTable = () => {
  const { currentTheme } = useTheme();

  return (
    <Grid>
      <TableContainer className="tableContainer">
        <Table>
          <TableHead className="tableHead" style={{ backgroundColor: currentTheme.cardColor }}>
            <TableRow className="headerRow" style={{ backgroundColor: currentTheme.cardColor }}>
              {tableHead.map((column) => (
                <TableCell align={column.align} key={column.id} style={{ color: currentTheme.textColor }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: currentTheme.cardColor }}>
            {tableContent.map((row) => (
              <TableRow hover className="contentRow" key={row.id}>
                <TableCell className="contentCell" direction="row" style={{ color: currentTheme.textColor }}>
                  <img alt="" src={row.image} className="contentImage" />
                  <div style={{ marginLeft: '20px', backgroundColor: currentTheme.cardColor, color: currentTheme.textColor }}>
                    {row.offer ? (
                      <div>
                        <img alt="" src={offer} style={{ width: '25px' }} />
                        <text
                          style={{
                            color: '#0174BF',
                            fontFamily: 'GilroyExtraBoldItalic',
                            marginLeft: '5px',
                            color: currentTheme.textColor
                          }}
                        >
                          {row.offer}
                        </text>
                      </div>
                    ) : (
                      <></>
                    )}
                    <text style={{ fontFamily: 'GilroyBold', color: currentTheme.textColor }}>{row.product}</text>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      {row.uom ? (
                        <div className="uomDiv">
                          <div className="uomBox">
                            <text className="uomText" style={{ color: currentTheme.textColor }}>
                              {row.uom}
                            </text>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {row.size ? (
                        <div className="sizeDiv">
                          <text className="sizeText" style={{ color: currentTheme.textColor }}>
                            {row.size}
                          </text>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ border: '0px' }}>
                  {row.offer ? (
                    <text style={{ textDecoration: 'line-through', color: currentTheme.textColor }}>{row.price}</text>
                  ) : (
                    <div style={{ color: currentTheme.textColor }}>{row.price}</div>
                  )}
                </TableCell>
                <TableCell style={{ textAlign: 'center', border: '0px' }}>
                  {row.qty ? <input type="text" className="tableInput" defaultValue={row.qty} /> : <></>}
                </TableCell>
                <TableCell style={{ border: '0px', color: currentTheme.textColor }}>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

const ShippingCard = () => {
  const { currentTheme } = useTheme();
  return (
    <>
      <Box className="shippingCard" style={{ backgroundColor: currentTheme.cardColor }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center" className="boxStack" sx={{ p: '10px' }}>
            <LocalShippingIcon className="shippingIcon" />
            <Typography variant="subtitle1" style={{ color: currentTheme.textColor }}>
              Shipped to
            </Typography>
          </Stack>
          <div style={{ textAlign: 'end' }}>
            <Button size="small" variant="contained" className="shippingCardButton">
              Change
            </Button>
          </div>
        </div>
        <div className="shippingCardContent" style={{ color: currentTheme.textColor }}>
          <Typography style={{ fontSize: '15px', fontFamily: 'SemiBold' }}>Ahmedabad | ZW-DIST-001</Typography>
          <Typography style={{ fontSize: '12px', fontFamily: 'Medium' }}>101, Vikasgrauh road,Paldi Ahmedabad 380007, Gujarat</Typography>
        </div>
      </Box>
    </>
  );
};

const DeliveryDate = () => {
  const [startDate, setStartDate] = useState();
  const { currentTheme } = useTheme();

  const onChange = (e) => {
    setStartDate(e.target.value);
  };

  return (
    <>
      <Box className="deliveryBox" style={{ backgroundColor: currentTheme.cardColor }}>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ border: '0px solid transparent', backgroundColor: currentTheme.cardColor, color: currentTheme.textColor }}
            InputProps={{
              disableUnderline: true,
              border: '0px'
            }}
            autoFocus={false}
            // label={}
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
          />
        </LocalizationProvider> */}
        <input
          type="date"
          value={startDate}
          onChange={onChange}
          style={{
            outline: 'none',
            border: 'none',
            backgroundColor: currentTheme.cardColor,
            color: currentTheme.textColor,
            // Adjust the following properties for the calendar icon
            WebkitTextFillColor: currentTheme.textColor, // Text color
            WebkitCalendarPickerIconColor: currentTheme.textColor // Calendar icon color
          }}
        />
        <Input disableUnderline={true} className="deliveryBoxRemark" placeholder="Delivery Remark" placeholderColor="#000" />
      </Box>
    </>
  );
};

function MyCart() {
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();
  const { currentTheme } = useTheme();
  return (
    <Grid container>
      <Grid className="mycartBox">
        <Button size="small" variant="contained" className="mycartButton" onClick={() => navigate('/dashboard/AddProducts')}>
          <ArrowBackIcon />
        </Button>
        <Typography variant="h3" style={{ padding: 2, color: currentTheme.textColor }}>
          My Cart
        </Typography>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item md={8.5}>
          <OrderTable />
          <div style={{ width: '100%', marginTop: '15px' }}>
            <Typography variant="h4" style={{ padding: 2 }}>
              Schema & offers
            </Typography>
            <PurchaseSchemaOffer containerwidth={'100%'} />
          </div>
        </Grid>
        <Grid item md={3.5}>
          <SubTotalCart />
          <ReusableCard
            boxShadow={currentTheme.cardColor}
            backgroundColor={currentTheme.cardColor}
            content={ShippingCard()}
            borderRadius={15}
            marginTop={20}
          />
          <ReusableCard
            boxShadow={currentTheme.cardColor}
            backgroundColor={currentTheme.cardColor}
            content={DeliveryDate()}
            borderRadius={15}
            marginTop={20}
          />

          <Button onClick={() => setisOpen(true)} size="small" variant="contained" className="mycartPlaceOrderButton" label="Mycart">
            <span style={{ fontSize: 14 }}>Confirm & Place Order</span>
          </Button>
        </Grid>
      </Grid>
      <Grid></Grid>
      <Orderplacedmodal showModal={isOpen} />
    </Grid>
  );
}

export default MyCart;

const tableHead = [
  {
    id: 'product',
    align: 'left',
    disablePadding: true,
    label: 'Product'
  },
  {
    id: 'price',
    align: 'left',
    disablePadding: false,
    label: 'Price(PTD)'
  },
  {
    id: 'qty',
    align: 'center',
    disablePadding: false,
    label: 'Quantity'
  },
  {
    id: 'total',
    align: 'left',
    disablePadding: false,
    label: 'Total'
  }
];

const tableContent = [
  {
    id: 1,
    image: complan,
    size: '1KG',
    uom: 'Box',
    product: 'Complan Nutrition and Health Drink Pista Badam',
    price: 308,
    qty: 50,
    total: '15,400'
  },
  { id: 2, image: complan, size: '1KG', uom: 'Jar', product: 'Suger-Free Gold Low Calorie Sweetner', price: 137, qty: 10, total: '1,370' },
  {
    id: 3,
    image: complan,
    size: '1KG',
    uom: 'Box',
    product: 'Suger-Free Green 100% Natural Sweetner',
    price: 312,
    qty: 15,
    total: '4,680',
    offer: 'In-Offer,Free'
  },
  {
    id: 4,
    image: complan,
    size: '1KG',
    uom: 'Box',
    product: 'Suger-Free Green 100% Natural Sweetner',
    price: 312,
    qty: 15,
    total: '4,680',
    offer: ''
  },
  { id: 5, image: complan, size: '1KG', uom: 'Box', product: 'Suger-Free Green 100% Natural Sweetner', price: 312, qty: 15, total: '4,680' }
];
