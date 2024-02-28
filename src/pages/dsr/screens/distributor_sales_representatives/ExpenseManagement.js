import React from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { Grid } from '../../../../../node_modules/@mui/material/index';
import MainSearch from 'components/main_search_header_bar/MainSearch';
import BasicTabel from 'pages/dashboard/BasicTabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CustomButton from 'components/buttons/CustomButton';
import './ExpenseManagement.css';

const ExpenseManagement = () => {
  const { currentTheme } = useTheme();

  return (
    <div
      className="maincontainer_expense_management"
      style={{
        backgroundColor: currentTheme.cardColor,
        color: currentTheme.textColor
      }}
    >
      <div className="container_expense_management" style={{ color: currentTheme.textColor }}>
        Expense Management
      </div>
      <Grid xs={12}>
        <Grid mb={2}>
          <MainSearch />
        </Grid>
        <BasicTabel
          columns={columns}
          rows={rows}
          checkboxButton={{
            key:'checkbox',
          value:(
            <div>
              <input type='checkbox'/>

            </div>
          )
        }}
          actionButton={{
            key: 'Action',
            value: (
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    alert('onKeyDown!');
                  }
                }}
                className="btn_expense_management"
              >
                {' '}
                <VisibilityIcon className="iconstyle_expense_management" /> View
              </div>
            )
          }}
        />
      </Grid>
      <div className="btncontainerstyling_expense_management">
        <div className="btnbetweenstyle_expense_management">
          <CustomButton
            backgroundColor={'#4cb748'}
            color={'#ffffff'}
            label={'Approve'}
            width={85}
            height={35}
            fontSize={13}
            borderRadius={5}
            fontWeight={600}
          />
        </div>
        <CustomButton
          backgroundColor={'#ff0000'}
          color={'#ffffff'}
          label={'Reject'}
          width={85}
          height={35}
          fontSize={13}
          borderRadius={5}
          fontWeight={600}
        />
      </div>
    </div>
  );
};

export default ExpenseManagement;

const rows = [
  {
    date: '11 jan 2024',
    beat: 'Paldi',
    requestedamount: '₹540',
    approvedamount: '-'
  },
  {
    date: '08 jan 2024',
    beat: 'Satellite',
    requestedamount: '₹773',
    approvedamount: '-'
  },
  {
    date: '08 jan 2024',
    beat: 'Airport Road',
    requestedamount: '₹345',
    approvedamount: '-'
  },
  {
    date: '29 Dec 2023',
    beat: 'S.G.Highway',
    requestedamount: '₹657',
    approvedamount: '-'
  }
];

const columns = [
  { id: 'checkbox', label: '', align: 'start' },
  { id: 'date', label: 'Date', minWidth: 150 },
  {
    id: 'beat',
    label: 'Beat',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'requestedamount',
    label: 'Requested Amount',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'approvedamount',
    label: 'Approved Amount',
    minWidth: 170,
    align: 'center'
  },
  {
    id: 'Action',
    label: 'Action',
    align: 'start'
  }
];
