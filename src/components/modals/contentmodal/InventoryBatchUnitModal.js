import React from 'react';
import ReusableModal from '../routemodal/ResuableModal';

// import BasicTabel from 'pages/dashboard/BasicTabel';
// import DropDown from 'components/dropdown/DropDown';
import GRNTabel from 'components/GRNTable/GRNTabel';
import CustomButton from 'components/buttons/CustomButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from 'components/Theme/ThemeProvider';
const InventoryBatchUnitModal = (props) => {
  const {currentTheme}=useTheme()
  const matches = useMediaQuery('(min-width:600px)');
  const matches1 = useMediaQuery('(min-width:571px)');
  let width1 = '';
  width1 = !matches ? '70%' : '85%';
  width1 = !matches1 ? '45%' : '85%';

  //   const [selectedValue, setSelectedValue] = useState(null);
  //   const options = [
  //     { label: 'sachin', id: 1 },
  //     { label: 'hemu', id: 2 },
  //     { label: 'raju', id: 3 },
  //     { label: 'Gullu', id: 4 }
  //   ];
  //   const handleValueChange = (selectedItem) => {
  //     console.log('Selected Item:', selectedItem);
  //   };

 

  return (
    <div>
      <ReusableModal
        onClose={props.handleCloseModal}
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        showCloseButton={false}
        backgroundColor={currentTheme.bodyColor}
        height="100%"
        width={width1}
        justifyContent={'start'}
        padding={10}
        ModalContent={
          <>
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', padding: '1%' }}>
              <text style={{ width: '100%', display: 'flex', fontFamily: 'Medium', fontSize: 18, fontWeight: '600',color:currentTheme.textColor }}>Batch Units</text>
              <text style={{ width: '100%', display: 'flex', fontFamily: 'Medium', fontSize: 14,color:currentTheme.textColor }}>
                Choose the batch units for initiating the return request.
              </text>
              <GRNTabel rows={props.rows} columns={props.columns} align={'left'} rowalign={'left'} borderRadius={12} />
              <div style={{ marginTop: '2%', width: '100%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '30%', marginRight: '5px' }}>
                  <CustomButton
                    backgroundColor={'#4cb748'}
                    color={'#ffffff'}
                    label={'Confirm Batch Units'}
                    width={'100%'}
                    height={'50px'}
                    fontSize={12}
                    borderRadius={5}
                    fontWeight={600}
                    onClick={props.handleCloseModal}
                  />
                </div>
                <div style={{ width: '30%' }}>
                  <CustomButton
                    backgroundColor={'#ffffff'}
                    color={'#858585'}
                    label={'Cancel'}
                    width={'100%'}
                    height={'50px'}
                    fontSize={12}
                    borderRadius={5}
                    fontWeight={600}
                    onClick={props.handleCloseModal}
                  />
                </div>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
};

export default InventoryBatchUnitModal;
InventoryBatchUnitModal.defaultProps={
   rows : [
    {
      '#': '1',
      Product: 'Complan - Nutrition and Health Drink Royale Chocolate',
      SKU: 'ZWCO#01',
      BatchId: 'ZWCOB1#001'
    },
    {
      '#': '2',
      Product: 'Complan - Nutrition and Health Drink Royale Chocolate',
      SKU: 'ZWCO#01',
      BatchId: 'ZWCOB1#002'
    },
    {
      '#': '3',
      Product: 'Complan - Nutrition and Health Drink Royale Chocolate',
      SKU: 'ZWCO#01',
      BatchId: 'ZWCOB1#003'
    }
  ],
   columns : [
    { id: '#', label: '#', minWidth: 100 },
    { id: 'Product', label: 'Product', minWidth: 100 },
    {
      id: 'SKU',
      label: 'SKU',
      minWidth: 100,
      align: 'center'

      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'BatchId',
      label: 'Batch ID',
      minWidth: 100,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'dropDown', label: 'Reason', align: 'center', minWidth: 100 }
  ]
}
