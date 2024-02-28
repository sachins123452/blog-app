import Confirmationmodal from 'components/modals/contentmodal/Confirmationmodal';
import { usePurchaseReturnRequestOrderViewState } from 'context/PurchaseReturnRequestOrderViewProvider';
import React from 'react';

const PurchaseReturnRequestOrderViewConfirmationModal = (props) => {
  const { confirmationModal, setConfirmationModal } = usePurchaseReturnRequestOrderViewState();
  return (
    <div>
      <Confirmationmodal
        isOpen={confirmationModal}
        setIsOpen={setConfirmationModal}
        handleCloseModal={props.handleYes}
        title={'Confirm Return Request'}
        subtitle={'Are you sure you want to raise return request for selected items?'}
        handleNo={props.handleNo}
      />
    </div>
  );
};

export default PurchaseReturnRequestOrderViewConfirmationModal;
