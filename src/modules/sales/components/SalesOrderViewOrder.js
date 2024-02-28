import AmountTabel from 'pages/outletMaster/AmountTabel';
import React from 'react';
import { Grid, Button } from '@mui/material';
import { useSalesOrderViewState } from 'context/SalesOrderViewProvider';
import Orderplacedmodal from 'components/modals/contentmodal/Orderplacedmodal';
import Confirmationmodal from 'components/modals/contentmodal/Confirmationmodal';
import { useNavigate } from 'react-router-dom';
const SalesOrderViewOrder = () => {
  const navigate = useNavigate();
  let {
    currentTheme,
    isGrnConfirmationModalOpen,
    setIsGrnConfirmationModalOpen,
    isGrnConfirmationModalOpen1,
    setIsGrnConfirmationModalOpen1,
    isOrderConfirmationModalOpen,
    setIsOrderConfirmationModalOpen
  } = useSalesOrderViewState();
  const handleOpenGrnConfirmationModal = () => {
    setIsGrnConfirmationModalOpen(true);
  };

  const handleCloseGrnConfirmationModal = () => {
    setIsGrnConfirmationModalOpen(false);
    setIsOrderConfirmationModalOpen(true);
  };
  const handleOpenGrnConfirmationModal1 = () => {
    setIsGrnConfirmationModalOpen1(true);
  };

  const handleCloseGrnConfirmationModal1 = () => {
    setIsGrnConfirmationModalOpen1(false);
    navigate('/dashboard/Sales');
  };
  const handleCloseOrderConfirmationModal = () => {
    setIsOrderConfirmationModalOpen(false);
  };
  return (
    <Grid>
      <AmountTabel
        header_backgroundColor={currentTheme.bodyColor}
        color={currentTheme.textColor}
        backgroundColor={currentTheme.bodyColor}
        headingTittle={headCells2}
        balanceDue={'Total:₹283,874'}
        amount="283"
        unit={'200'}
        rows={rows2}
        inputField={{
          key: 'accepted units',
          value: (
            <input
              type="text"
              style={{
                width: '60px',
                textAlign: 'center',
                backgroundColor: currentTheme.bodyColor,
                borderRadius: '5px',
                border: '0px',
                color: '#0174BF'
              }}
              defaultValue={0}
            />
          )
        }}
      />
      <Grid item xs={6} md={6} lg={6}>
        <Button
          size="normal"
          sx={{ borderRadius: 2, backgroundColor: '#0174bf' }}
          variant="contained"
          //
          onClick={() => handleOpenGrnConfirmationModal()}
        >
          Modify & Accept Order
        </Button>
        <Button
          size="normal"
          sx={{ borderRadius: 2, margin: '0.7rem', backgroundColor: '#4CB748' }}
          variant="contained"
          onClick={() => handleOpenGrnConfirmationModal1()}
        >
          Complete Order Acceptance
        </Button>
      </Grid>
      {isGrnConfirmationModalOpen && (
        <Confirmationmodal
          setIsOpen={setIsGrnConfirmationModalOpen}
          isOpen={isGrnConfirmationModalOpen}
          handleCloseModal={handleCloseGrnConfirmationModal}
          title={'Accept Modified Order?'}
          subtitle={'Are you sure you want accept modified order?'}
        />
      )}
      {isGrnConfirmationModalOpen1 && (
        <Confirmationmodal
          setIsOpen={setIsGrnConfirmationModalOpen1}
          isOpen={isGrnConfirmationModalOpen1}
          handleCloseModal={handleCloseGrnConfirmationModal1}
          title={'Complete Order Acceptance'}
          subtitle={'Are you sure you want accept all 355 items for this order?'}
        />
      )}
      {isOrderConfirmationModalOpen && (
        <Orderplacedmodal
          isOpen={isOrderConfirmationModalOpen}
          setIsOpen={setIsOrderConfirmationModalOpen}
          handleCloseModal={handleCloseOrderConfirmationModal}
          title={'Order Updated'}
          subtitle={'Order detail has been successfully updated!'}
        />
      )}
    </Grid>
  );
};

const rows2 = [
  { sku: 84564564, product: 'Camera Lens', uom: 'Box', size: '1KG', price: 167, 'order units': 10, 'accepted units': 40 },
  { sku: 98764564, product: 'Laptop', uom: 'Box', size: '1KG', price: 270, 'order units': 43, 'accepted units': 40 },
  { sku: 98756325, product: 'Mobile', uom: 'Box', size: '250 gm', price: 300, 'order units': 9, 'accepted units': 40 },
  { sku: 98652366, product: 'Handset', uom: 'Box', size: '1KG', price: 30, 'order units': 102, 'accepted units': 60 },
  { sku: 13286564, product: 'Computer Accessories', uom: 'Jar', size: '2KG', price: 90, 'order units': 83, 'accepted units': 90 },
  { sku: 86739658, product: 'TV', uom: 'Pack', size: '1KG', price: 70, 'order units': 41, 'accepted units': 90 },
  { sku: 86739658, product: 'TV', uom: 'Pack', size: '1KG', price: 70, 'order units': 41, 'accepted units': 90 }
];

const headCells2 = [
  {
    id: 'sku',
    align: 'left',
    disablePadding: false,
    label: 'SKU'
  },
  {
    id: 'product',
    align: 'left',
    disablePadding: true,
    label: 'Product'
  },
  {
    id: 'uom',
    align: 'left',
    disablePadding: false,
    label: 'UOM'
  },
  {
    id: 'size',
    align: 'left',
    disablePadding: false,
    label: 'Size'
  },
  {
    id: 'price',
    align: 'left',
    disablePadding: false,
    label: 'Price(PTR)'
  },
  {
    id: 'order units',
    align: 'left',
    disablePadding: false,
    label: 'Order Units'
  },
  {
    id: 'accepted units',
    align: 'center',
    disablePadding: false,
    label: 'Accepted Units'
  }
];
export default SalesOrderViewOrder;
