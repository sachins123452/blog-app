import MainSearch from 'components/main_search_header_bar/MainSearch';
import { useProductState } from 'context/AddProductProvider';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';


const AddProductsMainSearch = () => {
  const { categoryData, subCategoryData, setSelectedSubCategoryId, selectedSubCategoryId, setSelectedCategoryId, selectedCategoryId }=useProductState();
  const [options, setOptions] = useState([]);
  useEffect(() => {
    try {
      if (categoryData.isSuccess) {
        let arr = [];
        categoryData?.data?.data?.map((item) => {
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
      console.error('Error while getting category Data ', e);
    }
  }, [categoryData.isSuccess]);

  useEffect(() => {
    try {
      if (subCategoryData.isSuccess && selectedCategoryId) {
        let d = [];
        subCategoryData?.data?.data?.map((item) => {
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
  }, [subCategoryData, selectedCategoryId]);

  return (
    <Grid item xs={12} width={'100%'}>
      <MainSearch height={'auto'} options={options} />
    </Grid>
  );
};

export default AddProductsMainSearch;
