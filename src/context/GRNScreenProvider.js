import React, { useContext, createContext, useState } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';
const GRNScreen = createContext();

export const GRNScreenStateProvider = ({ children }) => {
  const navigate = useNavigate();
  const { currentTheme } = useTheme();
  const getPurchaseGrnWarehouseData=useGetWarehouseQuery()
  // const navigate = useNavigate();

  return (
    <GRNScreen.Provider
      value={{
        currentTheme,
        navigate,
        getPurchaseGrnWarehouseData
      }}
    >
      {children}
    </GRNScreen.Provider>
  );
};

export const useGRNScreenState = () => {
  const context = useContext(GRNScreen);
  if (!context) {
    throw new Error('useGRNScreenStateState must be used within a usePurchaseState');
  }
  return context;
};
