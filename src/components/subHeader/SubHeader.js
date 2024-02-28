import React from 'react';
// material-ui
import { Button, Grid, Typography } from '@mui/material';
import { useTheme } from 'components/Theme/ThemeProvider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../modules/sales/style/Sales.css';

const SubHeader = ({ title, isRightEnable, rightComponent, isLeftEnable, leftComponent, isRightEnableSecond, rightSecondComponent }) => {
  let { currentTheme } = useTheme();

  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2%' }}
    >
      <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {isLeftEnable && leftComponent}
        <Typography style={{ color: currentTheme.textColor }} variant="h5">
          {title}
        </Typography>
      </Grid>
      <Grid style={{ display: 'flex', flexDirection: 'row' }}>
        <div>{isRightEnable && rightComponent}</div>
        {isRightEnableSecond && rightSecondComponent}
      </Grid>
    </Grid>
  );
};

SubHeader.defaultProps = {
  title: 'Title',
  isRightEnable: false,
  rightComponent: (
    <Button
      size="small"
      // className="plusnewbtn_purchase"
      style={{ backgroundColor: '#0174bf', borderRadius: '7px' }}
      onClick={() => {
        alert('Please pass your onClick function');
      }}
      variant="contained"
    >
      + Place New
    </Button>
  ),
  isLeftEnable: false,
  leftComponent: (
    <Button
      size="small"
      variant="contained"
      style={{ borderRadius: 12, color: '#fff', backgroundColor: '#4CB748', minWidth: '40px', marginRight: '10px' }}
      onClick={() => alert('Please Make a function to handle the left button action')}
    >
      <ArrowBackIcon />
    </Button>
  ),
  isRightEnableSecond: false,
  rightSecondComponent: (
    <Button
      size="small"
      // startIcon={<PrintIcon />}
      sx={{ borderRadius: 2, backgroundColor: '#006caf' }}
      variant="contained"
      // onClick={handleSubmit}
    >
      Print
    </Button>
  )
};

export default SubHeader;
