import MainSearch from 'components/main_search_header_bar/MainSearch';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useInventoryState } from 'context/InventoryProvider';

// import OrderStatusDropdown from './OrderStatusDropdown';

const InventoryMainSearch = () => {
  const { 
    getwareHouseData, 
    getCategoriesData, 
    selectedCategoryId, 
    setSelectedCategoryId, 
    setSelectedWarehouseId, 
    selectedWarehouseId,
    setSelectedSubCategoryId,
    selectedSubCategoryId,
    getSubCategoriesData
   } = useInventoryState();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    try {
      if (getwareHouseData?.isSuccess) {
        let d = getwareHouseData?.data?.data?.map((item) => ({
          id: item?.WarehousesId,
          label: item?.Name
        }));
        setOptions((prev) => [
          ...prev,
          {
            label: 'Warehouse',
            height: 'auto',
            options: d,
            handleValueChange: (selectedItem) => {},
            selectedValue: selectedWarehouseId,
            setSelectedValue: setSelectedWarehouseId
          }
        ]);
      }
    } catch (e) {
      console.error('Error while getting warehouse Data ', e);
    }
  }, [getwareHouseData]);


  useEffect(() => {
    try {
      if (getCategoriesData?.isSuccess) {
        let arr = [];
        getCategoriesData?.data?.data?.map((item) => {
          arr.push({ id: item.Id, label: item.CategoryName });
        });
        setOptions((prev) => [
          ...prev,
          {
            label: 'Categories',
            height: 'auto',
            options: arr,
            handleValueChange: (selectedItem) => {},
            selectedValue: selectedCategoryId,
            setSelectedValue: setSelectedCategoryId
          },
          {
            label: 'Subcategories',
            height: 'auto',
            options: [],
          },
        ]);
      }
    } catch (e) {
      console.error('Error while getting warehouse Data ', e);
    }
  }, [getCategoriesData]);


  useEffect(() => {
    try {
      if (getSubCategoriesData.isSuccess && selectedCategoryId) {
        let d = [];
        getSubCategoriesData?.data?.data?.map((item) => {
          d.push({ id: item.Id, label: item.CategoryName });
        });
        setOptions((prev) => [
          ...prev.filter((option) => option?.label !== 'Subcategories'),
          {
            label: 'Subcategories',
            height: 'auto',
            options: d,
            handleValueChange: (selectedItem) => {},
            selectedValue: selectedSubCategoryId,
            setSelectedValue: setSelectedSubCategoryId
          }
        ]);
      }
    } catch (e) {
      console.error('Error while getting subcategory Data ', e);
    }
  }, [getSubCategoriesData,selectedCategoryId]);
  

  return (
    <Grid item xs={12} width={'100%'}>
      <MainSearch height={'auto'} options={options} />
    </Grid>
  );
};

export default InventoryMainSearch;
