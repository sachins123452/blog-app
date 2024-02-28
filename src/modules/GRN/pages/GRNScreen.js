import React from 'react';
import '../../../components/dropdown/DropDown.css';
import { Grid } from '../../../../node_modules/@mui/material/index';
import { useTheme } from 'components/Theme/ThemeProvider';
import '../../GRN/styles/GRNScreen.css';
import GrnMainSearch from 'modules/GRN/components/GrnMainSearch';
import GrnBasicTable from 'modules/GRN/components/GrnBasicTable';
import { GRNScreenStateProvider } from 'context/GRNScreenProvider';

const GrnScreenActiveComponent = () => {
  const { currentTheme } = useTheme();

  return (
    <div style={{ height: '100vh' }}>
      <Grid container rowSpacing={3} columnSpacing={2.75} alignItems="center" justifyContent="space-between">
        <Grid item md={1} lg={12} className="GoodTextCss_GRNScreen" style={{ color: currentTheme.textColor }}>
          <text className="GRNScreen_Heading_Styling">Goods recieved note - GRN</text>
        </Grid>
        <Grid item width={'100%'}>
          <GrnMainSearch />
        </Grid>
        <Grid width={400} item xs={12} md={7} lg={12}>
          <GrnBasicTable />
        </Grid>
      </Grid>
    </div>
  );
};

const GRNScreen = () => {
  return (
    <GRNScreenStateProvider>
      <GrnScreenActiveComponent />
    </GRNScreenStateProvider>
  );
};

export default GRNScreen;
