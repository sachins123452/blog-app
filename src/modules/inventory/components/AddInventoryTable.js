import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react'
import { Grid } from '../../../../node_modules/@mui/material/index';

const rows = [
    {
      sku: 'ZWCO#01',
      product: 'Complan - Nutrition and Health Drink Royale Chocolate',
      uom: 'Box',
      instock: 3
    },
    { sku: 'ZWCO#02', product: 'Complan Nutrition and Health Drink Pista Badam', uom: 'Box', instock: 2 },
    {
      sku: 'ZWCO#03',
      product: 'Sugar Free Green Natural Sweetener and Sugar Subsitute',
      uom: 'Box',
      instock: 5
    },
    { sku: 'ZWCO#04', product: 'Sugar Free Gold Low Calorie Sweetner', uom: 'Box', instock: 3 },
    {
      sku: 'ZWCO#05',
      product: 'Sugar Free Natura Low Calorie Sweetner -75g (100N*0.75g)',
      uom: 'Box',
      instock: 2
    },
    {
      sku: 'ZWCO#06',
      product: "Sugar Free D'lite Quinoa & almonds Dark Chocolate Bar",
      uom: 'Pack',
      instock: 15
    },
    {
      sku: 'ZWCO#07',
      product: "Sugar Free D'lite Dark Assorted Chocolate Gift Pack",
      uom: 'Box',
      instock: 85
    },
    { sku: 'ZWCO#08', product: 'Sugar Free Green Natural Stevia Jar (200g)', uom: 'Jar', instock: 70 },
    { sku: 'ZWCO#09', product: 'Sugar Free Natura - Sweeting Drops 10ml', uom: 'Pack', instock: 45 },
    { sku: 'ZWCO#10', product: 'Sugar Free Green 100% Natural Sweetener', uom: 'Pouch', instock: 96 }
  ];
  
  const columns = [
    {
      id: 'sku',
      align: 'left',
      disablePadding: false,
      label: 'SKU'
    },
    {
      id: 'product',
      align: 'left',
      disablePadding: true,
      label: 'Product'
    },
    {
      id: 'uom',
      align: 'left',
      disablePadding: false,
      label: 'UOM'
    },
    {
      id: 'instock',
      align: 'left',
      disablePadding: false,
      label: 'In-Stock'
    },
    {
      id: 'action',
      align: 'center',
      disablePadding: false,
      label: 'Action'
    }
  ];

export default function AddInventoryTable() {
  return (
    <Grid width={800} item xs={12} md={12} lg={12}>
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
