import ReusableCard from 'components/cards/ResuableCard';
import React from 'react';
import { Grid } from '../../../../node_modules/@mui/material/index';
import { Button } from '@mui/material';

const Content = (props) => {
  const data = [{ OrderId: 'ZW202308825 -001 ', totalItem: '67', itemTotal: '2140', Offer: '-0', sfDiscount: '-0' }];

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
      id: 'Offer',
      label: 'Offer'
    },
    {
      id: 'sfDiscount',
      label: 'sf Discount'
    }
  ];

  return (
    <>
      <Grid className="contentMainContainer_ReturnRequest_OrderViewCss">
        <Grid className="contentSubContainer_ReturnRequest_OrderViewCss">
          <Grid className="labelCss_ReturnRequest_OrderViewCss">
            {title?.map((item, index) => (
              <Grid key={index} item xs={12} style={{ fontFamily: 'Medium', fontSize: 14 }}>
                {item.label}
                <Grid style={{ marginTop: '4%' }} />
              </Grid>
            ))}
          </Grid>
          <Grid className="titleCss_ReturnRequest_OrderViewCss">
            {data?.map((item, dataIndex) => (
              <Grid key={dataIndex}>
                {title?.map((titleItem, titleIndex) => (
                  <Grid key={titleIndex} item xs={12} style={{ fontFamily: 'Medium', marginTop: '4%' }}>
                    {item[titleItem.id]}
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid className="OrderViewtextCss_ReturnRequest_OrderViewCss">
          <Button size="small" 
          className="buttonCss_ReturnRequest_OrderViewCss" 
          variant="contained" 
          onClick={props.handleViewOrderDetail}
          >
            View Order Detail
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const PurchaseReturnRequestOrderViewDetailCard = (props) => {
  return (
    <div>
      <ReusableCard 
      width={'100%'}
       height={'auto'} 
       content={
       <Content
        handleViewOrderDetail={props.handleViewOrderDetail} 
        />} />
    </div>
  );
};

export default PurchaseReturnRequestOrderViewDetailCard;
