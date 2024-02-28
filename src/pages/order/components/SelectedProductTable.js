import React, { useRef } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Grid } from '../../../../node_modules/@mui/material/index';
import compaln from '../../../assets/images/products/complan.png';
// import NumericInput from '../../../components/numericinput/NumericInput';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import '../components/SelectedProductTable.css';
import { useTheme } from 'components/Theme/ThemeProvider';

function SelectedProductTable({ product, borderRadius, BtnSubtitle, BtnTitle, onClick }) {
  const { currentTheme } = useTheme();
  const containerRef = useRef(null);
  const handleScroll = () => {
    // Hide scrollbar when scrolling
    if (containerRef.current) {
      containerRef.current.style.overflowY = 'hidden';
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <Box className="mainContainer" style={{ borderRadius: borderRadius, backgroundColor: currentTheme.cardColor }} ref={containerRef}>
        <Stack
          direction="column"
          spacing={1}
          sx={{ p: 0.5, maxHeight: '460px', minHeight: '350px', overflowY: 'scroll' }}
          onScroll={handleScroll}
        >
          {product.map((item) => {
            return (
              <Grid key={item.id} style={{ padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <img alt="" src={item.img} style={{ width: '60px', height: '50px' }} />
                  <Typography style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: currentTheme.textColor }}>{item.title}</span>
                    <span style={{ lineHeight: 2, fontSize: 14, color: currentTheme.textColor }}>₹ {item.mrp}</span>
                    <div style={{ marginLeft: '10px' }}>
                      <input type="text" className="input" defaultValue={0} />
                    </div>
                  </Typography>
                </div>
                <div style={{ height: 1, backgroundColor: '#D8D8D8', width: '100%', marginTop: '5px' }}></div>
              </Grid>
            );
          })}
        </Stack>
        <Button className="mycartButton1" onClick={onClick} size="small" variant="contained">
          <ShoppingCartIcon />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, padding: '5px', marginLeft: '10px' }}>
            <span style={{ fontSize: 14, color: '#FFF' }}>{BtnTitle}</span>
            <span style={{ fontSize: 10, color: '#FFF' }}>{BtnSubtitle}</span>
          </div>
        </Button>
      </Box>
    </>
  );
}

export default SelectedProductTable;

SelectedProductTable.defaultProps = {
  borderRadius: '15px',
  // onClick:onClick,
  BtnTitle: 'MyCart',
  BtnSubtitle: '75 selected items',
  product: [
    {
      id: 1,
      title: 'Complan Nutrition and Health Drink Pista Badam',
      mrp: 308,
      img: compaln
    },
    {
      id: 2,
      title: 'Sugar Free Gold Low Calorie Sweetner',
      mrp: 137,
      img: compaln
    },
    {
      id: 3,
      title: 'Sugar Free 100% Green Natural Sweetner',
      mrp: 312,
      img: compaln
    },
    {
      id: 4,
      title: 'Sugar Free 100% Green Natural Sweetner',
      mrp: 312,
      img: compaln
    },
    {
      id: 5,
      title: 'Sugar Free 100% Green Natural Sweetner',
      mrp: 312,
      img: compaln
    },
    {
      id: 6,
      title: 'Sugar Free 100% Green Natural Sweetner',
      mrp: 312,
      img: compaln
    }
  ]
};
