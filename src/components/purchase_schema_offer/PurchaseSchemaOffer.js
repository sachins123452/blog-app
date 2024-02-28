import React from 'react';
import PurchaseSchemaOfferCss from './PurchaseSchemaOfferCss';
import { useTheme } from 'components/Theme/ThemeProvider';

function PurchaseSchemaOffer(props) {
  const { currentTheme } = useTheme();

  const data = [
    {
      label: 'Spend More , Save More',
      description: 'Save 10% on total invoice when you spend ₹15,000 or more',
      borderColor: '#18b797',
      backgroundColor: '#c5ede5'
    },
    {
      label: 'Invoice Bonus Rewards',
      description: 'Get ₹200 off on every ₹2,000 spent, earning valuable Rewards!',
      borderColor: '#2fc2e1',
      backgroundColor: '#cbf0f7'
    },
    {
      label: 'Tiered Savings Extravaganza',
      description: 'Access tiered discounts: spend ₹5,000 and enjoy a 5% reduction.',
      borderColor: '#d680e6',
      backgroundColor: '#f4cfff'
    }
  ];

  return (
    <div style={{ ...PurchaseSchemaOfferCss.maincontainer, width: props.containerwidth, backgroundColor: currentTheme.cardColor }}>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              ...PurchaseSchemaOfferCss.container,
              backgroundColor: item.backgroundColor,
              width: props.width,
              height: props.height,
              borderColor: item.borderColor
            }}
          >
            <div style={{ ...PurchaseSchemaOfferCss.labelstyling }}>{item.label}</div>
            <div style={{ ...PurchaseSchemaOfferCss.descriptionstyling }}>{item.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PurchaseSchemaOffer;

PurchaseSchemaOffer.defaultProps = {
  containerwidth: '70%',
  width: '90%',
  //   height: 100,
  data: [
    {
      label: 'Spend More , Save More',
      description: 'Save 10% on total invoice when you spend ₹15,000 or more',
      borderColor: '#18b797',
      backgroundColor: '#c5ede5'
    },
    {
      label: 'Invoice Bonus Rewards',
      description: 'Get ₹200 off on every ₹2,000 spent, earning valuable Rewards!',
      borderColor: '#2fc2e1',
      backgroundColor: '#cbf0f7'
    },
    {
      label: 'Tiered Savings Extravaganza',
      description: 'Access tiered discounts: spend ₹5,000 and enjoy a 5% reduction.',
      borderColor: '#d680e6',
      backgroundColor: '#f4cfff'
    }
  ]
};
