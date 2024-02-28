import React from 'react';
import '../../../components/dropdown/DropDown.css';
import '../../../modules/returnrequest/style/PurchaseReturnRequest.css';
import SubHeader from 'components/subHeader/SubHeader';
import PurchaseReturnRequestMainSearch from '../components/PurchaseReturnRequestMainSearch';
import PurchaseReturnRequestOrder from '../components/PurchaseReturnRequestOrder';
import { Grid } from '../../../../node_modules/@mui/material/index';
import { PurchaseReturnRequestStateProvider } from 'context/PurchaseReturnRequestProvider';

const PurchaseReturnRequestActiveComponent = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Grid container rowSpacing={2} columnSpacing={2.75} alignItems="center" justifyContent="space-between">
        <SubHeader title={'Return Request'} />
        <PurchaseReturnRequestMainSearch />
        <PurchaseReturnRequestOrder />
      </Grid>
    </div>
  );
};

const PurchaseReturnRequest = () => {
  return (
    <PurchaseReturnRequestStateProvider>
      <PurchaseReturnRequestActiveComponent />
    </PurchaseReturnRequestStateProvider>
  );
};

export default PurchaseReturnRequest;
