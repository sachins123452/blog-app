import React, { useContext, createContext, useState, useEffect } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';
import { useNavigate } from 'react-router-dom';
const PurchaseOrderView = createContext();

export const PurchaseOrderViewStateProvider = ({ children }) => {
  const getwareHouseData = useGetWarehouseQuery();
  // useEffect(()=>{
  // // alert()
  // console.log("getwareHouseData Line 11 ===============",getwareHouseData)
  // },[getwareHouseData])
  const [selectedWarehouseId, setSelectedWarehouseId] = useState('');
  const [selectOrderStatusId, setSelectedOrderStatusId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { currentTheme } = useTheme();

  return (
    <PurchaseOrderView.Provider
      value={{
        currentTheme,
        getwareHouseData,
        setSelectedWarehouseId,
        selectedWarehouseId,
        selectOrderStatusId,
        setSelectedOrderStatusId,
        isOpen,
        setIsOpen,
        navigate
      }}
    >
      {children}
    </PurchaseOrderView.Provider>
  );
};

export const usePurchaseOrderViewState = () => {
  const context = useContext(PurchaseOrderView);
  if (!context) {
    throw new Error('usePurchaseOrderViewState must be used within a usePurchaseOrderViewState');
  }
  return context;
};
