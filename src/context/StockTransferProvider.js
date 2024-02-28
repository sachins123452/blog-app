import React, { useContext, createContext, useState, useEffect } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useNavigate } from 'react-router-dom';
// import { useGetSubCategoriesQuery } from 'store/services/Subcategories';
const StockTransfer=createContext();

export const StockTransferStateProvider = ({ children }) => {

  const navigate=useNavigate()
  
  const { currentTheme } = useTheme();



 
  
  return (
    <StockTransfer.Provider
      value={{
        currentTheme,
        navigate,
        
      }}
      >
              {children}
    </StockTransfer.Provider>
  );
};

export const useStockTransferState = () => {
  const context = useContext(StockTransfer);
  if (!context) {
    throw new Error('usePurchaseStateState must be used within a usePurchaseState');
  }
  return context;
};
