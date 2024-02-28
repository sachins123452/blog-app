import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';





const rows = [
    {
      '#': '1',
      'Transferred Date': '4 jan 2024',
      'Transferred Unit': '567',
      'Transferred From': 'Ahemdabad ZW-DISTWAR-001',
      'Transferred To': 'Gandhinagar ZW-DISTWAR-002 '
    },
    {
      '#': '2',
      'Transferred Date': '27 Dec 2023',
      'Transferred Unit': '123',
      'Transferred From': 'Gandhinagar ZW-DISTWAR-002',
      'Transferred To': 'Ahemdabad ZW-DISTWAR-001 '
    },
    {
      '#': '3',
      'Transferred Date': '15 Dec 2023',
      'Transferred Unit': '43',
      'Transferred From': 'Gandhinagar ZW-DISTWAR-002',
      'Transferred To': 'Ahemdabad ZW-DISTWAR-001 '
    },
    {
      '#': '4',
      'Transferred Date': '12 Dec 2023',
      'Transferred Unit': '57',
      'Transferred From': 'Ahemdabad ZW-DISTWAR-001',
      'Transferred To': 'Gandhinagar ZW-DISTWAR-002 '
    }
  ];
  const columns = [
    { id: '#', label: '#', minWidth: 140, align: 'left' },
    { id: 'Transferred Date', label: 'Transferred Date', minWidth: 150, align: 'left' },
    {
      id: 'Transferred Unit',
      label: 'Transferred Unit',
      minWidth: 160,
      align: 'left'

      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Transferred From',
      label: 'Transferred From',
      minWidth: 160,
      align: 'left'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Transferred To',
      label: 'Transferred To',
      minWidth: 160,
      align: 'left'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Action',
      label: 'Action',
      //  minWidth: 50,
      align: 'center'
      // format: (value) => value.toFixed(2),
    }
  ];

export default function StockTransferTable() {

    const navigate=useNavigate();
    
    const handleClick = () => {
        navigate('/dashboard/StockTransferDetail');
      };
  return (
    <Grid item xs={12} p={1}>
    <BasicTabel
    searchOn={['#','Transferred Unit','Transferred From','Transferred To']}
          rows={rows}
          columns={columns}
          actionButton={{
            key: 'Action',
            value: (
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  handleClick();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    alert('onKeyDown!');
                  }
                }}
                className="basictabletnstyle"
              >
                {' '}
                <VisibilityIcon style={{ fontSize: 10 }} /> View
              </div>
            )
          }}
        />
        </Grid>
  )
}
