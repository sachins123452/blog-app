import ReusableModal from 'components/modals/routemodal/ResuableModal';
import React from 'react';
import { Grid } from '../../../../node_modules/@mui/material/index';
import GRNTabel from 'components/GRNTable/GRNTabel';
import { Button } from '@mui/material';
import { useGRNPendingState } from 'context/GRNPendingProvider';

const GRNPendingDiscardUnitModalContent = (props) => {
  const { discardData, setDiscardModal } = props;
  const handleSubmit = () => {
    setDiscardModal(false);
  };

  const handleClose = () => {
    setDiscardModal(false);
  };

  return (
    <Grid>
      <Grid className="topgrid_modalContent" />
      <Grid className="container_modalContent_GRN">Return Unit</Grid>
      <Grid className="GRN_Table_ModalContent_GRN">
        <GRNTabel
          rows={[discardData]}
          overflow={'visible'}
          actionKey={{
            key: 'Action',
            value: (
              <Button
                size="small"
                sx={{ borderRadius: 2, fontSize: 10, backgroundColor: '#006caf' }}
                variant="contained"
                onClick={handleClose}
              >
                Discard
              </Button>
            )
          }}
        />
      </Grid>
      <Grid className="btn_GRN_Container_GRN">
        <Button size="small" className="confirm_btn_GRN" variant="contained" onClick={() => handleSubmit()}>
          Confirm
        </Button>
        <Button size="small" onClick={() => handleClose()} className="confirm_btn_GRN">
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

const GRNPendingDiscardUnitModal = (props) => {
  const { discardModal, setDiscardModal, discardData, setDiscardData } = useGRNPendingState();

  return (
    <div>
      <ReusableModal
        isOpen={discardModal}
        setIsOpen={setDiscardModal}
        onClose={props.handleClose}
        ModalContent={<GRNPendingDiscardUnitModalContent discardData={discardData} setDiscardModal={setDiscardModal} discardModal={discardModal} />}
        showCloseButton={false}
        width={'900px'}
        height={'100%'}
        top={'-22%'}
      />
    </div>
  );
};

export default GRNPendingDiscardUnitModal;
