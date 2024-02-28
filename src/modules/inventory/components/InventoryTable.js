import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react'
import { Grid } from '../../../../node_modules/@mui/material/index';
const rows = [
    {
      '#': '1',
      ProductID: 'ZW-SF-001',
      ProductName: 'Complan - Nutrition and Health Drink Royale Chocolate',
      Warehouse: 'Ahemdabad ZW-DISTWAR-001',
      UOM: 'Box',
      Size: '1 KG',
      AvailableQty: '58',
      MinimumStocklevel: '50',
      DiscardQty: '12'
    },
    {
      '#': '2',
      ProductID: 'ZW-SF-002',
      ProductName: 'Complan Nutrition and Health Drink Pista Badam',
      Warehouse: 'Gandhinagar ZW-DISTWAR-002',
      UOM: 'Jar',
      Size: '1 KG',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '3'
    },
    {
      '#': '3',
      ProductID: 'ZW-SF-003',
      ProductName: 'Sugar Free Green Natural Sweetener and Sugar Subsitute',
      Warehouse: 'Gandhinagar ZW-DISTWAR-002',
      UOM: 'Box',
      Size: '500 gm',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '3'
    },
    {
      '#': '4',
      ProductID: 'ZW-SF-004',
      ProductName: 'Sugar Free Gold Low Calorie Sweetner',
      Warehouse: 'Ahemdabad ZW-DISTWAR-001',
      UOM: 'Box',
      Size: '1 KG',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '3'
    },
    {
      '#': '5',
      ProductID: 'ZW-SF-005',
      ProductName: 'Sugar Free Natura Low Calorie Sweetner -75g (100N*0.75g)',
      Warehouse: 'Ahemdabad ZW-DISTWAR-001',
      UOM: 'Jar',
      Size: '500 gm',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '3'
    },
    {
      '#': '6',
      ProductID: 'ZW-SF-006',
      ProductName: "Sugar Free D'lite Quinoa & almonds Dark Chocolate Bar",
      Warehouse: 'Gandhinagar ZW-DISTWAR-002',
      UOM: 'Box',
      Size: '500 gm',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '3'
    },
    {
      '#': '7',
      ProductID: 'ZW-SF-007',
      ProductName: "Sugar Free D'lite Dark Assorted Chocolate Gift Pack",
      Warehouse: 'Gandhinagar ZW-DISTWAR-002',
      UOM: 'Box',
      Size: '500 gm',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '3'
    },
    {
      '#': '8',
      ProductID: 'ZW-SF-008',
      ProductName: 'Sugar Free Green Natural Stevia Jar (200g)',
      Warehouse: 'Ahemdabad ZW-DISTWAR-001',
      UOM: 'Jar',
      Size: '500 gm',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '3'
    },
    {
      '#': '9',
      ProductID: 'ZW-SF-009',
      ProductName: 'Sugar Free Natura - Sweeting Drops 10ml',
      Warehouse: 'Gandhinagar ZW-DISTWAR-002',
      UOM: 'Pouch',
      Size: '500 gm',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '3'
    },
    {
      '#': '10',
      ProductID: 'ZW-SF-010',
      ProductName: 'Sugar Free Green 100% Natural Sweetener',
      Warehouse: 'Gandhinagar ZW-DISTWAR-002',
      UOM: 'Box',
      Size: '500 gm',
      AvailableQty: '56',
      MinimumStocklevel: '80',
      DiscardQty: '13'
    }
  ];

  const columns = [
    { id: '#', label: '#', minWidth: 100 },
    { id: 'ProductID', label: 'Product ID/SKU', minWidth: 100 },
    {
      id: 'ProductName',
      label: 'Product Name',
      minWidth: 100,
      align: 'center'
    },
    {
      id: 'Warehouse',
      label: 'Warehouse',
      minWidth: 100,
      align: 'center'
    },
    {
      id: 'UOM',
      label: 'UOM',
      minWidth: 100,
      align: 'center'
    },
    {
      id: 'Size',
      label: 'Size',
      minWidth: 100,
      align: 'center'
    },
    {
      id: 'AvailableQty',
      label: 'Available Qty.',
      minWidth: 100,
      align: 'center'
    },
    {
      id: 'MinimumStocklevel',
      label: 'Minimum Stock Level',
      minWidth: 100,
      align: 'center'
    },
    {
      id: 'DiscardQty',
      label: 'Discard Qty.',
      minWidth: 100,
      align: 'center'
    }
  ];

export default function InventoryTable() {
  return (
    <Grid width={400} item xs={12} md={12} lg={12}>
    <BasicTabel
    searchOn={['ProductID','#','ProductName','Warehouse']}
      rows={rows}
      columns={columns}
      statusKey={'Order status'}
      amountKey={'Total Amount'}
      actionButton={{
        key: 'Action',
        value: (
          <div
            role="button"
            tabIndex={0}
            // onClick={() => {
            //   handleClick();
            // }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                alert('onKeyDown!');
              }
            }}
            className="tablebtn_purchase"
          >
            {' '}
            {/* <VisibilityIcon className="VisibilityIcon_purchase" /> View */}
          </div>
        )
      }}
    />
  </Grid>
  )
}
