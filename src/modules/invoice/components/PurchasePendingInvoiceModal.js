import CustomButton from 'components/buttons/CustomButton';
import Pendinginvoiceview from 'components/modals/contentmodal/Pendinginvoiceview';
import React, { useState } from 'react';

const PurchasePendingInvoiceModal = (props) => {
  return (
    <div>
      {
        <Pendinginvoiceview
          setIsOpen={props.setIsOpen}
          isOpen={props.isOpen}
          handleCloseModal={props.handleCloseModal}
          DownloadInvoicePay={props.DownloadInvoicePay}
          content={
            <>
              <CustomButton backgroundColor={'#4cb748'} label={'Pay Now'} color={'#ffffff'} onClick={props.handlePayNowButton} />
            </>
          }
        />
      }
    </div>
  );
};

export default PurchasePendingInvoiceModal;
