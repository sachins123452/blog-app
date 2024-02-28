import SubTotalCart from 'components/subTotalCart/SubTotalCart';
import React from 'react';

const PurchaseReturnRequestOrderViewTotalAmountCard = () => {
  return (
    <div>
      <SubTotalCart title={title} data={data} />
    </div>
  );
};

export default PurchaseReturnRequestOrderViewTotalAmountCard;

const title = [
  {
    id: 'OrderId',
    label: 'Order Id'
  },
  {
    id: 'totalItem',
    label: 'Total Item'
  },
  {
    id: 'itemTotal',
    label: 'Item Total'
  },
  {
    id: 'Credit Balance',
    label: 'Credit Balance'
  },
  {
    id: 'Offer',
    label: 'Offer & Promotion'
  },
  {
    id: 'SE Discount',
    label: 'SE Discount'
  }
];
const data = [
  { OrderId: 'ZW202308825 -001 ', totalItem: '67', itemTotal: '2140', 'Credit Balance': '-0', Offer: '10', 'SE Discount': '-0' }
];
