// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';
import Logo from 'components/Logo/Logo';
import DrawerHeaderStyled from '../DrawerHeader/DrawerHeaderStyled';

// import PropTypes from 'prop-types';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { Stack ,Chip} from '@mui/material';
import { useTheme } from 'components/Theme/ThemeProvider';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  const {currentTheme} = useTheme();
  return (
    <>
    <SimpleBar
      sx={{
        '& .simplebar-content': {
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
        }
      }}
    >
      <Navigation />
      <NavCard />
      </SimpleBar>

      <DrawerHeaderStyled>
        <Stack direction="column" spacing={1} alignItems="center">
          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:currentTheme.textColor,fontSize:18}}>
            Powered By 
          </p>
          {/* <Logo /> */}
          <Chip
          label={'TrueSales'}
          size="small"
          sx={{ height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
          component="a"
          href="https://truesales.ai/"
          target="_blank"
          clickable
        />
        </Stack>
      </DrawerHeaderStyled>
      </>);
};

export default DrawerContent;
