import React, { useState } from 'react';
import ReusableModal from '../../../../src/components/modals/routemodal/ResuableModal';
import '../../../assets/fonts/Fonts.css';
import ReusableCard from 'components/cards/ResuableCard';
import CustomStepper from 'components/Stepper/Stepper';
import pendingInvoiceStyles from '../../../../src/components/modals/modalcss/Pendinginvoice_style.js';
import CustomButton from 'components/buttons/CustomButton';
const cardData1 = [
  {
    id: 1,
    images: require('../../../assets/images/users/grocery.png'),
    title: 'Sugar Free Gold Low Calorie Sweetner',
    amt: '₹137',
    totalamt: '₹1370',
    qty: 10,
    weight: '10kg'
  },
  {
    id: 2,
    images: require('../../../assets/images/users/grocery.png'),
    title: 'Sugar Free Gold Low Calorie Sweetner',
    amt: '₹137',
    totalamt: '₹1370',
    qty: 10,
    weight: '10kg'
  },
  {
    id: 3,
    images: require('../../../assets/images/users/grocery.png'),
    title: 'Sugar Free Gold Low Calorie Sweetner',
    amt: '₹137',
    totalamt: '₹1370',
    qty: 10,
    weight: '10kg'
  },
  {
    id: 4,
    images: require('../../../assets/images/users/grocery.png'),
    title: 'Sugar Free Gold Low Calorie Sweetner',
    amt: '₹137',
    totalamt: '₹1370',
    qty: 10,
    weight: '10kg'
  }
];
const cardData2 = [
  { id: 1, title: 'Order ID', content: 'ZW-INV23-003' },
  { id: 2, title: 'Total Item', content: '145' },
  { id: 3, title: 'Item Total', content: '39,027' },
  { id: 4, title: 'Credit Balance', content: '-0' },
  { id: 5, title: 'Offer & Promotion', content: '-0' },
  { id: 6, title: 'SE Discount', content: '-0' }
];
const cardData3 = [
  { id: 1, title: 'Invoice ID', content: 'ZW-INV23-001' },
  { id: 2, title: 'Raised Date', content: '23 Aug 2023' }
];

const ViewReturnRequestModal = (props) => {
  const handleDownloadInvoiceCopy = () => {
    alert('Please apply download invoice copy.');
    props.handleCloseModal();
  };
  const [selectedItem, setSelectedItem] = useState(null);

  const Card1 = ({ item, onSelect, isSelected }) => {
    const handleClick = () => {
      if (onSelect && typeof onSelect === 'function') {
        onSelect(item.id);
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleClick();
      }
    };

    return (
      <div style={{ width: '500px' }}>
        <div
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyPress}
          style={{
            ...pendingInvoiceStyles.card1,
            width: '100%',
            ...(isSelected ? pendingInvoiceStyles.selectedCard : {})
          }}
        >
          <div style={{}}>
            <img src={item.images} alt="img" style={{ width: 30, margin: '0px 3px 0px 3px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%' }}>
            <span>{item.title}</span>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}>
              <div style={pendingInvoiceStyles.card4Icon}>Box</div>
              <div style={{ marginTop: 1, marginLeft: '5%' }}>
                <span>{item.weight}</span>
              </div>
            </div>
          </div>
          <div style={{ marginRight: '10px', marginLeft: '5%' }}>
            <span>{item.amt}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span
              style={{
                ...pendingInvoiceStyles.card4Icon,
                ...{
                  backgroundColor: '#E5F1F8',
                  color: '#3691CC',
                  width: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  marginLeft: '5%'
                }
              }}
            >
              {item.qty}
            </span>
            <span
              style={{
                marginLeft: '5%'
              }}
            >
              {item.totalamt}
            </span>
          </div>
        </div>
        <div style={pendingInvoiceStyles.cardBorder}></div>
      </div>
    );
  };

  const Card2 = ({ title, content }) => {
    return (
      <div style={pendingInvoiceStyles.card2}>
        <text>{title}</text>
        <text>{content}</text>
      </div>
    );
  };

  const Card3 = ({ title, content }) => {
    return (
      <div style={pendingInvoiceStyles.card3}>
        <text>{title}</text>
        <text>{content}</text>
      </div>
    );
  };

  return (
    <div>
      <ReusableModal
        onClose={props.handleCloseModal}
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        height="auto"
        width="100%"
        top={'-12%'}
        ModalContent={
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '7px' }}>
              <CustomStepper CompletedSteps={2} />
            </div>
            <div style={{ padding: 8, display: 'flex', flexDirection: 'row' }}>
              <ReusableCard
                content={
                  <div style={{ width: '100%' }}>
                    {cardData1.map((item) => (
                      <Card1 key={item.id} item={item} isSelected={selectedItem === item.id} onSelect={() => setSelectedItem(item.id)} />
                    ))}
                  </div>
                }
                height="340px"
              />
              <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column', width: '40%' }}>
                <ReusableCard
                  content={
                    <div>
                      {cardData2.map((card) => (
                        <Card2 key={card.id} title={card.title} content={card.content} />
                      ))}
                      <div style={pendingInvoiceStyles.cardBorder}></div>
                      <div
                        style={{
                          ...pendingInvoiceStyles.card2,
                          ...{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            fontFamily: 'GilroyBold',
                            fontWeight: '400',
                            color: '#1B2149',
                            fontSize: 16,
                            marginTop: 5
                          }
                        }}
                      >
                        <div>Total Amount</div>
                        <div>39,027</div>
                      </div>
                    </div>
                  }
                  width="300px"
                />
                <div style={{ marginTop: 10 }}>
                  <ReusableCard
                    content={
                      <div>
                        {cardData3.map((card) => (
                          <>
                            <Card3 key={card.id} title={card.title} content={card.content} />
                          </>
                        ))}

                        <CustomButton
                          backgroundColor={'#4cb748'}
                          label="Download Invoice Copy"
                          color="#ffffff"
                          onClick={handleDownloadInvoiceCopy}
                        />
                      </div>
                    }
                    height="auto"
                    width="300px"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

const PurchaseReturnRequestOrderViewDownloadInvoice = (props) => {
  return (
    <div>
      <ViewReturnRequestModal isOpen={props.isOpen} handleCloseModal={props.handleCloseModal} setIsOpen={props.setIsOpen} />
    </div>
  );
};

export default PurchaseReturnRequestOrderViewDownloadInvoice;
