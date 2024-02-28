import React from 'react';
import '../../../../src/components/dropdown/DropDown.css';
import { Grid} from '@mui/material';
import { useTheme } from 'components/Theme/ThemeProvider';
import {SalesInvoiceStateProvider } from 'context/SalesInvoiceProvider';
import SubHeader from 'components/subHeader/SubHeader';
import SalesInvoiceMainSearch from '../components/SalesInvoiceMainSearch';
import SalesInvoiceOrder from '../components/SalesInvoiceOrder';
import SalesPendingInvoice from '../components/SalesPendingInvoiceModal';

const Invoice = () => {
  const { currentTheme } = useTheme();

  const InvoiceComponents = () => {
    return (
      <Grid height={'100vh'}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2.75}
          alignItems="center"
          justifyContent="space-between"
          style={{ backgroundColor: currentTheme.bodyColor }}
        >
          <SubHeader title="Invoices" isRightEnable={false} />
          <SalesInvoiceMainSearch />
          <SalesPendingInvoice />
    
          <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
          <SalesInvoiceOrder />
        </Grid>
      </Grid>
    );
  };

  return (
    <SalesInvoiceStateProvider>
      <InvoiceComponents />
    </SalesInvoiceStateProvider>
  );
 
};

export default Invoice;
