import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './DropDown.css';
import '../../assets/fonts/Fonts.css';

const DropDown = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  const dropdownAnimation = useSpring({
    height: isDropdownOpen ? data.length * (props.itemHeight + 5) : 0,
    opacity: isDropdownOpen ? 1 : 0,
    config: { duration: 300 }
  });

  useEffect(() => {
    if (props.selectedValue === null) {
      setIsDropdownOpen(false);
    }
  }, [props.selectedValue]);

  useEffect(() => {
    if (props.options) {
      props?.setSelectedValue('');
      setData(props.options);
    }
  }, [props.options]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onItemPress = (item) => {
    setValue(item.label)
    props?.setSelectedValue(item.id);
    setIsDropdownOpen(false);
    props.onValueChange(item);
  };

  const renderPlaceholder = () => {
    return (
      <div className="placeholderr" style={{ color: props.color }}>
        <span>{value || props.placeholder}</span>
      </div>
    );
  };

  return (
    <div className={`dropdown-containerr ${isDropdownOpen ? 'open' : ''}`} style={{ width: props.width, height: props.height }}>
      <div
        style={{ backgroundColor: props.backgroundColor }}
        role="button"
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleDropdown();
          }
        }}
        className="dropdown-btnn"
      >
        <span className="selected-valuee">{renderPlaceholder()}</span>
        <span className="arrow-iconn" style={{ color: props.color }}>
          {isDropdownOpen ? <KeyboardArrowUpIcon onClick={toggleDropdown} /> : <KeyboardArrowDownIcon />}
        </span>
      </div>
      <animated.div
        className="dropdown-contentt"
        style={{
          height: dropdownAnimation.height,
          opacity: dropdownAnimation.opacity,
          backgroundColor: props.backgroundColor,
          color: props.color
        }}
      >
        {data?.map((item, index) => (
          <div
            key={index}
            role="menuitem"
            tabIndex={0}
            onClick={() => onItemPress(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onItemPress(item);
              }
            }}
            className="dropdown-itemm spaced-text"

            // style={{display:'flex',justifyContent:'space-between',backgroundColor:'red'}}
          >
            <span className="label">{item.label}</span>
            <span className="icon">{index === 0 ? <KeyboardArrowDownIcon /> : null}</span>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default DropDown;

DropDown.defaultProps = {
  onValueChange: () => {},
  options: [
    { label: 'sachin', id: 1 },
    { label: 'hemu', id: 2 },
    { label: 'raju', id: 3 },
    { label: 'lalwani', id: 4 }
  ],
  radius: 10,
  left: null,
  right: null,
  itemHeight: 30,
  placeholder: 'Select an option',
  width: '200px',
  height: 'auto',
  backgroundColor: '#f8f8f8',
  color: '#32385C',
  setSelectedValue: () => {}
};
