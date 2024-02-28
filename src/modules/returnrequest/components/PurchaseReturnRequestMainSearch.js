import MainSearch from 'components/main_search_header_bar/MainSearch';
import React,{useEffect,useState} from 'react';
import { Grid } from '@mui/material';
import { usePurchaseReturnRequestState } from 'context/PurchaseReturnRequestProvider';

const PurchaseReturnRequestMainSearch = () => {
  const { getPurchaseReturnRequestWarehouseData,  selectedWarehouseId, setSelectedWarehouseId } =
  usePurchaseReturnRequestState();
const [options, setOptions] = useState([]);

useEffect(() => {
  try {
    if (getPurchaseReturnRequestWarehouseData?.isSuccess) {
      let d = getPurchaseReturnRequestWarehouseData?.data?.data?.map((item) => ({
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
}, [getPurchaseReturnRequestWarehouseData]);


return (
  <Grid item xs={12} width={'100%'}>
    <MainSearch height={'auto'} options={options} />
  </Grid>
);
};


export default PurchaseReturnRequestMainSearch;
