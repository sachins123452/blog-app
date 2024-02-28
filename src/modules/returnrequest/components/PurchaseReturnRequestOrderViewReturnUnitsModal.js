import { usePurchaseReturnRequestOrderViewState } from 'context/PurchaseReturnRequestOrderViewProvider';
import GRNTabel from 'components/GRNTable/GRNTabel';
import React from 'react';
import { Grid } from '../../../../node_modules/@mui/material/index';
import { Button } from '@mui/material';
import ReusableModal from 'components/modals/routemodal/ResuableModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from 'components/Theme/ThemeProvider';

const ModalContent = () => {
  const [selectedFileName, setSelectedFileName] = React.useState(null);
  const { discardData } = props;
  const rows = [{ id: '1', SKU: 'ZML059484H', BatchId: 'ZML059484H', Product: 'PRODUddCT1', shippedUnit: 3 }];

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
    <Grid backgroundColor={currentTheme.cardColor}>
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

const PurchaseReturnRequestOrderViewReturnUnitsModal = () => {
  const { discardModal, setDiscardModal, discardData } = usePurchaseReturnRequestOrderViewState();
  const matches = useMediaQuery('(min-width:600px)');
  const matches1 = useMediaQuery('(min-width:571px)');
  const { currentTheme } = useTheme();

  let width1 = '';
  width1 = !matches ? '70%' : '85%';
  width1 = !matches1 ? '45%' : '85%';

  return (
    <div>
      <ReusableModal
        isOpen={discardModal}
        backgroundColor={currentTheme.cardColor}
        setIsOpen={setDiscardModal}
        // backgroundColor={currentTheme.bodyColor}
        boxShadow={currentTheme.bodyColor}
        ModalContent={<ModalContent discardData={discardData} />}
        onClose={handleClose}
        width={width1}
        height={'85%'}
        top={'-22%'}
      />
    </div>
  );
};

export default PurchaseReturnRequestOrderViewReturnUnitsModal;
