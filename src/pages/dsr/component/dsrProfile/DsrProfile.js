import React from 'react';
import { Grid } from '../../../../../node_modules/@mui/material/index';
import user from '../../../../assets/images/users/user-3.jpg';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../dsrProfile/DsrProfileStyle.css';



export default function DsrProfile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'));
  return (
    
      
      <Grid direction="column" className="maincontainerrr">
        <Grid className="image" direction={isMobile ? 'column' : 'row'} style={{}}>
          <Grid style={{ display: 'flex', alignItems: 'center' }}>
            <Grid>
              <Stack spacing={2}>
                <Avatar src={user} sx={{ width: 130, height: 120, borderRadius: '10px', marginLeft: '15px' }} variant="square" />
              </Stack>
            </Grid>
          </Grid>
          <Grid container xs={12} className="profile" style={{}}>
            <Grid direction="column" style={{ marginLeft: '10px' }}>
              <Grid>
                <text style={{ fontSize: 18, color: '#353A40', fontFamily: 'Gilroybold' }}>Parmesh Puri</text>
              </Grid>
              <Grid>
                <text style={{ fontSize: 12, color: '#0174BF' }}>Distributor sales Executive</text>
              </Grid>
            </Grid>
            <div style={{ height: 1, backgroundColor: '#E6E6E6', width: '95%', alignSelf: 'center' }}></div>
            <Grid xs={12} container direction={'row'} className="profileDetails" style={{}}>
              <Grid item>
                <Grid>
                  <text style={{ fontSize: 12, marginLeft: 10 }}>Employee ID</text>
                </Grid>
                <Grid>
                  <text style={{ fontSize: 14, color: '#353A40', marginLeft: 10 }}>ZW12345</text>
                </Grid>
              </Grid>
              <Grid item>
                <Grid>
                  <text style={{ fontSize: 12, margin: 0 }}>Contact Number</text>
                </Grid>
                <Grid>
                  <text style={{ fontSize: 14, color: '#353A40' }}>1234567890</text>
                </Grid>
              </Grid>
              <Grid item>
                <Grid>
                  <text style={{ fontSize: 12, margin: 0 }}>Email address</text>
                </Grid>
                <Grid>
                  <text style={{ fontSize: 14, color: '#353A40' }}>parmesh@abc.com</text>
                </Grid>
              </Grid>
              <Grid item>
                <Grid>
                  <text style={{ fontSize: 12, margin: 0 }}>Reporting to</text>
                </Grid>
                <Grid>
                  <text style={{ fontSize: 14, color: '#353A40' }}>Rohit Sen - Zonal Manager</text>
                </Grid>
                <Grid>
                  <text style={{ fontSize: 14, color: '#353A40' }}>ROhit@zydus.in</text>
                </Grid>
              </Grid>
              <Grid item>
                <Grid>
                  <text style={{ fontSize: 12, margin: 0 }}>Mapped to</text>
                </Grid>
                <Grid>
                  <text style={{ fontSize: 14, color: '#353A40' }}>Ahemdabad</text>
                </Grid>
                <Grid>
                  <text style={{ fontSize: 14, color: '#353A40' }}>ZW-DISTWAR-001</text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    
  );
}
