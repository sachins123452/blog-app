import React, { useContext, createContext, useState } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
const PurchaseInvoice  = createContext();

export const PurchaseInvoiceStateProvider = ({ children }) => {
  //   const getwareHouseData = useGetWarehouseQuery();
  //   const OrderStatusData = useGetOrderStatusQuery();
  //   const[selectedWarehouseId,setSelectedWarehouseId] = useState('');
  //   const [selectOrderStatusId,setSelectedOrderStatusId] = useState('')
  const [isOpenSecondaryModal, setIsOpenSecondaryModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAvailableCreditModal, setIsAvailableCreditModal] = React.useState(false);
  const [isCancelledModal, setIsCancelledModal] = React.useState(false);

  const { currentTheme } = useTheme();

  return (
    <PurchaseInvoice.Provider
      value={{
        currentTheme,
        isAvailableCreditModal,
        setIsAvailableCreditModal,
        isCancelledModal,
        setIsCancelledModal,
        isOpen,
        setIsOpen
        // getwareHouseData,
        // OrderStatusData,
        // setSelectedWarehouseId,
        // selectedWarehouseId,
        // selectOrderStatusId,
        // setSelectedOrderStatusId,
      }}
    >
      {children}
    </PurchaseInvoice.Provider>
  );
};

export const usePurchaseInvoiceState = () => {
  const context = useContext(PurchaseInvoice);
  if (!context) {
    throw new Error('usePurchaseInvoiceState must be used within a usePurchaseInvoiceState');
  }
  return context;
};
