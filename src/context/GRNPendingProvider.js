import React, { useContext, createContext } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
const GRNPending = createContext();

export const GRNPendingStateProvider = ({ children }) => {
  
  const { currentTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const [confirmationModal, setConfirmationModal] = React.useState(false);
    const [orderCancelModal, setOrderCancelModal] = React.useState(false);
    const [discardModal, setDiscardModal] = React.useState(false);
    const [discardData, setDiscardData] = React.useState([]);

  return (
    <GRNPending.Provider
      value={{
        currentTheme,
        setIsOpen,
        isOpen,
        confirmationModal,
        setConfirmationModal,
        orderCancelModal,
        setOrderCancelModal,
        discardData,
        setDiscardData,
        discardModal,
        setDiscardModal
        
  
      }}
    >
      {children}
    </GRNPending.Provider>
  );
};

export const useGRNPendingState = () => {
  const context = useContext(GRNPending);
  if (!context) {
    throw new Error('useGRNPendingStateState must be used within a useGRNPendingState');
  }
  return context;
};
