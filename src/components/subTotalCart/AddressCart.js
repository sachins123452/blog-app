import ReusableCard from 'components/cards/ResuableCard';
import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Grid } from '../../../node_modules/@mui/material/index';
import { useTheme } from 'components/Theme/ThemeProvider';

const Card4 = ({ title, content, color, higlight }) => {
  const { currentTheme } = useTheme();

  return (
    <>
      <div style={{ backgroundColor: currentTheme.cardColor }}>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            // height: '28px',
            fontFamily: 'Medium',
            fontWeight: '400',
            color: '#1B2149',
            fontSize: 14,
            marginTop: 5
          }}
        >
          <div style={{ color, fontSize: 14 }}>{<LocalShippingIcon />}</div>

          <text style={{ marginLeft: 10, color, fontSize: 15, fontFamily: 'GilroyBold' }}>{title}</text>
        </div>
        <Grid
          style={{
            fontFamily: 'GilroyBold',
            fontWeight: '600',
            color: '#1B2149',
            fontSize: 13,
            width: '85%',
            color: currentTheme.textColor
          }}
        >
          {higlight}
        </Grid>
        <Grid
          style={{ fontFamily: 'Regular', fontWeight: '600', color: '#1B2149', fontSize: 13, width: '85%', color: currentTheme.textColor }}
        >
          {content}
        </Grid>
      </div>
    </>
  );
};

export default function AddressCart() {
  const { currentTheme } = useTheme();

  return (
    <div style={{ marginTop: 10 }}>
      <ReusableCard
        backgroundColor={currentTheme.cardColor}
        boxShadow={currentTheme.cardColor}
        content={
          <>
            <div>
              {cardData4.map((card, index) => (
                <React.Fragment key={card?.id}>
                  <Card4 title={card?.title} content={card?.content} color={card?.color} higlight={card?.higlight} />
                  {index !== cardData4?.length - 1 && (
                    <>
                      <Grid style={{ marginBottom: '4%' }} />
                      <Grid style={{ border: '.1px solid #ddd', marginBottom: 10 }} />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </>
        }
        height={'70%'}
        width={'100%'}
      />
    </div>
  );
}

const cardData4 = [
  {
    id: 1,
    title: 'Shipping to address',
    higlight: 'Ahemdabad | ZW-DIST-001 101,',
    content: 'Vikasgruh road Paldi, Ahemdabad 380007,Gujarat',
    color: '#4CB748'
  },
  {
    id: 2,
    title: 'Seller address',
    higlight: 'Zydus Wellness Gujarat | ZW-WARE-01,',
    content: 'Zydus Corporate Park,Nr.Nirma University\n,SG Hwy,Chharodi,382481',
    color: '#0174BF'
  }
];
