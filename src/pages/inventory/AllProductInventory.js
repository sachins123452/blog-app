// import ReusableCard from 'components/cards/ResuableCard';
// import React, { useState } from 'react';
// import { Box, Stack, Typography, Button, Grid } from '@mui/material';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import MainSearch from 'components/main_search_header_bar/MainSearch';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import SelectedProductTable from '../order/components/SelectedProductTable';
// import { useNavigate } from 'react-router-dom';
// import BasicTabel from 'pages/dashboard/BasicTabel';
// import CustomButton from 'components/buttons/CustomButton';
// import InventoryBatchUnitModal from 'components/modals/contentmodal/InventoryBatchUnitModal';
// import ShippingLocationModal from 'components/modals/contentmodal/Shippinglocationmodal';
// import { useTheme } from 'components/Theme/ThemeProvider';
// import './AllProductInventory.css';

// const CardContent = () => {
//   // const navigate = useNavigate();
//   const [isOpen, setisOpen] = useState(false);

//   return (
//     <>
//       <Box className="cardcontetncontainer">
//         <div className="cardcontent">
//           <ShippingLocationModal showModal={isOpen} onClick={() => setisOpen(false)} />
//           <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
//             <LocalShippingIcon style={{ color: '#4CB748' }} />
//             <Typography variant="subtitle1" style={{ color: '#4CB748' }}>
//               Warehouse
//             </Typography>
//           </Stack>
//           <div style={{ textAlign: 'end' }}>
//             <Button size="small" variant="contained" onClick={() => setisOpen(true)} className="headbtn">
//               Change
//             </Button>
//           </div>
//         </div>
//         <div className="cardtextcont">
//           <Typography className="cardheader">Ahmedabad | ZW-DIST-001</Typography>
//           <Typography>101, Vikasgrauh road,Paldi Ahmedabad 380007, Gujarat</Typography>
//         </div>
//       </Box>
//     </>
//   );
// };

// export default function AddProductInventory() {
//   const { currentTheme } = useTheme();

//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = React.useState(false);
//   const handleOpenModal = () => {
//     setIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <div className="___main____container">
//         <Button size="small" variant="contained" className="btns_tyle_product_inventory" onClick={() => navigate('/dashboard/Inventory')}>
//           <ArrowBackIcon />
//         </Button>
//         <Typography variant="h4" p={1} style={{ color: currentTheme.textColor }}>
//           Choose Products
//         </Typography>
//       </div>
//       <Grid container spacing={2} className="_container_">
//         <Grid item md={9}>
//           <MainSearch height={'auto'} />
//         </Grid>
//         <Grid item md={3}>
//           <ReusableCard content={CardContent()} width={'265px'} borderRadius={15} maxWidth={'265px'} />
//         </Grid>
//       </Grid>

//       <Grid container spacing={2} className="allproductcontainer">
//         <Grid item md={9}>
//           <Typography variant="h5" p={2} style={{ color: currentTheme.textColor }}>
//             All Products
//           </Typography>
//           <BasicTabel
//             columns={columns}
//             rows={rows}
//             actionButton={{
//               key: 'action',
//               value: (
//                 <CustomButton
//                   label={'Return Request'}
//                   backgroundColor={'#0174bf'}
//                   fontSize={12}
//                   height={'100%'}
//                   borderRadius={5}
//                   onClick={() => {
//                     handleOpenModal();
//                   }}
//                 />
//               )
//             }}
//             pagination={true}
//           />
//         </Grid>
//         <Grid item md={3}>
//           <Typography variant="h5" p={2} style={{ color: currentTheme.textColor }}>
//             Selected Items - 5
//           </Typography>
//           <SelectedProductTable
//             borderRadius={'20px'}
//             onClick={() => navigate('/dashboard/ViewReturnProducts')}
//             BtnTitle={'Return Products'}
//             BtnSubtitle={'5 Products added'}
//           />
//         </Grid>
//         {<InventoryBatchUnitModal setIsOpen={setIsOpen} isOpen={isOpen} handleCloseModal={handleCloseModal} />}
//       </Grid>
//     </>
//   );
// }

// const rows = [
//   {
//     sku: 'ZWCO#01',
//     product: 'Complan - Nutrition and Health Drink Royale Chocolate',
//     uom: 'Box',
//     instock: 3
//   },
//   { sku: 'ZWCO#02', product: 'Complan Nutrition and Health Drink Pista Badam', uom: 'Box', instock: 2 },
//   {
//     sku: 'ZWCO#03',
//     product: 'Sugar Free Green Natural Sweetener and Sugar Subsitute',
//     uom: 'Box',
//     instock: 5
//   },
//   { sku: 'ZWCO#04', product: 'Sugar Free Gold Low Calorie Sweetner', uom: 'Box', instock: 3 },
//   {
//     sku: 'ZWCO#05',
//     product: 'Sugar Free Natura Low Calorie Sweetner -75g (100N*0.75g)',
//     uom: 'Box',
//     instock: 2
//   },
//   {
//     sku: 'ZWCO#06',
//     product: "Sugar Free D'lite Quinoa & almonds Dark Chocolate Bar",
//     uom: 'Pack',
//     instock: 15
//   },
//   {
//     sku: 'ZWCO#07',
//     product: "Sugar Free D'lite Dark Assorted Chocolate Gift Pack",
//     uom: 'Box',
//     instock: 85
//   },
//   { sku: 'ZWCO#08', product: 'Sugar Free Green Natural Stevia Jar (200g)', uom: 'Jar', instock: 70 },
//   { sku: 'ZWCO#09', product: 'Sugar Free Natura - Sweeting Drops 10ml', uom: 'Pack', instock: 45 },
//   { sku: 'ZWCO#10', product: 'Sugar Free Green 100% Natural Sweetener', uom: 'Pouch', instock: 96 }
// ];

// const columns = [
//   {
//     id: 'sku',
//     align: 'left',
//     disablePadding: false,
//     label: 'SKU'
//   },
//   {
//     id: 'product',
//     align: 'left',
//     disablePadding: true,
//     label: 'Product'
//   },
//   {
//     id: 'uom',
//     align: 'left',
//     disablePadding: false,
//     label: 'UOM'
//   },
//   {
//     id: 'instock',
//     align: 'left',
//     disablePadding: false,
//     label: 'In-Stock'
//   },
//   {
//     id: 'action',
//     align: 'center',
//     disablePadding: false,
//     label: 'Action'
//   }
// ];
