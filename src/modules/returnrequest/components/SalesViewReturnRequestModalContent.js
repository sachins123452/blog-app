import React from 'react';
import ReusableModal from 'components/modals/routemodal/ResuableModal';
import '../../../assets/fonts/Fonts.css';
import ReusableCard from 'components/cards/ResuableCard';
import CustomButton from 'components/buttons/CustomButton';
import GRNTabel from 'components/GRNTable/GRNTabel';
import { useSalesReturnRequestState } from 'context/SalesReturnRequestProvider';

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
  { id: 2, title: 'Raised Date', content: '23 Aug 2023' },
  { id: 3, title: 'Raised Date', content: '23 Aug 2023' },
  { id: 4, title: 'Raised Date', content: '23 Aug 2023' }
];

const handleViewClick = (id) => {
  alert(id);
};

const otherRows = [
  createData(
    '1',
    'ZWPR#001',
    'ZWPR#001',
    "Sugar Free D'lite Dark Chocolate Gift Pack",
    '21',
    '20',
    'Damaged Goods',
    <button
      style={{ backgroundColor: '#4cb748', borderRadius: 15, border: 'none', outline: 'none', color: '#ffffff', width: '60px', padding: 5 }}
      onClick={() => handleViewClick('ZWPR#001')}
    >
      View
    </button>
  ),
  createData(
    '2',
    'ZWPR#002',
    'ZWPR#002',
    'Sugar Free Green Natural Stevia Jar (200g)',
    '25',
    '20',
    'Correcting Errors',
    <button
      style={{ backgroundColor: '#4cb748', borderRadius: 15, border: 'none', outline: 'none', color: '#ffffff', width: '60px', padding: 5 }}
      onClick={() => handleViewClick('ZWPR#002')}
    >
      View
    </button>
  ),
  createData(
    '3',
    'ZWPR#003',
    'ZWPR#003',
    'Sugar Free Natura Low Calorie Sweetner',
    '28',
    '10',
    'Damaged Goods',
    <button
      style={{ backgroundColor: '#4cb748', borderRadius: 15, border: 'none', outline: 'none', color: '#ffffff', width: '60px', padding: 5 }}
      onClick={() => handleViewClick('ZWPR#003')}
    >
      View
    </button>
  )
  // add more rows as needed
];

const otherColumns = [
  { id: 'id', label: '#', align: 'center' },
  { id: 'SKU', label: 'SKU', align: 'center' },
  { id: 'Batchid', label: 'Batch ID', align: 'center' },
  { id: 'Product', label: 'Product', align: 'center' },
  { id: 'ShippedQty', label: 'Shipped Qty.', align: 'center' },
  { id: 'DiscardedQty', label: 'Discarded Qty.', align: 'center' },
  { id: 'DiscardedReason', label: 'Discarded Reason', align: 'center' },
  { id: 'Media', label: 'Media', align: 'center' }
  // add more columns as needed
];

function createData(id, SKU, Batchid, Product, ShippedQty, DiscardedQty, DiscardedReason, Media) {
  return { id, SKU, Batchid, Product, ShippedQty, DiscardedQty, DiscardedReason, Media };
}
const SalesViewReturnRequestModal = () => {
  const { isOpenModal,setIsOpenModal } = useSalesReturnRequestState();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const Card2 = ({ title, content }) => {
    return (
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          padding: '2px',
          justifyContent: 'space-between',
          fontFamily: 'SemiBold',
          fontWeight: '700',
          color: '#1B2149',
          fontSize: 12
        }}
      >
        <text>{title}</text>
        <text>{content}</text>
      </div>
    );
  };

  const Card3 = ({ title, content }) => {
    return (
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          padding: '3px',
          justifyContent: 'space-between',
          fontFamily: 'SemiBold',
          fontWeight: '700',
          color: '#1B2149',
          fontSize: 12
        }}
      >
        <text>{title}</text>
        <text>{content}</text>
      </div>
    );
  };

  return (
    <div style={{ width: '100%' }}>
      {/* <CustomButton onClick={handleOpenModal} /> */}
      <ReusableModal
        onClose={handleCloseModal}
        isOpen={isOpenModal}
        width="85%"
        height="80%"
        top="-12%"
        ModalContent={
          <>
            <div style={{ padding: '1%' }}>
              <text style={{ fontSize: 14, color: '#000', fontFamily: 'GilroyBlack', padding: '2%' }}>Return Request Items</text>
              <div
                style={{
                  // padding: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'start',
                  justifyContent: 'space-between'
                  // backgroundColor: 'yellow'
                }}
              >
                <ReusableCard
                  content={
                    <div
                      style={{
                        width: '100%' // you can change the width of the table from here .
                      }}
                    >
                      {/* <CardTable headings={headings} data={data} /> */}

                      <GRNTabel rows={otherRows} columns={otherColumns} />
                    </div>
                  }
                  width="100%"
                />
                <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
                  <ReusableCard
                    content={
                      <div
                        style={{ width: 250 }} // you can change the size of the card from this width
                      >
                        {cardData2.map((card) => (
                          <Card2 key={card.id} title={card.title} content={card.content} />
                        ))}
                        <div style={{ border: '1px solid #ddd' }}></div>
                        <div
                          style={{
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontFamily: 'GilroyBold',
                            fontWeight: '400',
                            color: '#1B2149',
                            fontSize: 16,
                            marginTop: 5
                          }}
                        >
                          <div>Total Amount</div>
                          <div>39,027</div>
                        </div>
                      </div>
                    }
                    // height="200px"
                  />
                  <div style={{ marginTop: 10 }}>
                    <ReusableCard
                      content={
                        <div>
                          {cardData3.map((card) => (
                            <Card3 key={card.id} title={card.title} content={card.content} />
                          ))}
                          <CustomButton
                            label={'Accept Return Request'}
                            backgroundColor={'#4cb748'}
                            color={'#ffffff'}
                            width={'100%'}
                            fontSize={14}
                            fontWeight={'600'}
                            borderRadius={5}
                            onClick={() => {
                              alert('Accept Return Request');
                            }}
                          />
                        </div>
                      }
                      height="75px"
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }}>
                <div style={{ width: '50%', marginLeft: 5 }}>
                  <CustomButton
                    label={'Accept Return Request'}
                    backgroundColor={'#4cb748'}
                    color={'#ffffff'}
                    width={'90%'}
                    height={'40px'}
                    fontSize={14}
                    fontWeight={'600'}
                    borderRadius={5}
                    onClick={() => {
                      alert('Accept Return Request');
                    }}
                  />
                </div>
                <div style={{ width: '50%', marginLeft: 5 }}>
                  <CustomButton
                    label={'Reject Return Request'}
                    backgroundColor={'#ff0000'}
                    color={'#ffffff'}
                    width={'90%'}
                    height={'40px'}
                    fontSize={14}
                    fontWeight={'600'}
                    borderRadius={5}
                    onClick={() => {
                      alert('Reject Return Request');
                    }}
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

export default SalesViewReturnRequestModal;
