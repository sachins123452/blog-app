import React, { useContext, createContext, useState, useEffect } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';
import { useGetCategoriesQuery } from 'store/services/categories';

// import { useGetSubCategoriesQuery } from 'store/services/Subcategories';
const CreateStockTransfer=createContext();

export const CreateStockTransferStateProvider = ({ children }) => {
  const getwareHouseData = useGetWarehouseQuery();
  const getCategoriesData = useGetCategoriesQuery();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const[selectedWarehouseId,setSelectedWarehouseId] = useState('');
  const navigate=useNavigate()
  const { currentTheme } = useTheme();



 
  
  return (
    <CreateStockTransfer.Provider
      value={{
        currentTheme,
        navigate,
        getwareHouseData,
        setSelectedWarehouseId,
        selectedWarehouseId,
        getCategoriesData,
        selectedCategoryId,
        setSelectedCategoryId,
        
      }}
      >
              {children}
    </CreateStockTransfer.Provider>
  );
};

export const useCreateStockTransferState = () => {
  const context = useContext(CreateStockTransfer);
  if (!context) {
    throw new Error('usePurchaseStateState must be used within a usePurchaseState');
  }
  return context;
};
