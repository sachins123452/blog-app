import React, { useState } from 'react';
import { Grid, Button,Typography } from '@mui/material';
import ReusableCard from 'components/cards/ResuableCard';
import { useSalesChooseProductState } from 'context/SalesChooseProductProvider';
const SalesChooseProductCard=()=>{
    let { currentTheme, setIsOpenmodal, isOpenmodal } = useSalesChooseProductState();
       const data = [
      {
        'Invoice ID': 'ZW-INV23-001',
        'Order ID': 'ZW20230825-001',
        'Dispatch Date': '15 Aug 2023',
        'From Warehouse': 'ZW Abad | WH01 Corporate Park, Near Nirma University, Ahemedabaad 382482,Gujrat',
        'To Warehouse': 'Ahmedabaad | ZW-DIST-001 101,Vikasgurh road Paldi,Ahemdabaad 38007,Gujrat',
        'Delivery Info': 'Eicher Pro Truck GJ 01 LK 1188 Rajubai 7985108574'
      }
    ];
return(
    <>
<Grid style={{ marginBottom: '3%' }} /> 
       <ReusableCard
         height="202px"
         backgroundColor={currentTheme.bodyColor}
         content={
           <div>
             {/* {heading_Title && (
         <Typography variant="h6" sx={{ marginBottom: '1rem', textAlign: 'center' }}>
           {heading_Title}
         </Typography>
       )} */}
             {data && (
               <Grid container spacing={1} sx={{ marginBottom: '0.5rem', display: 'flex' }}>
                 {data.map((item, index) => (
                   <React.Fragment key={index}>
                     {Object.keys(item).map((key) => (
                       <Grid key={key} item xs={6} md={2}>
                         <Typography variant="body2" sx={{ fontWeight: 'bold', color: currentTheme.textColor }}>
                           {key}
                         </Typography>
                         <Typography variant="body2" sx={{ color: currentTheme.textColor }}>
                           {item[key]}
                         </Typography>
                       </Grid>
                     ))}
                   </React.Fragment>
                 ))}
               </Grid>
             )}
           </div>
         }
       />
     
     </>
) 
}
export default SalesChooseProductCard
 
