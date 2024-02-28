import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorCode = '404', errorMessage = 'Page not found' }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4" color="error">
        Error {errorCode}
      </Typography>
      <Typography variant="body1" style={{ marginTop: '16px' }}>
        {errorMessage}
      </Typography>
      <Button variant="contained" component={Link} to="/" style={{ marginTop: '20px' }}>
        Go to Home
      </Button>
    </div>
  </div>
);

export default ErrorPage;
