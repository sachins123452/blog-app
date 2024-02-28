import React from 'react';
import { Grid,Typography } from '@mui/material';
import DsrProfile from '../component/dsrProfile/DsrProfile';
import DonutChart from 'components/charts/DonutChart';
import ArrowBack from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import DataChart from 'components/charts/DataChart';
import MainCard from 'components/MainCard';
import { useTheme } from 'components/Theme/ThemeProvider';
import DropDown from 'components/dropdown/DropDown';
import { useNavigate } from 'react-router-dom';
export default function DSR360View() {
  const navigate=useNavigate()
  const { currentTheme } = useTheme();

  const handleClick=()=>{
    navigate('/dashboard/DSR');
  }
  return (
    <Grid container direction={"column"}  xs={12} >
      <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={handleClick}>
        <Grid sx={{ display: 'flex', alignItems: 'center' }} >
          <IconButton style={{ backgroundColor: '#4cb748', width: '3rem', height: '2rem', borderRadius: 8, textAlign: 'center' }}>
            <ArrowBack sx={{ color: '#fff', fontSize: '1.5rem' }} />
          </IconButton>
          <Grid sx={{ fontSize: 16, fontFamily: 'GilroyBold', margin: '0.9rem' }}>View DSR 360</Grid>
        </Grid>
      </Grid>
      <Grid item>
      <DsrProfile/>
      </Grid>
      <Grid item xs={12} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}} >
      <Grid item xs={6} md={6} lg={5.9}>
      <Grid container alignItems="center" justifyContent="space-between">
          <Grid item style={{flexDirection:'row',display:'flex',justifyContent:'space-between',width:'100%',marginLeft:5}}>
            <Grid color={currentTheme.textColor} style={{display:'flex',alignItems:'center', fontFamily: 'GilroyBold', fontSize: 17}}>
              Expense overview
            </Grid>
            <Grid style={{marginRight:"-6px"}}>
            <DropDown backgroundColor='#4cb748' color='#fff'/>
            </Grid>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 0.5 }} style={{ backgroundColor: currentTheme.cardColor }}>
          <DataChart />
        </MainCard>
      </Grid>

      <Grid item xs={5.5} md={5} lg={5.9}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item style={{flexDirection:'row',display:'flex',justifyContent:'space-between',width:'100%'}}>
            <Grid color={currentTheme.textColor} style={{display:'flex',alignItems:'center', fontFamily: 'GilroyBold', fontSize: 17}}>
              Sales order overview
            </Grid>
            <Grid style={{marginRight:"-6px"}}>
            <DropDown backgroundColor='#4cb748' color='#fff'/>
            </Grid>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 0.5 }} style={{ backgroundColor: currentTheme.cardColor }}>
          <DataChart />
        </MainCard>
      </Grid>
      </Grid>
      <Grid item xs={12} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}} >
      <Grid item xs={6} md={6} lg={5.9}>
      <Grid container alignItems="center" justifyContent="space-between">
          <Grid item style={{flexDirection:'row',display:'flex',justifyContent:'space-between',width:'100%',marginLeft:5}}>
            <Grid color={currentTheme.textColor} style={{display:'flex',alignItems:'center', fontFamily: 'GilroyBold', fontSize: 17}}>
             Beat Coverage
            </Grid>
            <Grid style={{marginRight:"-6px",display:'flex',flexDirection:'row'}}>
            <DropDown width='150px' backgroundColor='#4cb748' color='#fff'/>
            <DropDown  width='200px' backgroundColor='#4cb748' color='#fff'/>
            </Grid>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 0.5 }} style={{ backgroundColor: currentTheme.cardColor }}>
          <DonutChart/>
        </MainCard>
      </Grid>

   
      </Grid>
    </Grid>
  );
}
