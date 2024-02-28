import { useTheme } from 'components/Theme/ThemeProvider';
import React, { useContext, createContext, useState } from 'react';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';
import {useNavigate} from 'react-router-dom'
import { useGetCategoriesQuery } from 'store/services/categories';
import { useGetSubCategoriesQuery } from 'store/services/Subcategories';

const AddInventory = createContext();

export const AddInventoryStateProvider = ({ children }) => {
  const getwareHouseData = useGetWarehouseQuery();
  const getCategoriesData = useGetCategoriesQuery();
  const { currentTheme } = useTheme();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null)
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);
  const [ isOpen,setIsOpen] = useState(false);
  const [ selectedData,setSelectedData] = useState({})
  const getSubCategoriesData =useGetSubCategoriesQuery({CategoryId:selectedCategoryId});
const navigate=useNavigate()

  return (
    <AddInventory.Provider
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
    </AddInventory.Provider>
  );
};

export const useAddInventoryState = () => {
  const context = useContext(AddInventory);
  if (!context) {
    throw new Error('useAddInventoryState must be used within a useAddInventoryState');
  }
  return context;
};
