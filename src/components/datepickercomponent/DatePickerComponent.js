import React from 'react';
// import 'react-calendar/dist/Calendar.css';n
import { useTheme, useMediaQuery } from '../../../node_modules/@mui/material/index';
// import { isTablet } from 'react-device-detect';
import style from './DatePickerComponentCss';

function DatePickerComponent(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'));
  const isLaptop = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'));

  return (
    <div
      style={{
        ...style.main_container_datepicker,
        width: isMobile ? '88%' : isTablet ? '37.5%' : isLaptop ? '28%' : '25.5%',
        height: props.height
      }}
    >
      <div style={{ ...style.from_container, height: props.contentheight }}>
        <text style={style.fromtext}>From</text>
        <div style={style.frominputcontainer}>
          <input type="date" value={props.value} onChange={props.onChange} style={style.frominput} />
        </div>
      </div>

      <div style={{ ...style.tocontainer, height: props.contentheight2 }}>
        <text style={style.totext}>To</text>
        <div style={style.toinputcontainer}>
          <input type="date" value={props.value2} onChange={props.onChange2} style={style.toinput} />
        </div>
      </div>
    </div>
  );
}

export default DatePickerComponent;

DatePickerComponent.defaultProps = {
  width: '28%',
  contentwidth: '50%',
  contentWidth2: '50%',
  height: 35
};
