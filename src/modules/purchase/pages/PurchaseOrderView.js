import { Grid } from '../../../../node_modules/@mui/material/index';
import ArrowBack from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/LocalPrintshopOutlined';
import Download from '@mui/icons-material/Download';
import SubTotalCart from 'components/subTotalCart/SubTotalCart';
import AddressCart from 'components/subTotalCart/AddressCart';
import { OrderTable } from 'pages/mycart/MyCart';
import ReusableModal from 'components/modals/routemodal/ResuableModal';
import { useState } from 'react';
import tickGif from '../../../assets/images/gif/icons8-tick.gif';
import CustomStepper from 'components/Stepper/Stepper';
import { useNavigate } from 'react-router-dom';
import '../../../../src/modules/purchase/style/OrderViewStyle.css';
import { useTheme } from 'components/Theme/ThemeProvider';
import { PurchaseOrderViewStateProvider } from 'context/PurchaseOrderViewProvider';
import SubHeader from 'components/subHeader/SubHeader';

const PurchaseOrderViewActiveComponent = () => {
  const { currentTheme } = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const stepper_Step_count = 2;
  const handleCancel = () => {
    setIsOpen(true);
  };

  const ModalContent = () => {
    const [selectedReason, setSelectedReason] = useState(null);

    const handleReasonChange = (event) => {
      setSelectedReason(event.target.value);
    };
    const radioReason = [
      { id: 1, reason: 'Changed Customer Request' },
      { id: 2, reason: 'Stock Availabiltiy Issue' },
      { id: 3, reason: 'Customer Cancellation' },
      { id: 4, reason: 'Pricing Discrepancy' },
      { id: 5, reason: 'Order Duplication' },
      { id: 6, reason: 'Payment Issue' }
    ];
    const handleSubmit = () => {
      setIsOpen(false);
    };
    return (
      <>
        <Grid style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
          <img src={tickGif} alt="tickGif" />
        </Grid>
        <Grid style={{ fontFamily: 'GilroyBlack', fontSize: '15px', marginLeft: '7%' }}>Cancel Order</Grid>
        <Grid style={{ fontFamily: 'Regular', fontSize: '11px', marginLeft: '7%' }}>Choose a reason for canceling the order.</Grid>
        <Grid style={{ marginTop: '2%' }} />
        <Grid style={{ height: '1px', backgroundColor: '#DDDD' }} />
        <Grid style={{ marginLeft: '4%', display: 'flex', flexDirection: 'column', marginTop: '3%' }}>
          {radioReason?.map((reason, index) => {
            return (
              <>
                <label key={index} style={{ fontFamily: 'Regular', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                  <input
                    style={{ margin: '2.5%', cursor: 'pointer' }}
                    type="radio"
                    value={reason.reason}
                    checked={selectedReason === reason?.reason}
                    onChange={handleReasonChange}
                  />
                  {reason?.reason}
                </label>
              </>
            );
          })}
        </Grid>
        <Grid style={{ marginTop: '4%' }} />
        <Grid style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            size="small"
            style={{ width: '80%' }}
            variant="contained"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Grid>
        <Grid style={{ marginTop: '4%' }} />
      </>
    );
  };

  return (
    <>

      <SubHeader
        title={'Order View'}
        isRightEnable={true}
        rightComponent={
          <Button
            size="small"
            // className="plusnewbtn_purchase"
            style={{ backgroundColor: '#0174bf', borderRadius: '7px' }}
            onClick={() => {
              alert('Please pass your onClick function');
            }}
            variant="contained"
          >
            + Place New
          </Button>
        }
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
        isRightEnableSecond={true}
        rightSecondComponent={
          <Button
            size="small"
            // startIcon={<PrintIcon />}
            sx={{ borderRadius: 2, backgroundColor: '#006caf', marginLeft: '10px' }}
            variant="contained"
            // onClick={handleSubmit}
          >
            Print
          </Button>
        }
      />

      {/* <Grid style={{ marginTop: '1%' }} /> */}
      <Grid>
        <CustomStepper CompletedSteps={6} />
      </Grid>
      {/* <Grid style={{ marginTop: '4%' }} /> */}

      <Grid container spacing={1} className="orderView_Table">
        <Grid item xs={12} md={8} lg={8} style={{ margin: '0.4%' }}>
          {OrderTable()}
        </Grid>

        <Grid item xs={12} md={3.8} lg={3.8}>
          <SubTotalCart />
          <AddressCart />
          <Grid style={{ marginBottom: '3%' }} />
          <Button
            size="small"
            className="orderView_CancelTextCss"
            variant="contained"
            onClick={() => {
              handleCancel();
            }}
          >
            <Grid container direction="column" alignItems="center" justifyContent="center">
              <Grid item style={{ color: '#FFF', marginBottom: '-5px' }}>
                Cancel Order
              </Grid>
              <Grid item style={{ fontSize: '10px', color: '#fff' }}>
                Cancel Order Within 2 hours of placement only
              </Grid>
            </Grid>
          </Button>
        </Grid>
      </Grid>
      {
        <ReusableModal
          isOpen={isOpen}
          showCloseButton={false}
          setIsOpen={setIsOpen}
          ModalContent={<ModalContent />}
          height={'100%'}
          width="330px"
        />
      }
    </>
  );
};

const PurchaseOrderView = () => {
  return (
    <PurchaseOrderViewStateProvider>
      <PurchaseOrderViewActiveComponent />
    </PurchaseOrderViewStateProvider>
  );
};
export default PurchaseOrderView;
