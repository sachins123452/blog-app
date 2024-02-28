import React, { useContext, createContext, useState, useEffect } from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';
import { useGetCategoriesQuery } from 'store/services/categories';
import { useNavigate } from 'react-router-dom';
import { useGetSubCategoriesQuery } from 'store/services/Subcategories';
const Inventory = createContext();

export const InventoryStateProvider = ({ children }) => {
  const getwareHouseData = useGetWarehouseQuery();
  const getCategoriesData = useGetCategoriesQuery();
  //   const OrderStatusData = useGetOrderStatusQuery();
  const[selectedWarehouseId,setSelectedWarehouseId] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const[selectedSubCategoryId,setSelectedSubCategoryId] =useState('')
  const getSubCategoriesData =useGetSubCategoriesQuery({CategoryId:selectedCategoryId});
  const [isOpen,setIsOpen]=useState(false)
  const navigate=useNavigate()  
  const { currentTheme } = useTheme();
 
  return (
    <Inventory.Provider
      value={{
        currentTheme,
        getwareHouseData,
        setSelectedWarehouseId,
        selectedWarehouseId,
        getCategoriesData,
        selectedCategoryId,
        setSelectedCategoryId,
        getSubCategoriesData,
        selectedSubCategoryId,
        setSelectedSubCategoryId,
        isOpen,
        setIsOpen,
        navigate,
        
      }}
      >
              {children}
    </Inventory.Provider>
  );
};

export const useInventoryState = () => {
  const context = useContext(Inventory);
  if (!context) {
    throw new Error('useInventoryState must be used within a useInventoryState');
  }
  return context;
};
