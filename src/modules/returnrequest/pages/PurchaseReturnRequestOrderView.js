import React from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';

import { Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/LocalPrintshopOutlined';
import Download from '@mui/icons-material/Download';
import { Grid } from '../../../../node_modules/@mui/material/index';

import '../../../modules/returnrequest/style/PurchaseReturnRequestOrderView.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import CustomStepper from 'components/Stepper/Stepper';

import SubHeader from 'components/subHeader/SubHeader';
import PurchaseReturnRequestOrderViewTable from '../components/PurchaseReturnRequestOrderViewTable';
import {
  PurchaseReturnRequestOrderViewStateProvider,
  usePurchaseReturnRequestOrderViewState
} from 'context/PurchaseReturnRequestOrderViewProvider';
import PurchaseReturnRequestOrderViewTotalAmountCard from '../components/PurchaseReturnRequestOrderViewTotalAmountCard';
import PurchaseReturnRequestOrderViewDetailCard from '../components/PurchaseReturnRequestOrderViewDetailCard';
import PurchaseReturnRequestOrderViewDownloadInvoice from '../components/PurchaseReturnRequestOrderViewDownloadInvoice';
import ReusableModal from 'components/modals/routemodal/ResuableModal';
import GRNTabel from 'components/GRNTable/GRNTabel';
import Successmodal from 'components/modals/contentmodal/Successmodal';
import Confirmationmodal from 'components/modals/contentmodal/Confirmationmodal';

const ModalContent = (props) => {
  const [selectedFileName, setSelectedFileName] = React.useState(null);
  const { discardData } = props;

  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'SKU', label: 'SKU' },
    { id: 'BatchId', label: 'BatchId' },
    { id: 'Product', label: 'Product' },
    { id: 'shippedUnit', label: 'Shipped Units' },
    { id: 'discardQty', label: 'Discarded Qty.' },
    { id: 'media', label: 'Media', type: 'file' }
  ];
  const handleSubmit = () => {
    discardData.fileName = selectedFileName;
    alert(JSON.stringify(discardData));
  };
  const handleFileSelectInParent = (fileName) => {
    setSelectedFileName(fileName?.name);
  };
  return (
    <Grid>
      <Grid style={{ marginTop: '2.5%' }} />
      <Grid style={{ padding: '5px', fontFamily: 'SemiBold', fontSize: '17px', marginLeft: '3%' }}>Return Unit</Grid>
      <Grid style={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
        <GRNTabel rows={[discardData]} columns={columns} onFileSelect={handleFileSelectInParent} />
      </Grid>
      <Grid style={{ padding: '5px', marginLeft: '1%' }}>
        <Button size="small" style={{ minWidth: '20%', backgroundColor: '#4cb748' }} variant="contained" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

const PurchaseReturnRequestOrderViewActiveComponent = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:600px)');
  // const { currentTheme } = useTheme();
  const matches1 = useMediaQuery('(min-width:571px)');
  const {
    currentTheme,
    confirmationModal,
    setConfirmationModal,
    orderCancelModal,
    setOrderCancelModal,
    discardModal,
    setDiscardModal,
    discardData,
    setDiscardData,
    isOpen,
    setIsOpen
  } = usePurchaseReturnRequestOrderViewState();

  console.log('a==', matches + '==' + matches1);

  let width1 = '';
  width1 = !matches ? '70%' : '85%';
  width1 = !matches1 ? '45%' : '85%';

  const handleYes = () => {
    setOrderCancelModal(true);
    setConfirmationModal(false);
  };
  const handleNo = () => {
    setConfirmationModal(false);
  };
  const handle_OrdercancelModal = () => {
    setOrderCancelModal(false);
  };

  const handle_Submit = () => {
    setConfirmationModal(true);
  };

  const handleViewOrderDetail = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setDiscardModal(false);
  };

  const handleDiscard = (data) => {
    console.log('ReturnRequest_OrderView in Line No 167---->', data);
    setDiscardModal(true);
    setDiscardData(data);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SubHeader
        title={'Order View'}
        isLeftEnable={true}
        leftComponent={
          <Button
            size="small"
            variant="contained"
            style={{ borderRadius: 12, color: '#fff', backgroundColor: '#4CB748', minWidth: '40px', marginRight: '10px' }}
            onClick={() => alert('Please Make a function to handle the left button action')}
          >
            <ArrowBack sx={{ color: '#fff', fontSize: '1.5rem' }} />
          </Button>
        }
        isRightEnable={true}
        rightComponent={
          <Button
            size="small"
            startIcon={<PrintIcon />}
            sx={{ borderRadius: 2, backgroundColor: '#0174bf' }}
            variant="contained"
            // onClick={handleSubmit}
          >
            Print
          </Button>
        }
        isRightEnableSecond={true}
        rightSecondComponent={
          <Button
            size="small"
            startIcon={<Download />}
            sx={{ borderRadius: 2, marginLeft: '0.5rem', backgroundColor: '#0174bf' }}
            variant="contained"
          >
            Download
          </Button>
        }
      />
      <Grid>
        <CustomStepper CompletedSteps={5} />
      </Grid>
      <Grid style={{ marginTop: '4%' }} />
      <Grid className="returnRequesttextCss_ReturnRequest_OrderViewCss" color={currentTheme.textColor}>
        Return Requested Items
      </Grid>
      <Grid container spacing={1} className="basicTabelContainer_ReturnRequest_OrderViewCss">
        <PurchaseReturnRequestOrderViewTable handleDiscard={handleDiscard} />
        <Grid item xs={12} md={3.8} lg={3.8}>
          <Grid marginBottom={'0.5rem'}>
            <PurchaseReturnRequestOrderViewTotalAmountCard />
          </Grid>
          <PurchaseReturnRequestOrderViewDetailCard handleViewOrderDetail={handleViewOrderDetail} />
        </Grid>
        <Grid item sx={12} md={12} lg={12} style={{ minWidth: '18%' }}>
          <Button
            size="small"
            className="submit_ReturnButton_ReturnRequest_OrderViewCss"
            variant="contained"
            onClick={() => {
              handle_Submit();
            }}
          >
            Submit Return Request
          </Button>
        </Grid>
      </Grid>

      <Successmodal
        isOpen={orderCancelModal}
        setIsOpen={setOrderCancelModal}
        title={'Confirm Return Request'}
        subtitle={'Are you sure you want to raise return request for selected items?'}
        handleCloseModal={handle_OrdercancelModal}
      />
       <Confirmationmodal
        isOpen={confirmationModal}
        setIsOpen={setConfirmationModal}
        handleCloseModal={handleYes}
        title={'Confirm Return Request'}
        subtitle={'Are you sure you want to raise return request for selected items?'}
        handleNo={handleNo}
      />
      {<PurchaseReturnRequestOrderViewDownloadInvoice isOpen={isOpen} setIsOpen={setIsOpen} handleCloseModal={handleCloseModal} />}
      {/* {<PurchaseReturnRequestOrderViewDetailCard  />} */}

      {
        <ReusableModal
          isOpen={discardModal}
          setIsOpen={setDiscardModal}
          ModalContent={<ModalContent discardData={discardData} />}
          onClose={() => handleClose()}
          width={width1}
          height={'85%'}
          top={'-22%'}
        />
      }
    </>
  );
};

const PurchaseReturnRequestOrderView = () => {
  return (
    <PurchaseReturnRequestOrderViewStateProvider>
      <PurchaseReturnRequestOrderViewActiveComponent />
    </PurchaseReturnRequestOrderViewStateProvider>
  );
};
export default PurchaseReturnRequestOrderView;
