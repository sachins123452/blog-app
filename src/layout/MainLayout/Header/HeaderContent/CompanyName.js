import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  Typography
} from '@mui/material';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useEffect, useState } from 'react';
import { getEmployeeOutletName } from 'helper/utils';




// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const [companyName,setCompanyName] = useState('')
  const {currentTheme} = useTheme();

  useEffect(()=>{
   (
    async()=>{
     let name = await getEmployeeOutletName();
     setCompanyName(name);
    }
   )()
  },[])

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <Stack direction="column" spacing={0} alignItems="flex-start" sx={{ p: 0.5 }}>
          <Typography variant="h5" color={currentTheme.textColor} >{companyName}</Typography>
          <Typography variant="subtitle2" color={currentTheme.textColor}>Saturday 07 August, 12:30:00 </Typography>
        </Stack>
    </Box>
  );
};

export default Profile;
