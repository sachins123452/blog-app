// import React, { useState } from 'react';

// // material-ui
// import { Button, Grid, Typography } from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';

// // assets
// import BasicTabel from 'pages/dashboard/BasicTabel';
// import MainSearch from 'components/main_search_header_bar/MainSearch';
// import DropDown from 'components/dropdown/DropDown';
// import './StockTransfer.css';
// import { useTheme } from 'components/Theme/ThemeProvider';

// // ==============================|| DASHBOARD - DEFAULT ||============================== //

// const StockTransfer = () => {
//   const { currentTheme } = useTheme();

//   // const [isOpen, setisOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(null);
//   const options = [
//     { label: 'sachin', id: 1 },
//     { label: 'hemu', id: 2 },
//     { label: 'raju', id: 3 },
//     { label: 'Gullu', id: 4 }
//   ];
//   const handleValueChange = (selectedItem) => {
//     console.log('Selected Item:', selectedItem);
//   };

//   const rows = [
//     {
//       '#': '1',
//       'Transferred Date': '4 jan 2024',
//       'Transferred Unit': '567',
//       'Transferred From': 'Ahemdabad ZW-DISTWAR-001',
//       'Transferred To': 'Gandhinagar ZW-DISTWAR-002 '
//     },
//     {
//       '#': '2',
//       'Transferred Date': '27 Dec 2023',
//       'Transferred Unit': '123',
//       'Transferred From': 'Gandhinagar ZW-DISTWAR-002',
//       'Transferred To': 'Ahemdabad ZW-DISTWAR-001 '
//     },
//     {
//       '#': '3',
//       'Transferred Date': '15 Dec 2023',
//       'Transferred Unit': '43',
//       'Transferred From': 'Gandhinagar ZW-DISTWAR-002',
//       'Transferred To': 'Ahemdabad ZW-DISTWAR-001 '
//     },
//     {
//       '#': '4',
//       'Transferred Date': '12 Dec 2023',
//       'Transferred Unit': '57',
//       'Transferred From': 'Ahemdabad ZW-DISTWAR-001',
//       'Transferred To': 'Gandhinagar ZW-DISTWAR-002 '
//     }
//   ];
//   const columns = [
//     { id: '#', label: '#', minWidth: 140, align: 'left' },
//     { id: 'Transferred Date', label: 'Transferred Date', minWidth: 150, align: 'left' },
//     {
//       id: 'Transferred Unit',
//       label: 'Transferred Unit',
//       minWidth: 160,
//       align: 'left'

//       // format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'Transferred From',
//       label: 'Transferred From',
//       minWidth: 160,
//       align: 'left'
//       // format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'Transferred To',
//       label: 'Transferred To',
//       minWidth: 160,
//       align: 'left'
//       // format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'Action',
//       label: 'Action',
//       //  minWidth: 50,
//       align: 'center'
//       // format: (value) => value.toFixed(2),
//     }
//   ];

//   // const handleClick = () => {
//   //   navigate('/dashboard/StockTransferDetail');
//   // };

//   return (
//     <Grid container rowSpacing={2} columnSpacing={2.75} className="main_____container" style={{ backgroundColor: currentTheme.cardColor }}>
//       <Grid item xs={12} md={12} lg={12} className="container">
//         <Typography variant="h5" style={{ color: currentTheme.textColor }}>
//           Stock Transfer
//         </Typography>

//         <Button
//           size="small"
//           onClick={() => {
//             // navigate('/dashboard/CreateStockTransfer');
//           }}
//           variant="contained"
//           style={{ backgroundColor: '#0174bf' }}
//         >
//           + Create New
//         </Button>
//       </Grid>
//       <Grid item className="main_content_page">
//         <MainSearch
//           height={'60px'}
//           content={
//             <div className="dropdowncontainer">
//               <DropDown
//                 onValueChange={handleValueChange}
//                 options={options}
//                 selectedValue={selectedValue}
//                 setSelectedValue={setSelectedValue}
//                 placeholder="Select an option"
//                 paddingVertical={0}
//                 radius={10}
//                 itemHeight={21}
//                 left={null}
//                 right={null}
//               />
//             </div>
//           }
//         />
//       </Grid>

//       {/* <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} /> */}

//       {/* row 2 */}
//       <Grid item xs={12} p={1}>
//         <BasicTabel
//           rows={rows}
//           columns={columns}
//           actionButton={{
//             key: 'Action',
//             value: (
//               <div
//                 role="button"
//                 tabIndex={0}
//                 onClick={() => {
//                   // handleClick();
//                 }}
//                 onKeyDown={(event) => {
//                   if (event.key === 'Enter' || event.key === ' ') {
//                     alert('onKeyDown!');
//                   }
//                 }}
//                 className="basictabletnstyle"
//               >
//                 {' '}
//                 <VisibilityIcon style={{ fontSize: 10 }} /> View
//               </div>
//             )
//           }}
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default StockTransfer;
