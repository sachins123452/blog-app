// material-ui
import { Box, FormControl, InputAdornment,Input } from '@mui/material';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';


// assets
import { SearchOutlined } from '@ant-design/icons';
import { useTheme } from 'components/Theme/ThemeProvider';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => {
  const {theme,toggleTheme} = useTheme();
 

return(
  <>

  <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }} style={{borderRadius:10,display:'flex',justifyContent:'flex-end'}}>
  <div style={{  fontSize: 14 ,paddingRight:10,paddingTop:5}}>
      {
      theme == 'dark' ? <button onClick={()=>toggleTheme()} style={{border:'none'}}> <LightMode /> </button >: <button onClick={()=>toggleTheme()} style={{border:'none'}}><DarkMode/></button>
      }
    </div>
    <FormControl sx={{ width: { xs: '100%', md: 224 } }} style={{borderRadius:10,backgroundColor:'#F6F6F6'}}>
      <Input
      disableUnderline={true}
      sx={{borderRadius:10,padding:'5px',paddingLeft:2}}
        size="small"
        id="header-search"
        endAdornment={
          <InputAdornment position="start" sx={{mr:1}}>
            <SearchOutlined />
          </InputAdornment>
        }
        
        aria-describedby="header-search-text"
        inputProps={{
          'aria-label': 'weight'
        }}
        placeholder="Search here..."
      />
    </FormControl>
  </Box>
  </>
)
      };

export default Search;
