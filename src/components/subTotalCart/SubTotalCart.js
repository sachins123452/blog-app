import { Grid } from '../../../node_modules/@mui/material/index';
import { useTheme } from 'components/Theme/ThemeProvider';

const SubTotalCart = ({ data, title, borderRadius, totalAmount }) => {
  const { currentTheme } = useTheme();

  return (
    <>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        style={{ backgroundColor: currentTheme.cardColor, borderRadius: borderRadius, border: '1px solid #ddd', padding: '10px' }}
      >
        <Grid style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: '2%' }}>
          <Grid style={{ display: 'flex', flexDirection: 'column' }}>
            {title?.map((item, index) => (
              <Grid key={index} item xs={12} style={{ fontFamily: 'Medium', fontSize: 14, color: currentTheme.textColor }}>
                {item.label}
                <Grid style={{ marginTop: '4%' }} />
              </Grid>
            ))}
          </Grid>
          <Grid style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
            {data?.map((item, dataIndex) => (
              <Grid key={dataIndex}>
                {title?.map((titleItem, titleIndex) => (
                  <Grid key={titleIndex} item xs={12} style={{ fontFamily: 'Medium', marginTop: '4%', color: currentTheme.textColor }}>
                    {item[titleItem.id]}
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid style={{ height: '1px', backgroundColor: '#DDDD' }} />
        <Grid style={{ marginTop: '3%' }} />
        <Grid style={{ display: 'flex', justifyContent: 'space-between', padding: '2%', flexDirection: 'row' }}>
          <Grid style={{ fontFamily: 'GilroyBold', color: currentTheme.textColor }}>Total Amount</Grid>
          <Grid style={{ fontFamily: 'GilroyBold', color: currentTheme.textColor }}>{totalAmount}</Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SubTotalCart;

SubTotalCart.defaultProps = {
  data: [{ OrderId: 'ZW202308825 -001 ', totalItem: '67', itemTotal: '2140', Offer: '-0', sfDiscount: '-0' }],

  title: [
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
  ],
  borderRadius: '15px',
  totalAmount: '$12780'
};
