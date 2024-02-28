import React from 'react';
import { Grid, Button } from '@mui/material';
import { SalesReturnRequestStateProvider, useSalesReturnRequestState } from 'context/SalesReturnRequestProvider';
import SubHeader from 'components/subHeader/SubHeader';
import SalesReturnRequestMainSearch from '../components/SalesReturnRequestMainSearch';
import SalesReturnRequestOrder from '../components/SalesReturnRequestOrder';
import SalesSearchRetailerReturnRequestModalContent from '../components/SalesSearchRetailerReturnRequestModalContent';
import SalesViewReturnRequestModal from '../components/SalesViewReturnRequestModalContent';

const SalesReturnRequestComponents = () => {
    let { currentTheme,setIsOpen } = useSalesReturnRequestState();
    const handleOpenModal = () => {
      setIsOpen(true);
    };
  return (
    <Grid height={'115vh'}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2.75}
        alignItems="center"
        justifyContent="space-between"
        style={{ backgroundColor: currentTheme.bodyColor }}
      >
        <SubHeader
          title="Return Request"
          isRightEnable={true}
          rightComponent={
            <Button size="small" className="plusnewbtn_sales" onClick={() => handleOpenModal()} variant="contained">
              + Create Return Request
            </Button>
          }
        />
        <SalesReturnRequestMainSearch/>
        <SalesSearchRetailerReturnRequestModalContent/>
        <SalesViewReturnRequestModal/>
        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        <SalesReturnRequestOrder />
      </Grid>
    </Grid>
  );
};
const SalesReturn = () => {
  return (
    <SalesReturnRequestStateProvider>
      <SalesReturnRequestComponents />
    </SalesReturnRequestStateProvider>
  );
};

export default SalesReturn;
