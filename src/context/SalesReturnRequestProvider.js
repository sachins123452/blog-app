import React, { useContext, createContext, useState } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';

const SalesReturnRequest = createContext();

export const SalesReturnRequestStateProvider = ({ children }) => {
  const getSalesReturnRequestWareHouseData = useGetWarehouseQuery();
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(''); 
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const { currentTheme } = useTheme();

  return (
    <SalesReturnRequest.Provider
      value={{
        currentTheme,
        getSalesReturnRequestWareHouseData,
        selectedWarehouseId,
        setSelectedWarehouseId,
        isOpen,
        setIsOpen,
        isOpenModal,
        setIsOpenModal
      }}
    >
      {children}
    </SalesReturnRequest.Provider>
  );
};

export const useSalesReturnRequestState = () => {
  const context = useContext(SalesReturnRequest);
  if (!context) {
    throw new Error('useSalesReturnRequestState must be used within a useSalesReturnRequestState');
  }
  return context;
};
