import { useTheme } from 'components/Theme/ThemeProvider';
import React, { useContext, createContext } from 'react';

const PurchaseReturnRequestOrderView = createContext();

export const PurchaseReturnRequestOrderViewStateProvider = ({ children }) => {
  const { currentTheme } = useTheme();
  const [confirmationModal, setConfirmationModal] = React.useState(false);
  const [orderCancelModal, setOrderCancelModal] = React.useState(false);
  const [discardModal, setDiscardModal] = React.useState(false);
  const [discardData, setDiscardData] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState([]);

  return (
    <PurchaseReturnRequestOrderView.Provider
      value={{
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
      }}
    >
      {children}
    </PurchaseReturnRequestOrderView.Provider>
  );
};

export const usePurchaseReturnRequestOrderViewState = () => {
  const context = useContext(PurchaseReturnRequestOrderView);
  if (!context) {
    throw new Error('usePurchaseReturnRequestOrderViewStateState must be used within a usePurchaseReturnRequestOrderViewState');
  }
  return context;
};
