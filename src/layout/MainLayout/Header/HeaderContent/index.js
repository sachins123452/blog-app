// material-ui
import { Box, useMediaQuery, } from '@mui/material';

import React from 'react';
// project import
// import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import CompanyName from './CompanyName';
import Search from './Search';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = ({currentTheme}) => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
    {!matchesXs && <CompanyName style={{color:currentTheme.textColor}}/>}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      {/* {!matchesXs && <ThemeChanger/>} */}
      {!matchesXs && <Search />}

      <Notification />
      {!matchesXs && <Profile/>}
      {matchesXs && <MobileSection/>}
    </>
  );
};

export default HeaderContent;
