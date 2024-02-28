import DropDown from 'components/dropdown/DropDown';
import { useCreateStockTransferState } from 'context/CreateStockTransferProvider';
import React, { useEffect, useState } from 'react';

const StockTransferWareHouse = () => {
const { getwareHouseData, setSelectedWarehouseId } = useCreateStockTransferState();
  const [data, setData] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    if (getwareHouseData.isSuccess) {
      let d = getwareHouseData?.data?.data?.map((item) => ({
        id: item?.WarehousesId,
        label: item?.Name
      }));
      setData(d);
    }
  }, [getwareHouseData?.isSuccess]);

  return (
    <DropDown
      key="dropdown"
      onValueChange={(selectedItem) => setSelectedName(selectedItem?.label)}
      options={data}
      selectedValue={selectedName}
      setSelectedValue={setSelectedWarehouseId}
      placeholder={`Select Warehouses`}
      paddingVertical={0}
      radius={10}
      itemHeight={21}
      left={null}
      right={null}
    />
  );
};

export default StockTransferWareHouse;
