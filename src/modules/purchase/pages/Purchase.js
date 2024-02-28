import React from 'react';
import { Grid, Button } from '@mui/material';
import SubHeader from 'components/subHeader/SubHeader';
import PurchaseMainSearch from '../components/PurchaseMainSearch';
import PurchaseOrder from '../components/PurchaseOrder';
import { useNavigate } from 'react-router-dom';
import { PurchaseStateProvider, usePurchaseState } from 'context/PurchaseProvider';
import SelectWarehouseModalContent from '../components/SelectOutletModalContent';

const ActiveComponents = () => {
  const navigate = useNavigate();
  let { currentTheme, setIsOpen, getOutletMappingData } = usePurchaseState();
  // console.warn('getOutletMappingData===================15', getOutletMappingData?.data?.data[0]?.Id);

  const handleClickOnPlaceNew = () => {
    try {
      if (getOutletMappingData?.data?.data?.length > 1) {
        setIsOpen(true);
      } else {
     
        navigate('/dashboard/AddProducts', {     
          primaryOutlet: getOutletMappingData?.data?.data[0]?.Id
        });
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2.75}
      alignItems="center"
      justifyContent="space-between"
      style={{ backgroundColor: currentTheme.cardColor }}
    >
      <SubHeader
        title="Purchase Order"
        isRightEnable={true}
        rightComponent={
          <Button size="small" className="plusnewbtn_purchase" onClick={handleClickOnPlaceNew} variant="contained">
            + Place New
          </Button>
        }
      />
      <PurchaseMainSearch />
      <SelectWarehouseModalContent />
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
      <PurchaseOrder />
    </Grid>
  );
};

const Purchase = () => {
  return (
    <PurchaseStateProvider>
      <ActiveComponents />
    </PurchaseStateProvider>
  );
};

export default Purchase;
