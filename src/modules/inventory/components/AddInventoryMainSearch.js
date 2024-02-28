import React, { useState } from 'react'
import MainSearch from 'components/main_search_header_bar/MainSearch';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useAddInventoryState } from 'context/AddInventoryProvider';

export default function AddInventoryMainSearch() {
  
  const {getCategoriesData, selectedCategoryId, setSelectedCategoryId,setSelectedSubCategoryId,selectedSubCategoryId,getSubCategoriesData }= useAddInventoryState();
  const [options, setOptions] = useState([]);



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
    
    

