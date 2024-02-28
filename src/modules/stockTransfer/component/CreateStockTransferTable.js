import BasicTabel from 'pages/dashboard/BasicTabel';
import React from 'react'
import { Grid } from '../../../../node_modules/@mui/material/index';


export default function CreateStockTransferTable() {
    const rows = [
        {
          SKU: 'ZWCO#01',
          Product: 'Complan - Nutrition and Health Drink Royale Chocolate',
          BatchNo: 'ZWO1',
          AvailableUnits: '10'
        },
        {
          SKU: 'ZWCO#02',
          Product: 'Complan Nutrition and Health Drink Pista Badam',
          BatchNo: 'ZWO2',
          AvailableUnits: '43'
        },
        {
          SKU: 'ZWCO#03',
          Product: 'Sugar Free Green Natural Sweetener and Sugar Subsitute',
          BatchNo: 'ZWO3',
          AvailableUnits: '34'
        },
        {
          SKU: 'ZWCO#04',
          Product: 'Sugar Free Gold Low Calorie Sweetner',
          BatchNo: 'ZWO4',
          AvailableUnits: '98'
        },
        {
          SKU: 'ZWCO#05',
          Product: 'Sugar Free Natura Low Calorie Sweetner -75g (100N*0.75g)',
          BatchNo: 'ZWO5',
          AvailableUnits: '11'
        },
        {
          SKU: 'ZWCO#06',
          Product: "Sugar Free D'lite Quinoa & almonds Dark Chocolate Bar",
          BatchNo: 'ZWO6',
          AvailableUnits: '34'
        },
        {
          SKU: 'ZWCO#07',
          Product: "Sugar Free D'lite Dark Assorted Chocolate Gift Pack",
          BatchNo: 'ZWO7',
          AvailableUnits: '56'
        },
        {
          SKU: 'ZWCO#08',
          Product: 'Sugar Free Green Natural Stevia Jar (200g)',
          BatchNo: 'ZWO8',
          AvailableUnits: '12'
        },
        {
          SKU: 'ZWCO#09',
          Product: 'Sugar Free Natura - Sweeting Drops 10ml',
          BatchNo: 'ZW09',
          AvailableUnits: '98'
        },
        {
          SKU: 'ZWCO#10',
          Product: 'Sugar Free Green 100% Natural Sweetener',
          BatchNo: 'ZW10',
          AvailableUnits: '22'
        }
      ];
      
      const columns = [
        { id: 'SKU', label: 'SKU', minWidth: 140 },
        { id: 'Product', label: 'Product', minWidth: 150 },
        {
          id: 'BatchNo',
          label: 'Batch No.',
          minWidth: 160,
          align: 'center'
        },
        {
          id: 'AvailableUnits',
          label: 'Available Units',
          minWidth: 160,
          align: 'center'
        },
        {
          id: 'qty',
          label: 'Moving Units',
          minWidth: 160,
          align: 'center'
        }
      ];

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
