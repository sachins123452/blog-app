import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

// project import
import { drawerWidth } from 'config';
import { useTheme } from 'components/Theme/ThemeProvider';

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   // borderRight: `1px solid ${theme.palette.divider}`,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen
//   }),
//   overflowX: 'hidden',
//   boxShadow: "1px 0px 5px 0px rgba(0, 0, 0, 0.1)" ,
//   backgroundColor:'red'

// });

const OpenedMixin = (globalTheme) => {
  const { currentTheme, theme } = useTheme();
  return {
    width: drawerWidth,
    // borderRight: '1px solid #fff',
    // borderRight: `1px solid ${theme.palette.divider}`,
    transition: globalTheme.transitions.create('width', {
      easing: globalTheme.transitions.easing.sharp,
      duration: globalTheme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden',
    boxShadow: '1px 0px 5px 0px rgba(0, 0, 0, 0.1)',
    borderRight: theme == 'dark' ? '#000' : '1px 0px 5px 0px rgba(0, 0, 0, 0.1)',
    backgroundColor: currentTheme.bodyColor
  };
};

const ClosedMixin = (globalTheme) => {
  const { currentTheme, theme } = useTheme();
  return {
    transition: globalTheme.transitions.create('width', {
      easing: globalTheme.transitions.easing.sharp,
      duration: globalTheme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: 0,
    borderRight: 'none',
    boxShadow: globalTheme.customShadows.z1,
    border: theme == 'dark' ? 'none' : '1px 0px 5px 0px rgba(0, 0, 0, 0.1)',
    backgroundColor: currentTheme.bodyColor
  };
};

// ==============================|| DRAWER - MINI STYLED ||============================== //

const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...OpenedMixin(theme),
    '& .MuiDrawer-paper': OpenedMixin(theme)
  }),
  ...(!open && {
    ...ClosedMixin(theme),
    '& .MuiDrawer-paper': ClosedMixin(theme)
  })
}));

export default MiniDrawerStyled;
