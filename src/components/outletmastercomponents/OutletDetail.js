import React from 'react';
import styles from './OutletDetailCss';
import complanimage from '../../assets/images/products/complan.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTheme, useMediaQuery } from '../../../node_modules/@mui/material/index';

const OutletDetail = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'));
  // const isLaptop = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'));

  const data = [
    {
      'Outlet Type': 'Pharmacy',
      'Legal Name': 'Medical Service Pvt Ltd',
      'Payment Terms': 'Due To Receipt',
      'GST Number': 'ZW12345',
      'Pan Number': 'ZW12345',
      Status: 'Active',
      Outlets: '2',
      'Outlet Name': 'Mediserv Pvt Ltd',
      Person1: 'Ashok Kumar',
      Person2: 'Manoj Shukla',
      Mobile1: '6202115968',
      Mobile2: '7990535318',
      Address1: 'A 12,Yogeshwar Complex, Satellite Road, Ahemdabad 380015, Gujarat',
      Address2: 'B503,Shyam Cross road, Bopal, Ahemdabad 380014, Gujarat'
    }
  ];

  return (
    <div style={{ ...styles.card, width: isMobile ? '100%' : isTablet ? '100%' : '100%' }}>
      <div style={styles.cardimgtxt}>
        {/* Image of Component */}
        <div>
          <img alt="" src={complanimage} style={{ ...styles.imagesize }} />
        </div>

        <div style={styles.imgtxtcontainer}>
          <text style={styles.imgsidetxt}>Mediserv Pvt Ltd</text>
          <text style={styles.imgsidetxt2}>ZW-CST-001</text>
        </div>
      </div>
      {/* first Row  */}
      {data.map((item, index) => {
        return (
          <div key={index} style={styles.data1container}>
            <div style={styles.columnstyle}>
              <text style={{ ...styles.datakeytxt, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>Outlet Type</text>
              <text style={{ ...styles.datavaluetxt, fontSize: isMobile ? '8px' : isTablet ? '10px' : '12px' }}>{item['Outlet Type']}</text>
            </div>
            <div style={styles.columnstyle}>
              <text style={{ ...styles.datakeytxt, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>Legal Name</text>
              <text style={{ ...styles.datavaluetxt, fontSize: isMobile ? '8px' : isTablet ? '10px' : '12px' }}>{item['Legal Name']}</text>
            </div>
            <div style={styles.columnstyle}>
              <text style={{ ...styles.datakeytxt, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>Payment Terms</text>
              <text style={{ ...styles.datavaluetxt, fontSize: isMobile ? '8px' : isTablet ? '10px' : '12px' }}>
                {item['Payment Terms']}
              </text>
            </div>
          </div>
        );
      })}

      {/* Divider */}

      <div style={styles.horizontalbreak}></div>

      {/* Second Row */}

      {data.map((item, index) => {
        return (
          <>
            <div key={index} style={styles.data1container}>
              <div style={styles.columnstyle}>
                <text style={{ ...styles.datakeytxt, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>GST Number</text>
                <text style={{ ...styles.datavaluetxt, fontSize: isMobile ? '8px' : isTablet ? '10px' : '12px' }}>
                  {item['GST Number']}
                </text>
              </div>
              <div style={styles.columnstyle}>
                <text style={{ ...styles.datakeytxt, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>Pan Number</text>
                <text style={{ ...styles.datavaluetxt, fontSize: isMobile ? '8px' : isTablet ? '10px' : '12px' }}>
                  {item['Pan Number']}
                </text>
              </div>
              <div style={styles.columnstyle}>
                <text style={{ ...styles.datakeytxt, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>Status</text>
                <text style={{ ...styles.datavaluetxt, fontSize: isMobile ? '8px' : isTablet ? '10px' : '12px' }}>{item.Status}</text>
              </div>
            </div>
            <text style={styles.activeoutletnum}>{`Active Warehouse/Outlets - ${item.Outlets}`}</text>
          </>
        );
      })}

      {/* Number of Outlet description */}

      <div style={styles.totaloutletcont}>
        {data.map((item, index) => {
          return (
            <div key={index} style={{ ...styles.outletdetailborder, width: isMobile ? '100%' : isTablet ? '100%' : '48%' }}>
              <text style={styles.outletname}>{item['Outlet Name']}</text>
              <div style={{ ...styles.nameandnum, flexDirection: isMobile ? 'column' : isTablet ? 'column' : 'row' }}>
                <div style={styles.namecont}>
                  <div style={{ ...styles.iconstyle, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>
                    <AccountCircleOutlinedIcon />
                  </div>
                  <text style={{ ...styles.personname, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>{item.Person1}</text>
                </div>
                <div style={styles.namecont}>
                  <div style={{ ...styles.iconstyle, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>
                    <PhoneAndroidIcon />
                  </div>
                  <text style={{ ...styles.personname, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>{item.Mobile1}</text>
                </div>
              </div>
              <div style={styles.addresscontainer}>
                <div style={{ ...styles.iconstyle, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>
                  <LocationOnIcon />
                </div>
                <text style={{ ...styles.personname, fontSize: isMobile ? '12px' : isTablet ? '14px' : '14px' }}>{item.Address1}</text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutletDetail;
