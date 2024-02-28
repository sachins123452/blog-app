import MainSearch from 'components/main_search_header_bar/MainSearch';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { usePurchaseState } from 'context/PurchaseProvider';

const PurchaseMainSearch = () => {
  const { getwareHouseData, orderStatusData, selectOrderStatusId, setSelectedOrderStatusId, selectedWarehouseId, setSelectedWarehouseId } =
    usePurchaseState();
  const [options, setOptions] = useState([]);

  console.log('selectOrderStatusId ===============', selectOrderStatusId);

  useEffect(() => {
    try {
      if (getwareHouseData?.isSuccess) {
        let d = getwareHouseData?.data?.data?.map((item) => ({
          id: item?.WarehousesId,
          label: item?.Name
        }));
        setOptions((prev) => [
          {
            label: 'Warehouse',
            height: 'auto',
            options: d,
            handleValueChange: (selectedItem) => {},
            selectedValue: selectedWarehouseId,
            setSelectedValue: setSelectedWarehouseId,
            isAutoComplete:true
          },
          ...prev
        ]);
      }
    } catch (e) {
      console.error('Error while getting warehouse Data ', e);
    }
  }, [getwareHouseData,selectedWarehouseId,setSelectedWarehouseId]);

  useEffect(() => {
    try {
      if (orderStatusData.isSuccess) {
        let arr = [];
        Object.keys(orderStatusData?.data?.data).map((itm) => {
          arr.push({ id: itm, label: itm });
        });
        setOptions((prev) => [
          {
            label: 'Order Status',
            height: 'auto',
            options: arr,
            handleValueChange: (selectedItem) => {},
            selectedValue: selectOrderStatusId,
            setSelectedValue: setSelectedOrderStatusId,
          },
          ...prev
        ]);
      }
    } catch (e) {
      console.error('Error while getting order status data', e);
    }
  }, [orderStatusData,selectOrderStatusId,setSelectedOrderStatusId]);

  return (
    <Grid item xs={12} width={'100%'}>
      <MainSearch height={'auto'} options={options} />
    </Grid>
  );
};

export default PurchaseMainSearch;
