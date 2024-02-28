import React from 'react'
import { Grid } from '@mui/material';
import GRNTabel from 'components/GRNTable/GRNTabel';
import DropDown from 'components/dropdown/DropDown';
import CustomButton from 'components/buttons/CustomButton';
import { useSalesChooseProductState } from 'context/SalesChooseProductProvider';
import InventoryBatchUnitModal from 'components/modals/contentmodal/InventoryBatchUnitModal';


const SalesChooseProductOrder = () => {
    let {setIsOpen, isOpen } = useSalesChooseProductState();
      const handleOpenModal = () => {
      setIsOpen(!isOpen);
    };

    const handleCloseModal = () => {
      setIsOpen(false);
    };
    const columns = [
        { id: 'sku', label: 'SKU', minWidth: 90 },
        { id: 'product', label: 'Product', minWidth: 140 },
        {
          id: 'uom',
          label: 'UOM',
          minWidth: 50,
          align: 'center'
        },
        {
          id: 'instock',
          label: 'Instock',
          minWidth: 70,
          align: 'center'
          // format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'returned qty.',
          label: 'Returned Qty.',
          minWidth: 80,
          align: 'center'
          // format: (value) => value.toLocaleString('en-US'),
        },
    
        {
          id: 'discarded reason',
          label: 'Discarded Reason',
          //  minWidth: 50,
          align: 'center'
          // format: (value) => value.toFixed(2),
        }
      ];
    
      const rows = [
        {
          sku: 'ZWCO#01',
          product: 'Order Issue',
          uom: 'Box',
          instock: '100',
          'returned qty.': (
            <input
              type="text"
              style={{ width: '40px', textAlign: 'center', backgroundColor: '#E5F1F8', borderRadius: '5px', border: '0px', color: '#0174BF' }}
              defaultValue={20}
            />
          ),
          'discarded reason': <DropDown />
        },
        {
          sku: 'ZWCO#01',
          product: 'Product Support ',
          uom: 'Box',
          instock: '100',
          'returned qty.': (
            <input
              type="text"
              style={{ width: '40px', textAlign: 'center', backgroundColor: '#E5F1F8', borderRadius: '5px', border: '0px', color: '#0174BF' }}
              defaultValue={100}
            />
          ),
          'discarded reason': <CustomButton label={'Select Batch Unit'} width={'90%'} onClick={handleOpenModal} />
        },
        {
          sku: 'ZWCO#01',
          product: 'Returns and Exchanges ',
          uom: 'Box',
          instock: '100',
          'returned qty.': (
            <input
              type="text"
              style={{ width: '40px', textAlign: 'center', backgroundColor: '#E5F1F8', borderRadius: '5px', border: '0px', color: '#0174BF' }}
              defaultValue={60}
            />
          ),
          'discarded reason': <DropDown />
        },
        {
          sku: 'ZWCO#01',
          product: 'Promotions and Discounts ',
          uom: 'Box',
          instock: '100',
          'returned qty.': (
            <input
              type="text"
              style={{ width: '40px', textAlign: 'center', backgroundColor: '#E5F1F8', borderRadius: '5px', border: '0px', color: '#0174BF' }}
              defaultValue={50}
            />
          ),
    
          'discarded reason': <DropDown />
        }
      ];
  return (
    <Grid>
   <GRNTabel columns={columns} rows={rows} borderRadius="10px" />
    
   {<InventoryBatchUnitModal  isOpen={isOpen} setIsOpen={setIsOpen} handleCloseModal={handleCloseModal} />}
  </Grid> 
  )
}


export default SalesChooseProductOrder
