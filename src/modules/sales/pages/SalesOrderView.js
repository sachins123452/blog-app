import React from 'react';
import { Grid } from '@mui/material';
import CustomStepper from 'components/Stepper/Stepper';
import { SalesOrderViewStateProvider, useSalesOrderViewState } from 'context/SalesOrderViewProvider';
import SubHeader from 'components/subHeader/SubHeader';
import SalesOrderViewOrder from '../components/SalesOrderViewOrder';
import SalesOrderViewCard from '../components/SalesOrderViewCard';

export default function SalesOrderView() {
  
  const SalesOrderViewComponents = () => {
    const { currentTheme } = useSalesOrderViewState();
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
          <SubHeader title="Order View" isRightEnable={false} />
          <Grid item md={12}>
            <CustomStepper CompletedSteps={2} />
          </Grid>
          <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row', marginTop: '15px', justifyContent: 'space-between' }}>
            <Grid item md={8.5}>
              <SalesOrderViewOrder />
            </Grid>
            <Grid item md={3.5}>
              <SalesOrderViewCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return (
    <SalesOrderViewStateProvider>
      <SalesOrderViewComponents />
    </SalesOrderViewStateProvider>
  );
}
