import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import SelectedProductTable from '../order/components/SelectedProductTable';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Stack, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import ReusableCard from 'components/cards/ResuableCard';
import CustomButton from 'components/buttons/CustomButton';
import AmountTabel from 'pages/outletMaster/AmountTabel';
// import GrnConfirmationmodal from 'components/modals/GrnConfirmationmodal';
import Orderplacedmodal from 'components/modals/contentmodal/Orderplacedmodal';
// import CustomStepper from 'components/Stepper/Stepper';
import './ViewReturnProducts.css';
import { useTheme } from 'components/Theme/ThemeProvider';
import Confirmationmodal from 'components/modals/contentmodal/Confirmationmodal';

const CardContent = () => {
  return (
    <>
      <Box className="box__Styling">
        <div className="box_cont_styling">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
            <LocalShippingIcon className="color__Style" />
            <Typography className="color__Style" variant="subtitle1">
              Warehouse
            </Typography>
          </Stack>
          <div style={{ textAlign: 'end' }}>
            <Button size="small" variant="contained" className="btn_style_viewReturn">
              Change
            </Button>
          </div>
        </div>
        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'end' }}>
          <Typography style={{ fontFamily: 'Medium', fontSize: 16, fontWeight: '600' }}>Ahmedabad | ZW-DIST-001</Typography>
          <Typography>101, Vikasgrauh road,Paldi Ahmedabad 380007, Gujarat</Typography>
        </div>
      </Box>
    </>
  );
};

const InputContent = () => {
  const [value, setValue] = useState('');

  const handleClickinput = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {/* Textarea element with placeholder and value */}
      <textarea
        placeholder="Enter Remark"
        value={value}
        onChange={handleClickinput}
        style={{
          width: '100%',
          height: '150px',
          resize: 'none',
          outline: 'none',
          border: 'none',
          backgroundColor: '#f8f8f8',
          padding: '10px 10px 115px',
          borderRadius: '15px'
        }}
      />
    </>
  );
};

const ViewReturnProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  const { currentTheme } = useTheme();

  const handleCloseModal = () => {
    setIsOpen(false);
    navigate('/dashboard/Request');
  };

  return (
    <div className="maincontainer_view_return_products">
      <div className="headingcontainer">
        <Button size="small" variant="contained" className="btnstyle__" onClick={() => navigate('/dashboard/AllProductInventory')}>
          <ArrowBackIcon />
        </Button>
        <Typography variant="h5" mt={1} style={{ color: currentTheme.textColor }}>
          View Return Products
        </Typography>
      </div>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={isMobile ? 12 : isTablet ? 8 : 9}>
          {/* Vipul Mishra */}
          <AmountTabel
            headingTittle={headingTittle}
            rows={rows}
            header_backgroundColor={'#fff'}
            color={'SemiBold'}
            inputField={{
              key: 'InputField',
              value: <input type="text" className="tablebtnstyle__" defaultValue={0} />
            }}
          />

          {/* <CustomStepper /> */}
        </Grid>
        <Grid item xs={isMobile ? 12 : isTablet ? 4 : 3}>
          <div style={{ marginBottom: '5%' }}>
            <ReusableCard content={<CardContent />} width={'100%'} borderRadius={15} maxWidth={'255px'} />
          </div>

          <ReusableCard content={<InputContent />} width={'265px'} borderRadius={15} maxWidth={'255px'} />
          <div style={{ marginTop: '5%' }}>
            <CustomButton
              backgroundColor={'#4cb748'}
              color={'#ffffff'}
              label={'Verify and Submit Request'}
              width={'100%'}
              height={45}
              fontSize={13}
              borderRadius={12}
              fontWeight={600}
              onClick={() => setIsOpen(true)}
            />
          </div>
        </Grid>
   
        {<Orderplacedmodal
          handleCloseModal={handleCloseModal}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={'Return Request Submitted'}
          subtitle={'Your Return Request Submitted'}
        />}
      
      </Grid>
    </div>
  );
};

export default ViewReturnProducts;

const headingTittle = [
  {
    id: 'SKU',
    label: 'SKU'
    // color:'#000'
  },
  {
    id: 'BatchId',
    label: 'BatchId'
  },
  {
    id: 'Products',
    label: 'Products'
  },
  {
    id: 'InputField',
    label: 'Returned Qty.'
  },
  {
    id: 'PTD',
    label: 'PTD'
  },
  {
    id: 'InputField',
    label: 'Discarded Reason'
  }
];

const rows = [
  { SKU: 'ZWCO#01', BatchId: 'Opening Balance', Products: 'ZW38573-DSC', PTD: ' 1240' },
  { SKU: '01 Apr 2023', BatchId: 'Opening Balance', Products: 'ZW38573-DSC', PTD: ' 1240' },
  { SKU: '01 Apr 2023', BatchId: 'Opening Balance', Products: 'ZW38573-DSC', PTD: ' 1240' },
  { SKU: '01 Apr 2023', BatchId: 'Opening Balance', Products: 'ZW38573-DSC', PTD: ' 1240' },
  { SKU: '01 Apr 2023', BatchId: 'Opening Balance', Products: 'ZW38573-DSC', PTD: ' 1240' }
];
