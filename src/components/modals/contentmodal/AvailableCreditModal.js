import React, { useState } from 'react';
import ReusableModal from '../routemodal/ResuableModal';
import Button from '@mui/material/Button';
import { useTheme } from 'components/Theme/ThemeProvider';

const AvailableCreditModal = (props) => {
  const [selectedCredit, setSelectedCredit] = useState(null);
  const { currentTheme } = useTheme();

  const creditData = [
    { credit_amount: '₹500', expire_on: '31 Dec 2023', order_id: 'ZW20230825-003' },
    { credit_amount: '₹100', expire_on: '15 Jan 2024', order_id: 'ZW20230825-005' },
    { credit_amount: '₹450', expire_on: '30 Jan 2024', order_id: 'ZW20230825-011' }
  ];

  const handleRadioChange = (index) => {
    setSelectedCredit(creditData[index]);
  };

  return (
    <div>
      <ReusableModal
        backgroundColor={currentTheme.cardColor}
        boxShadow={currentTheme.cardColor}
        onClose={props.handleCloseAvailableCreditModal}
        top={'-15%'}
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        height="auto"
        width="auto"
        borderRadius="10px"
        ModalContent={
          <div style={{ padding: '1.5%', width: '500px' }}>
            <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
              <text style={{ color: 'Medium', fontSize: 16, fontWeight: '600', color: currentTheme.textColor }}>
                Available Credit Notes
              </text>
              <text style={{ color: 'Medium', fontSize: 14, color: currentTheme.textColor }}>
                Select to use credit note against invoice amount
              </text>
            </div>

            <div style={{ border: '0.5px solid #e0e0e0', borderRadius: '10px', padding: '2%', marginTop: '2.5%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <text style={{ color: currentTheme.textColor }}>Total Amount</text>
                <text style={{ color: currentTheme.textColor }}>&#8377;39,527</text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <text style={{ color: currentTheme.textColor }}>Credit Balance</text>
                <text style={{ color: '#4cb748', color: currentTheme.textColor }}>- &#8377;500</text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <text style={{ color: currentTheme.textColor }}>Revised Total Amount</text>
                <text style={{ color: currentTheme.textColor }}>&#8377;39,027</text>
              </div>
            </div>

            <div
              style={{
                border: '1px solid #e0e0e0',
                marginTop: '3%',
                paddingTop: '2%',
                paddingBottom: '2%',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  justifyContent: 'space-evenly',
                  display: 'flex',
                  borderBottom: '2px solid #e0e0e0',
                  width: '100%',
                  paddingTop: '1%',
                  paddingBottom: '1%'
                }}
              >
                <text></text>
                <text style={{ width: '100px', textAlign: 'right', color: currentTheme.textColor }}>Credit Amount</text>
                <text style={{ width: '100px', textAlign: 'center', color: currentTheme.textColor }}>Expire on</text>
                <text style={{ width: '140px', textAlign: 'center', color: currentTheme.textColor }}>Order ID</text>
              </div>

              {creditData.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      justifyContent: 'space-evenly',
                      display: 'flex',
                      borderBottom: '2px solid #e0e0e0',
                      width: '100%',
                      paddingTop: '1%',
                      paddingBottom: '1%',
                      alignItems: 'end'
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        border: '1px solid #e0e0e0',
                        padding: '2%',
                        cursor: 'pointer',
                        backgroundColor: selectedCredit && selectedCredit.order_id === item.order_id ? '#4cb748' : 'transparent',
                        appearance: 'none' // Remove default styles
                      }}
                      checked={selectedCredit && selectedCredit.order_id === item.order_id}
                      onChange={() => handleRadioChange(index)}
                    />
                    <text style={{ textAlign: 'center', width: '100px', color: currentTheme.textColor }}>{item.credit_amount}</text>
                    <text style={{ textAlign: 'center', width: '100px', color: currentTheme.textColor }}>{item.expire_on}</text>
                    <text style={{ textAlign: 'center', width: '140px', color: currentTheme.textColor }}>{item.order_id}</text>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', padding: '2%' }}>
              <div>
                <Button variant="contained" color="success" onClick={props.handlePaymentButton}>
                  Select & Proceed for Payment
                </Button>
              </div>
              <div>
                <Button color="secondary" style={{ width: '100%' }} onClick={props.handleCancelButton}>
                  Skip
                </Button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default AvailableCreditModal;
