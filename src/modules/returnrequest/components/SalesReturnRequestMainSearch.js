import MainSearch from 'components/main_search_header_bar/MainSearch';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useSalesReturnRequestState } from 'context/SalesReturnRequestProvider';

const SalesReturnRequestMainSearch = () => {
  const { getSalesReturnRequestWareHouseData, selectedWarehouseId, setSelectedWarehouseId } = useSalesReturnRequestState();
  const [options, setOptions] = useState([]);

  // console.log('selectOrderStatusId ===============', selectOrderStatusId);

  useEffect(() => {
    try {
      if (getSalesReturnRequestWareHouseData?.isSuccess) {
        let d = getSalesReturnRequestWareHouseData?.data?.data?.map((item) => ({
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
            isAutoComplete: true
          }
        ]);
      }
    } catch (e) {
      console.error('Error while getting warehouse Data ', e);
    }
  }, [getSalesReturnRequestWareHouseData]);

  return (
    <Grid item xs={12} width={'100%'}>
      <MainSearch height={'auto'} options={options} />
    </Grid>
  );
};

export default SalesReturnRequestMainSearch;
