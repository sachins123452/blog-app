import GRNTabel from 'components/GRNTable/GRNTabel';
import React from 'react';
import { Button } from '@mui/material';

const GRNTableBatchInfo = (props) => {
  return (
    <div>
      <GRNTabel
        actionKey={{
          key: 'Action',
          value: (
            <Button
              size="small"
              sx={{ borderRadius: 2, fontSize: 10, backgroundColor: '#006caf' }}
              variant="contained"
              onClick={props.handleClick}
            >
              Discard
            </Button>
          )
        }}
      />
    </div>
  );
};

export default GRNTableBatchInfo;
