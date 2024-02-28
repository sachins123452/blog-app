import React, { useContext, createContext, useState } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';
import { useGetOrderStatusQuery } from 'store/services/OrderStatus';

const Sales = createContext();

export const SalesStateProvider = ({ children }) => {
  const getSalesWareHouseData = useGetWarehouseQuery();
  const SalesOrderStatusData = useGetOrderStatusQuery();
  const [selectedWarehouseId, setSelectedWarehouseId] = useState('');
  const [isOpenSecondaryModal, setIsOpenSecondaryModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { currentTheme } = useTheme();

  return (
    <Sales.Provider
      value={{
        currentTheme,
        getSalesWareHouseData,
        SalesOrderStatusData,
        isOpenSecondaryModal,
        setIsOpenSecondaryModal,
        isOpen,
        setIsOpen,
        selectedWarehouseId,
        setSelectedWarehouseId
      }}
    >
      {children}
    </Sales.Provider>
  );
};

export const useSalesState = () => {
  const context = useContext(Sales);
  if (!context) {
    throw new Error('useSalesState must be used within a useSalesState');
  }
  return context;
};
