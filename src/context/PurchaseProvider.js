import React, { useContext, createContext, useState, useEffect } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';
import { useNavigate } from 'react-router-dom';
import { useGetOutletMappingQuery } from 'store/services/OutletMapping';
import { useGetOrderStatusQuery } from 'store/services/OrderStatus';
const Purchase = createContext();

export const PurchaseStateProvider = ({ children }) => {
  const getwareHouseData = useGetWarehouseQuery();
  const orderStatusData = useGetOrderStatusQuery();
  const getOutletMappingData = useGetOutletMappingQuery();
  const [selectedWarehouseId, setSelectedWarehouseId] = useState('');                  
  const [selectOutletId, setSelectedOutletId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { currentTheme } = useTheme();


  return (
    <Purchase.Provider
      value={{
        currentTheme,
        getwareHouseData, 
        getOutletMappingData,
        isOpen,
        setIsOpen,
        navigate,
        setSelectedOutletId,
        selectOutletId  ,
        orderStatusData,
        selectedWarehouseId,
         setSelectedWarehouseId
      }}
    >
      {children}
    </Purchase.Provider>
  );
};

export const usePurchaseState = () => {
  const context = useContext(Purchase);
  if (!context) {
    throw new Error('usePurchaseState must be used within a usePurchaseState');
  }
  return context;
};
