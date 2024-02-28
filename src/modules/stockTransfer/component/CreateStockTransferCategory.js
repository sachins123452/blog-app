import DropDown from 'components/dropdown/DropDown';
import { useCreateStockTransferState } from 'context/CreateStockTransferProvider';
import React, { useEffect, useState } from 'react';

const CreateStockTransferCategory= () => {
const { getCategoriesData, setSelectedCategoryId } = useCreateStockTransferState();
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedName, setSelectedName] = useState('');
  const handleValueChange = (selectedItem) => {
    setSelectedValue(selectedItem.label);
    setSelectedCategoryId(selectedItem.id);
  };
  useEffect(() => {

    if (getCategoriesData?.isSuccess) {
      let d = getCategoriesData?.data?.data?.map((item) => ({
        id: item?.Id,
        label: item?.CategoryName
      }));
      setData(d);
    }
  }, [getCategoriesData?.isSuccess]);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <DropDown
      placeholder={`Select Categories`}
        options={data}
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        backgroundColor="#f8f8f8"
        color="#000"
      />
    </div>
  );
};

export default CreateStockTransferCategory;
