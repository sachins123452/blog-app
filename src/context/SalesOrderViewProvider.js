import React, { useContext, createContext} from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';

const SalesOrderView = createContext();

export const SalesOrderViewStateProvider = ({ children }) => {
const [isOpenmodal, setIsOpenmodal] = React.useState(false);
const [isGrnConfirmationModalOpen, setIsGrnConfirmationModalOpen] = React.useState(false);
  const [isGrnConfirmationModalOpen1, setIsGrnConfirmationModalOpen1] = React.useState(false);
  const [isOrderConfirmationModalOpen, setIsOrderConfirmationModalOpen] = React.useState(false);

    const { currentTheme } = useTheme();

  return (
    <SalesOrderView.Provider
      value={{
        currentTheme,
        isGrnConfirmationModalOpen,
        setIsGrnConfirmationModalOpen,
        isGrnConfirmationModalOpen1,
        setIsGrnConfirmationModalOpen1,
        isOrderConfirmationModalOpen,
        setIsOrderConfirmationModalOpen,
        isOpenmodal,
        setIsOpenmodal
      }}
    >
      {children}
    </SalesOrderView.Provider>
  );
};

export const useSalesOrderViewState = () => {
  const context = useContext(SalesOrderView);
  if (!context) {
    throw new Error('useSalesOrderViewState must be used within a useSalesOrderViewState');
  }
  return context;
};
