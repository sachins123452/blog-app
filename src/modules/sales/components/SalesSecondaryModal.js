// import SearchRetailermodal from 'components/modals/contentmodal/SearchRetailermodal';
// import SecondaryOrdermodal from 'components/modals/contentmodal/SecondaryOrdermodal';
// import { useSalesState } from 'context/SalesProvider';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const SalesSecondaryModal = () => {
//   const navigate = useNavigate();
//   const { setIsOpenSecondaryModal, isOpenSecondaryModal } = useSalesState();

//   const handleCloseModal = () => {
//     setIsOpenSecondaryModal(false);
//     navigate('/dashboard/AddProducts');
//   };

//   return (
//     <div>
//       {<SecondaryOrdermodal isOpen={isOpenSecondaryModal} setIsOpen={setIsOpenSecondaryModal} handleCloseModal={handleCloseModal} />}
//     </div>
//   );
// };

// export default SalesSecondaryModal;
import React, { useState, useEffect } from 'react';
import ReusableModal from 'components/modals/routemodal/ResuableModal';
import { useTheme } from 'components/Theme/ThemeProvider';
import DropDown from 'components/dropdown/DropDown';
import { Button } from '@mui/material';
import '../../../assets/fonts/Fonts.css';
import { useNavigate } from 'react-router-dom';
import { useSalesState } from 'context/SalesProvider';
export default function SecondaryOrdermodal(props) {
  let { currentTheme, isOpenSecondaryModal,setIsOpenSecondaryModal} = useSalesState();

  const navigate = useNavigate();
  const handleCloseModalSecondaryModal = () => {
    setIsOpenSecondaryModal(false);
    navigate('/dashboard/AddProducts');
  };

  return (
    <div>
      <ReusableModal
        showCloseButton={false}
        isOpen={isOpenSecondaryModal}
        backgroundColor={currentTheme.bodyColor}
        height="auto"
        //   height="320px"
        width="330px"
        borderRadius="10px"
        ModalContent={
          <div style={{ display: 'flex', flexDirection: 'column', padding: 15, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontFamily: 'SemiBold', color: currentTheme.textColor, marginLeft: 10 }}> WareHouse</div>
              <DropDownWarehouse />
            </div>
            <div>
              <div style={{ marginLeft: 10, fontSize: 13, fontFamily: 'SemiBold', color: currentTheme.textColor }}>Ship To</div>
              <DropDown width="300px" itemHeight={25} />
            </div>
            <Button
              size="normal"
              sx={{ borderRadius: 2, backgroundColor: '#0174bf', width: '100%' }}
              variant="contained"
              onClick={handleCloseModalSecondaryModal}
            >
              Next
            </Button>
          </div>
        }
      />
    </div>
  );
}
function DropDownWarehouse() {
  const { getSalesWareHouseData} = useSalesState();
  const [salesAllSecondaryData, setSalesAllSecondaryData] = useState([]);
  const [selectedName, setSelectedName] = useState('');
 
  useEffect(() => {
    if (getSalesWareHouseData?.isSuccess) {
      let d = getSalesWareHouseData?.data?.data?.map((item) => ({
        id: item?.WarehousesId,
        label: item?.Name
      }));
      setSalesAllSecondaryData(d);
    }
  }, [getSalesWareHouseData]);

  return (
    <DropDown
      options={salesAllSecondaryData}
      onValueChange={(selectedItem) => setSelectedName(selectedItem?.label)}
      selectedValue={selectedName}
      placeholder={'Warehouse'}
      backgroundColor="#f8f8f8"
      color="#000"
      width={'300px'}
    />
  );
}
