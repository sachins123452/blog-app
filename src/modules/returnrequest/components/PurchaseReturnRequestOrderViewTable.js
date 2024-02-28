import GRNTabel from 'components/GRNTable/GRNTabel';
import React from 'react';
import { Button } from '@mui/material';
import { Grid } from '../../../../node_modules/@mui/material/index';

const PurchaseReturnRequestOrderViewTable = (props) => {
  
  return (
    <Grid item xs={12} md={8} lg={8}>
      <GRNTabel
        rows={rows}
        columns={columns}
        actionKey={{
          key: 'Action',
          value: (
            <Button
              size="small"
              sx={{ borderRadius: 2, fontSize: 10, backgroundColor: '#006caf' }}
              variant="contained"
              onClick={props.handleDiscard}
            >
              Discard
            </Button>
          )
        }}
      />
    </Grid>
  );
};

export default PurchaseReturnRequestOrderViewTable;

const rows = [
  {
    id: '1',
    SKU: 'ZML059484H',
    BatchId: 'ZML059484H',
    Product: 'Sugar FreeDlite Dartk Chocolate Gift Pack',
    shippedUnit: 1,
    discardQty: '1'
  },
  {
    id: '2',
    SKU: 'ZML059484H',
    BatchId: 'ZML059485J',
    Product: 'Sugar Free Green Natural Stevia Jae (200 g)',
    shippedUnit: 3,
    discardQty: '2'
  },
  {
    id: '3',
    SKU: 'ZML059484H',
    BatchId: 'ZML059486L',
    Product: 'Sugar Free Natural Low Calorie Sweetner',
    shippedUnit: 1,
    discardQty: '1'
  }
];
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'SKU', label: 'SKU' },
  { id: 'BatchId', label: 'Batch Id' },
  { id: 'Product', label: 'Product' },
  { id: 'shippedUnit', label: 'Shipped Qty' },
  { id: 'discardQty', label: 'Discarded Qty.' },

  { id: 'Action', label: 'Action' }
];
