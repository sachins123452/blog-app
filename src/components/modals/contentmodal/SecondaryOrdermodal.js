import React, { useState, useEffect } from 'react';
import ReusableModal from '../routemodal/ResuableModal';
import { useTheme } from 'components/Theme/ThemeProvider';
import DropDown from 'components/dropdown/DropDown';
import { Button } from '@mui/material';
import '../../../assets/fonts/Fonts.css';
import { useNavigate } from 'react-router-dom';
import { useSalesState } from 'context/SalesProvider';
export default function SecondaryOrdermodal(props) {
  const { currentTheme } = useTheme();
  const navigate = useNavigate();
  const handleCloseModalSecondaryModal = () => {
    props.setIsOpen(false);
    navigate('/dashboard/AddProducts');
  };

  return (
    <div>
      <ReusableModal
        showCloseButton={false}
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        backgroundColor={currentTheme.bodyColor}
        height="auto"
        //   height="320px"
        width="330px"
        borderRadius="10px"
        ModalContent={
          <div style={{ display: 'flex', flexDirection: 'column', padding: 15,alignItems:'center' }}>
            <div>
              <div style={{fontSize: 13, fontFamily: 'SemiBold', color: currentTheme.textColor,marginLeft:10 }}> WareHouse</div>
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
  const { getwareHouseData, setSelectedWarehouseId } = useSalesState();
  const [data, setData] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const handleValueChange = (selectedItem) => {
    setSelectedName(selectedItem?.label);
  };
  useEffect(() => {
    if (getwareHouseData?.isSuccess) {
      let d = getwareHouseData?.data?.data?.map((item) => ({
        id: item?.WarehousesId,
        label: item?.Name
      }));
      setData(d);
    }
  }, [getwareHouseData]);

  return (
    <DropDown
      options={data}
      onValueChange={handleValueChange}
      selectedValue={selectedName}
      setSelectedValue={setSelectedWarehouseId}
      backgroundColor="#f8f8f8"
      color="#000"
      width={'300px'}
    />
  );
}
