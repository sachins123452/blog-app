import MainSearch from 'components/main_search_header_bar/MainSearch';
import React,{useEffect,useState} from 'react';
import { Grid } from '@mui/material';
import { useSalesState } from 'context/SalesProvider';


const SalesMainSearch = () => {
  const { getSalesWareHouseData, SalesOrderStatusData, selectOrderStatusId, setSelectedOrderStatusId, selectedWarehouseId, setSelectedWarehouseId } =
    useSalesState();
  const [options, setOptions] = useState([]);

  console.log('selectOrderStatusId ===============', selectOrderStatusId);

  useEffect(() => {
    try {
      if (getSalesWareHouseData?.isSuccess) {
        let d = getSalesWareHouseData?.data?.data?.map((item) => ({
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
  }, [getSalesWareHouseData]);

  useEffect(() => {
    try {
      if (SalesOrderStatusData.isSuccess) {
        let arr = [];
        Object.keys(SalesOrderStatusData?.data?.data).map((itm) => {
          arr.push({ id: itm, label: itm });
        });
        setOptions((prev) => [
          ...prev,
          {
            label: 'Order Status',
            height: 'auto',
            options: arr,
            handleValueChange: (selectedItem) => {},
            selectedValue: selectOrderStatusId,
            setSelectedValue: setSelectedOrderStatusId
          }
        ]);
      }
    } catch (e) {
      console.error('Error while getting order status data', e);
    }
  }, [SalesOrderStatusData]);

  return (
    <Grid item xs={12} width={'100%'}>
      <MainSearch height={'auto'} options={options} />
    </Grid>
  );
};



export default SalesMainSearch;
