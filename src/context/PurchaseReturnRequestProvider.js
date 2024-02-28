import { useTheme } from 'components/Theme/ThemeProvider';
import React, { useContext, createContext } from 'react';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';

const PurchaseReturnRequest = createContext();

export const PurchaseReturnRequestStateProvider = ({ children }) => {
  const { currentTheme } = useTheme();
  const getPurchaseReturnRequestWarehouseData = useGetWarehouseQuery();

  return (
    <PurchaseReturnRequest.Provider
      value={{
        currentTheme,
        getPurchaseReturnRequestWarehouseData
      }}
    >
      {children}
    </PurchaseReturnRequest.Provider>
  );
};

export const usePurchaseReturnRequestState = () => {
  const context = useContext(PurchaseReturnRequest);
  if (!context) {
    throw new Error('usePurchaseReturnRequestStateState must be used within a usePurchaseReturnRequestState');
  }
  return context;
};
