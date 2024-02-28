import PropTypes from 'prop-types';
import { Chip, Grid, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import { useTheme } from 'components/Theme/ThemeProvider';

const AnalyticEcommerce = ({ color, count, percentage, isLoss, icon, title }) => 
{ const {currentTheme} = useTheme()
  return(
  <MainCard contentSX={{ p: 1.5, height: 80, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' ,backgroundColor:currentTheme.cardColor }}>
    <Stack spacing={0.1} style={{ height: '100%' }}>
      <Grid container alignItems="center" style={{ height: '100%' }}>
        <Grid item xs={3}>
          {icon && (
            <Typography variant="h4" color="inherit" sx={{  }}>
              {icon}
            </Typography>
          )}
        </Grid>

        <Grid item container alignItems="center" xs={9}>
          <Typography variant="h4"  color={currentTheme.textColor}>
            {count}
          </Typography>

          {percentage && (
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                  {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1, pl: 1,borderRadius: 8, height: '20px',fontSize:11 }}
              size="small"
            />
          )}
          <Typography variant="h6"  sx={{ fontSize: 11,color:'#CDCDCD',ml:0.4 }}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
   </MainCard>
)
};

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  icon: PropTypes.node
};

AnalyticEcommerce.defaultProps = {
  color: 'primary'
};

export default AnalyticEcommerce;
