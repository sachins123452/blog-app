import React from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { Grid, Button, Typography } from '../../../../../node_modules/@mui/material/index';
import BasicTabel from 'pages/dashboard/BasicTabel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './ViewBeats.css';

const ViewBeats = () => {
  const { currentTheme } = useTheme();

  const navigate = useNavigate();

  return (
    <div
      className="maincontaineeerrrrr"
      style={{
        backgroundColor: currentTheme.cardColor,
        color: currentTheme.textColor
      }}
    >
      <div className="containerrrsss">
        <Button size="small" variant="contained" className="btnstyleee" onClick={() => navigate('/dashboard/BeatManagement')}>
          <ArrowBackIcon />
        </Button>
        <Typography variant="h4">View Beat</Typography>
      </div>
      <Grid xs={12} container spacing={2} mt={2}>
        <BasicTabel columns={columns} rows={rows} />
      </Grid>
    </div>
  );
};

export default ViewBeats;

const rows = [
  {
    '#': '1',
    outletcode: 'Paldi',
    type: 'Paldi',
    outletname: 'Paldi',
    contactperson: '175',
    visitfrequency: '175'
  },
  {
    '#': '2',
    outletcode: 'Satellite',
    type: 'Satellite',
    outletname: 'Satellite',
    contactperson: '120',
    visitfrequency: '120'
  },
  {
    '#': '3',
    outletcode: 'Airport Road',
    type: 'Airport Road',
    outletname: 'Airport Road',
    contactperson: '130',
    visitfrequency: '130'
  },
  {
    '#': '4',
    outletcode: 'S.G.Highway',
    type: 'S.G.Highway',
    outletname: 'S.G.Highway',
    contactperson: '275',
    visitfrequency: '275'
  }
];

const columns = [
  { id: '#', label: '#', minWidth: 140, align: 'start' },
  { id: 'outletcode', label: 'Outlet Code', minWidth: 150 },
  {
    id: 'type',
    label: 'Type',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'outletname',
    label: 'Outlet Name',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'contactperson',
    label: 'Contact Person',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'visitfrequency',
    label: 'Visit Frequency',
    minWidth: 170,
    align: 'center'
  }
];
