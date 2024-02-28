import React from 'react';
import { Grid, Button } from '@mui/material';
import SubHeader from 'components/subHeader/SubHeader';
import { SalesStateProvider, useSalesState } from 'context/SalesProvider';
import SalesOrder from '../components/SalesOrder';
import SalesMainSearch from '../components/SalesMainSearch';
import SalesSearchRetailer from '../components/SalesSearchRetailer';
import SalesSecondaryModal from '../components/SalesSecondaryModal';

const SalesComponents = () => {
  let { currentTheme, setIsOpen } = useSalesState();
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
          title="Sales Orders"
          isRightEnable={true}
          rightComponent={
            <Button size="small" className="plusnewbtn_sales" onClick={() => handleOpenModal()} variant="contained">
              + Place New
            </Button>
          }
        />
        <SalesMainSearch />
        <SalesSearchRetailer />
        <SalesSecondaryModal />
        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        <SalesOrder />
      </Grid>
    </Grid>
  );
};
const Sales = () => {
  return (
    <SalesStateProvider>
      <SalesComponents />
    </SalesStateProvider>
  );
};

export default Sales;
