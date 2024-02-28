// material-ui
import { Box} from '@mui/material';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <></>
          // <Typography key={item.id} variant="h6" color="error" align="center">
          //   Fix - Navigation Group
          // </Typography>
        );
    }
  });

  return <Box sx={{width:'95%'}}>{navGroups}</Box>;
};

export default Navigation;
