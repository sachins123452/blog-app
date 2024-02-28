import React from 'react';
import { Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { Grid } from '../../../../node_modules/@mui/material/index';
import '../../../modules/GRN/styles/GRNPending.css';
import SubHeader from 'components/subHeader/SubHeader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GRNTableDeliveryInfo from '../components/GRNTableDeliveryInfo';
import GRNTableBatchInfo from '../components/GRNTableBatchInfo';
import GRNPendingDiscardUnitModal from '../components/GRNPendingDiscardUnitModalContent';
import { GRNPendingStateProvider, useGRNPendingState } from 'context/GRNPendingProvider';
import { useNavigate } from 'react-router-dom';
import Successmodal from 'components/modals/contentmodal/Successmodal';
import Confirmationmodal from 'components/modals/contentmodal/Confirmationmodal';
import Pendinginvoiceview from 'components/modals/contentmodal/Pendinginvoiceview';

const GrnPendingActiveComponent = () => {
  const {
    setIsOpen,
    isOpen,
    confirmationModal,
    setConfirmationModal,
    discardData,
    setDiscardData,
    discardModal,
    setDiscardModal,
    orderCancelModal,
    setOrderCancelModal
  } = useGRNPendingState();
  const navigate = useNavigate();

  const handle_OrdercancelModal = () => {
    setOrderCancelModal(false);
    navigate('/dashboard/GRNScreen');
  };

  const handleMark_asComplete = () => {
    setConfirmationModal(true);
  };

  const handleYes = () => {
    setOrderCancelModal(true);
    setConfirmationModal(false);
  };

  const handleNo = () => {
    setConfirmationModal(false);
  };

  const handleGRNTableBatchInfoClick = (data) => {
    console.log('GRNpending compoent in Line No 58---->', data);
    setDiscardModal(true);
    setDiscardData(data);
  };

  const handleClose = () => {
    setDiscardModal(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handlePendingInvoiceViewModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="topView_GrnPending">
      <Grid className="mainContainer_GRNPending" container spacing={2}>
        <SubHeader
          isLeftEnable={true}
          title={'Goods Received Notes - GRN'}
          leftComponent={
            <Button
              size="small"
              variant="contained"
              style={{ borderRadius: 12, width: '40px', color: '#fff', backgroundColor: '#4CB748', minWidth: '40px', marginRight: '10px' }}
              onClick={() => alert('Please Make a function to handle the left button action')}
            >
              <ArrowBackIcon />
            </Button>
          }
          isRightEnable={true}
          rightComponent={
            <div>
              <Button
                size="small"
                // className="plusnewbtn_purchase"
                style={{ backgroundColor: '#0174bf', borderRadius: '7px', marginRight: '2px' }}
                onClick={handlePendingInvoiceViewModal}
                variant="contained"
              >
                View Order Detail
              </Button>
            </div>
          }
          isRightEnableSecond={true}
          rightSecondComponent={
            <Button
              size="small"
              startIcon={<PrintIcon />}
              sx={{ borderRadius: 2, backgroundColor: '#006caf' }}
              variant="contained"
              // onClick={handleSubmit}
            >
              Print
            </Button>
          }
        />
      </Grid>
      <Grid>
        <GRNTableDeliveryInfo />
        <Grid style={{ marginBottom: '3%' }} />
      </Grid>
      <GRNTableBatchInfo handleClick={(data) => handleGRNTableBatchInfoClick(data)} />
      <Grid item sx={12} md={12} lg={12} style={{ minWidth: '18%', padding: '1%' }}>
        <Button
          size="small"
          className="MarkastextCss_GRNPending"
          variant="contained"
          onClick={() => {
            handleMark_asComplete();
          }}
        >
          Mark as completed GRN
        </Button>
      </Grid>
      <div style={{ backgroundColor: 'red' }}>
        <Pendinginvoiceview setIsOpen={setIsOpen} isOpen={isOpen} handleCloseModal={handleCloseModal} />
        <Confirmationmodal
          isOpen={confirmationModal}
          setIsOpen={setConfirmationModal}
          title={'Confirm GRN'}
          subtitle={'Are you sure you want to confirm the receipt of goods for this order?'}
          handleCloseModal={handleYes}
          handleNo={handleNo}
        />
        <Successmodal
          isOpen={orderCancelModal}
          setIsOpen={setOrderCancelModal}
          handleCloseModal={handle_OrdercancelModal}
          title={'GRN Acknowledged'}
          subtitle={'GRN Acknowledgement request has been successfully submitted!'}
        />
        {<GRNPendingDiscardUnitModal handleClose={handleClose} />}
      </div>
    </div>
  );
};

const GRNpending = () => {
  return (
    <GRNPendingStateProvider>
      <GrnPendingActiveComponent />
    </GRNPendingStateProvider>
  );
};
export default GRNpending;
