import React from 'react';
import { Grid } from '@mui/material';
import AuthLogin from './auth-forms/AuthLogin';
import '../authentication/Login.css';
import { useTheme } from 'components/Theme/ThemeProvider';
import { SERVER_URL } from 'helper/utils';
// ================================|| LOGIN ||================================ //

const Login = () => {
  const { currentTheme } = useTheme();
  const serverURL = SERVER_URL();
  console.log('currentTheme.logo===>', `${serverURL}media?id=${currentTheme.LogoUrl}`);

  return (
    // <div className="background-container" style={{backgroundImage:currentTheme.backgroundImage}}>
    <div
      className="background-container"
      style={{ backgroundColor: currentTheme.bodyColor, backgroundImage: `url(${currentTheme?.backgroundImage})` }}
    >
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
          <AuthLogin />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
