import React, { useState } from 'react';
import ReusableModal from '../routemodal/ResuableModal';
import warehouse from '../../../assets/images/users/warehouse.png';
import { showDanger } from 'components/nudges/Alert';
import { useNavigate } from 'react-router-dom';
import CustomButton from 'components/buttons/CustomButton';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function RenderItem({ data, selectedValue, setSelectedValue, setSelectedData }) {
  const handleSelectWarehouse = (e, option) => {
    console.log('option========================',option);
    setSelectedValue(option?.WarehousesId);
    setSelectedData(option);
  };



  return (
    <>
      {data?.map((option, index) => {
        return (
          <div key={option.Id} style={{ display: 'flex', flexDirection: 'column', width: '96%', marginLeft: 6, overflow: 'hidden' }}>
            <hr />
            <div
              style={{
                fontFamily: 'Regular',
                fontSize: 12,
                fontWeight: '800',
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginLeft: '4%'
              }}
            >
              <input
                type="radio"
                name="option"
                value={option.WarehousesId}
                checked={selectedValue == option?.WarehousesId}
                onChange={(e) => {
                  handleSelectWarehouse(e, option);
                }}
                style={{ marginRight: '5px', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div
                  style={{
                    marginLeft: '32px',
                    fontFamily: 'Regular',
                    fontSize: 10,
                    fontWeight: '600'
                  }}
                >
                  {option?.Name}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function ModalContent({ data, selectedValue, setSelectedValue, onPress }) {
  const [selectedData, setSelectedData] = useState({});
  const { selectedWarehouseObj } = useSelector((state) => state.persistedReducer.placeOrder);


  useEffect(() => {
    setSelectedValue(selectedWarehouseObj.WarehousesId)
  }, [])
  

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '95%',
          padding: '5px',
          marginTop: 5
        }}
      >
        <img src={warehouse} alt="warehouse" style={{ width: '100%', maxWidth: '210px', maxHeight: '150px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px', marginTop: 15 }}>
          <span style={{ fontSize: 14, color: '#000', fontFamily: 'Regular', fontWeight: '700' }}>You are mapped to</span>
          <span style={{ fontFamily: 'Regular', fontSize: 15, color: '#68C264', fontWeight: '700' }}>Zydus Wellness Gujarat</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '300px', marginTop: 5 }}>
        <span style={{ fontFamily: 'GilroyBold', fontSize: 16, marginLeft: '4%' }}>Ship from</span>
        <span style={{ fontFamily: 'Regular', fontSize: 13, fontWeight: '600', marginLeft: '4%' }}>
          Choose where you want to ship the order
        </span>
      </div>
      <div style={{ maxHeight: '145px', width: '300px', marginTop: 15 }}>
        <RenderItem data={data} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setSelectedData={setSelectedData} />
      </div>
      <div style={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25, marginBottom: '1%' }}>
        <CustomButton
          label="Verify & Place Order"
          onClick={() => onPress(selectedData)}
          width={'100%'}
          //  style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}

export default function WarehouseShippingModal({ isOpen, setIsOpen, data, selectedValue, setSelectedValue, onPress }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <ReusableModal
        showCloseButton={true}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => setIsOpen(!isOpen)}
        height="100%"
        width="100%"
        borderRadius="10px"
        ModalContent={
          <ModalContent
            data={data}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            onPress={onPress}
          />
        }
      />
    </div>
  );
}

WarehouseShippingModal.defaultProps = {
  isOpen: false,
  setIsOpen: null,
  data: [],
  setSelectedValue: null,
  selectedValue: null,
  onPress: () => {
    alert('Please pass function');
  }
};