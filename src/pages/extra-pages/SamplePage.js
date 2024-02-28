// material-ui
import { Typography } from '@mui/material';

// project import

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Set full height of the viewport
  }}
>
  <div style={{ textAlign: 'center' }}>
    <Typography variant="h4" color="error">
      404 - Page Not Found
    </Typography>
    <Typography variant="body1" style={{ marginTop: '16px' }}>
      Sorry, the page you are looking for does not exist.
    </Typography>
  </div>
</div>
);

export default SamplePage;
