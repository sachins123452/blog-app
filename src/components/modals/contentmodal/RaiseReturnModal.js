import React, { useState } from "react";
import ReusableModal from "./ResuableModal";
import CustomButton from "components/buttons/CustomButton";
import GRNTabel from "components/GRNTable/GRNTabel";
import {Button } from '@mui/material';
export default function RaiseReturnModal() {
    const rows=[
        { id: '1', SKU: 'ZML059484H', BatchId: 'ZML059484H', Product: 'PRODUddCT1', shippedUnit: 3, },
        { id: '2', SKU: 'ZML059484H', BatchId: 'ZML059485J', Product: 'PRODUddCT2', shippedUnit: 4, },
        { id: '3', SKU: 'ZML059484H', BatchId: 'ZML059486L', Product: 'PRODUddCT3', shippedUnit: 5, },
        { id: '4', SKU: 'ZML059484H', BatchId: 'ZML059486L', Product: 'PRODUddCT3', shippedUnit: 5, },
      ]
      const columns =[
        { id: 'id', label: 'ID',minWidth:80 },
        { id: 'SKU', label: 'SKU' ,minWidth:80},
        { id: 'BatchId', label: 'BatchId',minWidth:80 },
        { id: 'Product', label: 'Product',minWidth:80 },
       
    
    
      ]
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
    <CustomButton onClick={handleOpenModal} />
    <ReusableModal
      // onClose={handleCloseModal}
      showCloseButton={false}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      height="350px"
      width='600px'
      borderRadius="10px"
      ModalContent={
        <>
        <div style={{marginLeft:30}}>Batch Unit</div>
        <div>Choose the batch unit for initiating a return request</div>
        <div style={{ display: 'flex',  flexDirection: 'column',width:'100%',justifyContent:'center',alignItems:'center' }}>
        
        <div style={{ display: 'flex',width:'80%',marginTop:10}}>
        <GRNTabel rows={rows} columns={columns} borderRadius={'5px'}/>
        </div>
        </div>
        <Button
            size="normal"
            sx={{ borderRadius: 2, backgroundColor: '#0174bf' }}
            variant="contained"
            onClick={handleCloseModal}
          >
            Thank You
          </Button>
        </>
      }
    />
  </div>
  );
}
