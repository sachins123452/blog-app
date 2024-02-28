import React from 'react';
import Pendinginvoiceview from 'components/modals/contentmodal/Pendinginvoiceview';
import { useInvoiceState } from 'context/SalesInvoiceProvider';


const SalesPendingInvoice = () => {
  const { setIsOpen, isOpen} = useInvoiceState();
 
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {<Pendinginvoiceview
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                handleCloseModal={handleCloseModal}
            />}
    </div>
  );
};

export default SalesPendingInvoice;
