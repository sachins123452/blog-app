import { useTheme } from 'components/Theme/ThemeProvider';
import React, { useContext, createContext, useState } from 'react';
import { useGetSubCategoriesQuery } from 'store/services/Subcategories';
import { useGetCategoriesQuery } from 'store/services/categories';
import { useGetWarehouseQuery } from 'store/services/getWarehouses';

const Product = createContext();

export const ProductStateProvider = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const wareHouseData = useGetWarehouseQuery();
  const categoryData = useGetCategoriesQuery();
  const subCategoryData = useGetSubCategoriesQuery({ CategoryId: selectedCategoryId });
  const { currentTheme } = useTheme();
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const[selectedWarehouse, setSelectedWarehouse]=useState(null)
  // const [selectedData, setSelectedData] = useState({});

  return (
    <Product.Provider
      value={{
        currentTheme,
        setSelectedCategoryId,
        selectedCategoryId,
        categoryData,
        setSelectedSubCategoryId,
        selectedSubCategoryId,
        setIsOpen,
        subCategoryData,
        isOpen,
        wareHouseData,
        selectedWarehouse, 
        setSelectedWarehouse
     
      }}
    >
      {children}
    </Product.Provider>
  );
};

export const useProductState = () => {
  const context = useContext(Product);
  if (!context) {
    throw new Error('useProductStateState must be used within a useProductStateState');
  }
  return context;
};
