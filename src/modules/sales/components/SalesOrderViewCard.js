import React from 'react'
import { Typography, Button, Grid } from '@mui/material';
import ReusableCard from 'components/cards/ResuableCard';
import { useSalesOrderViewState } from 'context/SalesOrderViewProvider';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import '../style/SalesorderView.css'
export default function SalesOrderViewCard() {
    let { currentTheme} = useSalesOrderViewState();
  return (
    
    <Grid container spacing={2} style={{ flexDirection: 'column' }}>
      <Grid item>
        <ReusableCard
          backgroundColor={currentTheme.bodyColor}
          content={
            <div>
              {Data2.map((card) => (
                <Card2 key={card.id} title={card.title} content={card.content} currentTheme={currentTheme} />
              ))}
              <div style={{ border: '1px solid #ddd' }}></div>
              <div
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'GilroyBold',
                  fontWeight: '400',
                  color: currentTheme.textColor,
                  fontSize: 16,
                  marginTop: 5
                }}
              >
                <div>Total Amount</div>
                <div>39,027</div>
              </div>
            </div>
          }
          height="140px"
        />
      </Grid>
      <Grid item>
        <ReusableCard
          backgroundColor={currentTheme.bodyColor}
          content={
            <div>
              {cardData4.map((card, index) => (
                <React.Fragment key={card?.id}>
                  <Card4 key={card.id} title={card.title} content={card.content} color={card.color} currentTheme={currentTheme} />
                  {index !== cardData4?.length - 1 && (
                    <>
                      <Grid style={{ marginBottom: '4%' }} />
                      <Grid style={{ border: '.1px solid #ddd', marginBottom: 10 }} />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          }
          height="225px"
        />
      </Grid>
    </Grid>
  )
}

const Data2 = [
    { id: 1, title: 'Order ID', content: 'ZW-INV23-003' },
    { id: 2, title: 'Total Item', content: '145' },
    { id: 3, title: 'Item Total', content: '39,027' }
  ];
  
  const Card2 = ({ title, content, currentTheme }) => {
    return (
      <div className="orderViewCardContainer">
        <text className="orderViewCardTitle" style={{color: currentTheme.textColor }}>{title}</text>
        <text style={{ color: currentTheme.textColor }}>{content}</text>
      </div>
    );
  };
  
  const cardData4 = [
    {
      id: 1,
      title: 'Warehouse',
      content: 'Ahemdabad | ZW-DIST-001 101,Vikasgruh road Paldi, Ahemdabad 380007,Gujarat',
      color: '#4CB748'
    },
    {
      id: 2,
      title: 'Shipping to address',
      content: 'Mediserv Pvt Ltd | ZW-WARE-01 Zydus Corporate Park,Nr.Nirma University\n,SG Hwy,Chharodi,382481',
      color: '#0174BF'
    }
  ];
  
  const Card4 = ({ title, content, color, currentTheme }) => {
    return (
      <div>
        <div className="card4Container">
          <div className="card4Icon" style={{ color}}>
            <LocalShippingIcon />
          </div>
          <text className="card4Text" style={{color: currentTheme.textColor }}>{title}</text>
        </div>
        <div className="card4Content" style={{color: currentTheme.textColor }}>
          <text style={{ marginBottom: '3px' }}>{content}</text>
        </div>
      </div>
    );
  };
  