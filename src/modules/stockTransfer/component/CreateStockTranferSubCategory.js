import DropDown from 'components/dropdown/DropDown';
import { useCreateStockTransferState } from 'context/CreateStockTransferProvider';
import { useInventoryState } from 'context/InventoryProvider';
import React, { useEffect, useState } from 'react';
import { useGetSubCategoriesQuery } from 'store/services/Subcategories';

const CreateStockTransferSubCategory = () => {
  
  const { selectedCategoryId} = useCreateStockTransferState();
  const getSubCategoriesData = useGetSubCategoriesQuery({CategoryId:selectedCategoryId});
  const [data, setData] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  // alert(selectedCategoryId)
  const handleValueChange = (selectedItem) => {
    setSelectedValue(selectedItem.label);
  };

  useEffect(() => {
    if (getSubCategoriesData?.isSuccess) {
      let d = getSubCategoriesData?.data?.data?.map((item) => ({
        id: item?.Id,
        label: item?.CategoryName
      }));
      setData(d);
    }
  }, [getSubCategoriesData]);

 

  return (
    <DropDown
    placeholder={`Select Subcategories`}
    options={data}
    onValueChange={handleValueChange}
    selectedValue={selectedValue}
    setSelectedValue={setSelectedValue}
    backgroundColor="#f8f8f8"
    color="#000"
  />
  );
};

export default CreateStockTransferSubCategory;
