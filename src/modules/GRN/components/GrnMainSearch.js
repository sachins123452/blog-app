import MainSearch from 'components/main_search_header_bar/MainSearch'
import React,{useEffect,useState} from 'react';
import { Grid } from '@mui/material';
import { useGRNScreenState } from 'context/GRNScreenProvider';

const GrnMainSearch = () => {
  const { getPurchaseGrnWarehouseData,  selectedWarehouseId, setSelectedWarehouseId } =
  useGRNScreenState();
const [options, setOptions] = useState([]);


useEffect(() => {
  try {
    if (getPurchaseGrnWarehouseData?.isSuccess) {
      let d = getPurchaseGrnWarehouseData?.data?.data?.map((item) => ({
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
          setSelectedValue: setSelectedWarehouseId,
          isAutoComplete:true
        }
      ]);
    }
  } catch (e) {
    console.error('Error while getting warehouse Data ', e);
  }
}, [getPurchaseGrnWarehouseData]);


return (
  <Grid item xs={12} width={'100%'}>
    <MainSearch height={'auto'} options={options} />
  </Grid>
);
};

export default GrnMainSearch