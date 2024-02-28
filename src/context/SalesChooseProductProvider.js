import React, { useContext, createContext, useState } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';

const SalesChooseProduct = createContext();

export const SalesChooseProductProvider = ({ children }) => {
//   const getwareHouseData = useGetWarehouseQuery();
//   const OrderStatusData = useGetOrderStatusQuery();
//   const[selectedWarehouseId,setSelectedWarehouseId] = useState('');
//   const [selectOrderStatusId,setSelectedOrderStatusId] = useState('')
const [isOpen, setIsOpen] = React.useState(false);

    const { currentTheme } = useTheme();

  return (
    <SalesChooseProduct.Provider
      value={{
        currentTheme,
        // getwareHouseData,
        // OrderStatusData,
        // setSelectedWarehouseId,
        // selectedWarehouseId,
        // selectOrderStatusId,
        // setSelectedOrderStatusId,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </SalesChooseProduct.Provider>
  );
};

export const useSalesChooseProductState = () => {
  const context = useContext(SalesChooseProduct);
  if (!context) {
    throw new Error('useSalesChooseProductState must be used within a useSalesChooseProductState');
  }
  return context;
};
