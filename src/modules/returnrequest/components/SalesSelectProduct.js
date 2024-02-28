import SelectedProductTable from 'pages/order/components/SelectedProductTable';
import React from 'react';
import { Grid} from '@mui/material';
import compaln from '../../../assets/images/products/complan.png'
import { useNavigate } from 'react-router-dom';
const SalesSelectProduct = () => {
     const navigate = useNavigate();
  return (
    <Grid>
           <SelectedProductTable
            borderRadius={'10px'}
            product={data1}
            BtnSubtitle={'Return Products'}
            BtnTitle={'75 Products added'}
            onClick={() => navigate('/dashboard/ViewReturnProducts')}
          />
        </Grid>
  );
};

export default SalesSelectProduct;
const data1 = [
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
    }
  ];