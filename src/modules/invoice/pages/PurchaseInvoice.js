import React from 'react';
import BasicTabel from 'pages/dashboard/BasicTabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../../components/dropdown/DropDown.css';
import { Grid } from '../../../../node_modules/@mui/material/index';
import MainSearch from 'components/main_search_header_bar/MainSearch';
import Pendinginvoiceview from 'components/modals/contentmodal/Pendinginvoiceview';
import '../../../../src/modules/invoice/styles/PurchaseInvoice.css';
import AvailableCreditModal from 'components/modals/contentmodal/AvailableCreditModal';
import { useTheme } from 'components/Theme/ThemeProvider';
import Confirmationmodal from 'components/modals/contentmodal/Confirmationmodal';
// import './InvoiceDueScreen.css';
import PurchasePendingInvoiceModal from 'modules/invoice/components/PurchasePendingInvoiceModal';
import { PurchaseInvoiceStateProvider, usePurchaseInvoiceState } from 'context/PurchaseInvoiceProvider';
import SubHeader from 'components/subHeader/SubHeader';
import PurchaseInvoiceMainSearch from '../components/PurchaseInvoiceMainSearch';
import PurchaseInvoiceOrder from '../components/PurchaseInvoiceOrder';

const PurchaseInvoiceActiveComponent = () => {
  const { currentTheme } = useTheme();
  const { isOpen, setIsOpen, isAvailableCreditModal, setIsAvailableCreditModal, isCancelledModal, setIsCancelledModal } =
    usePurchaseInvoiceState();
  // const navigate = useNavigate();
  // const [isOpen, setIsOpen] = React.useState(false);
  // const [isAvailableCreditModal, setIsAvailableCreditModal] = React.useState(false);
  // const [isCancelledModal, setIsCancelledModal] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleButtonPaynow = () => {
    setIsOpen(false);
    setIsAvailableCreditModal(true);
  };

  const handleCloseAvailableCreditModal = () => {
    setIsAvailableCreditModal(false);
  };

  const handlePaymentButton = () => {
    setIsAvailableCreditModal(false);
    setIsCancelledModal(true);
  };

  const handleCancelButton = () => {
    setIsAvailableCreditModal(false);
  };

  const handleCloseCancelledModal = () => {
    setIsCancelledModal(false);
  };

  // const styleColor = (status) => {
  //   switch (status) {
  //     case 'Pending':
  //       return { color: '#f4bc6a' };
  //     case 'GRN Pending':
  //       return { color: '#f4bc6a' };
  //     case 'Completed':
  //       return { color: '#0a79c1' };
  //     default:
  //       return { color: 'red' };
  //   }
  // };

  return (
    <div style={{ height: '100vh' }}>
      <Grid container rowSpacing={2} columnSpacing={2.75} alignItems="center" justifyContent="space-between">
        <SubHeader title={'Invoice Due'} />
        <PurchaseInvoiceMainSearch />
        <PurchaseInvoiceOrder handleOpenModal={handleOpenModal} />

        {
          <PurchasePendingInvoiceModal
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            DownloadInvoicePay={true}
            handlePayNowButton={handleButtonPaynow}
          />
        }
        {
          <AvailableCreditModal
            isOpen={isAvailableCreditModal}
            setIsOpen={setIsAvailableCreditModal}
            handleCloseAvailableCreditModal={handleCloseAvailableCreditModal}
            handlePaymentButton={handlePaymentButton}
            handleCancelButton={handleCancelButton}
          />
        }
        {
          <Confirmationmodal
            isOpen={isCancelledModal}
            setIsOpen={setIsCancelledModal}
            handleCloseModal={handleCloseCancelledModal}
            title="Redirecting to Payment Gateway"
            //   subtitle="Your return request has been submitted!"
          />
        }
      </Grid>
    </div>
  );
};

const PurchaseInvoice = () => {
  return (
    <PurchaseInvoiceStateProvider>
      <PurchaseInvoiceActiveComponent />
    </PurchaseInvoiceStateProvider>
  );
};

export default PurchaseInvoice;
