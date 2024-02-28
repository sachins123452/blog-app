import GRNTabel from 'components/GRNTable/GRNTabel';
import React from 'react';

const GRNTableDeliveryInfo = () => {
  return (
    <div>
      <GRNTabel rows={data} columns={heading_Title} />
    </div>
  );
};

export default GRNTableDeliveryInfo;

const data = [
  {
    'Invoice ID': 'ZW-INV23-001',
    'Order ID': 'ZW20230825-001',
    'Dispatch Date': '15 Aug 2023',
    'From Warehouse': 'ZW Abad | WH01 Corporate Park, Near Nirma University, Ahemedabaad 382482,Gujrat',
    'To Warehouse': 'Ahmedabaad | ZW-DIST-001 101,Vikasgurh road Paldi,Ahemdabaad 38007,Gujrat',
    'Delivery Info': 'Eicher Pro Truck GJ 01 LK 1188 Rajubai 7985108574'
  }
];
const heading_Title = [
  { id: 'Invoice ID', label: 'Invoice ID' },
  { id: 'Order ID', label: 'Order ID' },
  { id: 'Dispatch Date', label: 'Dispatch Date' },
  { id: 'From Warehouse', label: 'From Warehouse' },
  { id: 'To Warehouse', label: 'To Warehouse' },
  { id: 'Delivery Info', label: 'Delivery Info' }
];
