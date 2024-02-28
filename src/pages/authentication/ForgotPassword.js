import React from 'react';
import { Grid } from '@mui/material';
import '../authentication/Login.css';
import ForgotPasswordForm from './auth-forms/ForgotPasswordForm';
// ================================|| LOGIN ||================================ //
import { useTheme } from 'components/Theme/ThemeProvider';
import { SERVER_URL } from 'helper/utils';
const ForgotPassword = () => {
  const {currentTheme}=useTheme()
  const serverURL = SERVER_URL();
  return (
    <div className="background-container">
      <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: '5rem' }}>
        <img
          src={`${serverURL}media?id=${currentTheme.LogoUrl}`}
          alt="DMS Logo"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '10rem'
          }}
        />
        <Grid item xs={12} sx={{}}>
         <ForgotPasswordForm/>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPassword;
