import React from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { Grid } from '../../../../../node_modules/@mui/material/index';
import MainSearch from 'components/main_search_header_bar/MainSearch';
import BasicTabel from 'pages/dashboard/BasicTabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import './BeatManagement.css';

const BeatManagement = () => {
  const { currentTheme } = useTheme();

  const navigate = useNavigate();

  const handleClickBeats = (data) => {
    console.log('Beat Management Component Line No 43 -->', data);
    navigate('/dashboard/ViewBeats');
  };

  return (
    <div className="maincontainer_beat_management" style={{ backgroundColor: currentTheme.cardColor, color: currentTheme.textColor }}>
      <div className="container_beat_management" style={{ color: currentTheme.textColor }}>
        Beat Management
      </div>
      <Grid xs={12}>
        <Grid mb={2}>
          <MainSearch />
        </Grid>
        <BasicTabel
          columns={columns}
          rows={rows}
          actionButton={{
            key: 'Action',
            value: (
              <div
                role="button"
                tabIndex={0}
                onClick={(row) => {
                  handleClickBeats(row);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    alert('onKeyDown!');
                  }
                }}
                className="btn_beat_management"
              >
                {' '}
                <VisibilityIcon style={{ fontSize: 10 }} /> View
              </div>
            )
          }}
        />
      </Grid>
    </div>
  );
};

export default BeatManagement;

const rows = [
  {
    '#': '1',
    beatname: 'Paldi',
    outlets: '175',
    territory: 'Ahemdabad North'
  },
  {
    '#': '2',
    beatname: 'Satellite',
    outlets: '120',
    territory: 'Gandhinagar South'
  },
  {
    '#': '3',
    beatname: 'Airport Road',
    outlets: '130',
    territory: 'Gandhinagar East'
  },
  {
    '#': '4',
    beatname: 'S.G.Highway',
    outlets: '275',
    territory: 'Ahemdabad West'
  }
];

const columns = [
  { id: '#', label: '#', minWidth: 140, align: 'start' },
  { id: 'beatname', label: 'Beat Name', minWidth: 150 },
  {
    id: 'outlets',
    label: 'Total Outlets',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'territory',
    label: 'Territory',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'Action',
    label: 'Action',
    align: 'end'
  }
];
