import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const AutoCompleteDropdown = (props) => {
  const { options , value, label, width, height, borderRadius, onChange } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center',height:50 }}>
      <Autocomplete
        size="small"
        value={value}
        popupIcon={<KeyboardArrowDownIcon sx={{ color: '#32385C' }} />}
        onChange={onChange}
        options={options}
        getOptionLabel={(option) => option.label || ''}
        style={{ width: width || 220 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label || 'Dropdown'}
            fullWidth
            sx={{
              '& .css-1q60rmi-MuiAutocomplete-endAdornment': {
                marginTop: -0.5
              },
              '& .css-1hfulzr-MuiFormLabel-root-MuiInputLabel-root': {
                fontSize: 12.5,
                fontFamily: 'Regular',
                fontWeight: 600,
                color: '#32385C',
                marginTop:0.4
                
              },
              '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.Mui-focused.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot':
                {
                  border: 'none',
                  
                },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none !important'
              }
            }}
            InputProps={{
              ...params.InputProps,
              focused: false,
              style: {
                height: height || '33px',
                borderRadius: borderRadius || '10px',
                backgroundColor: '#f8f8f8',
                color: '#32385C',
                marginTop:0
                // border: 'none',
              }
            }}
          />
        )}
      />
    </div>
  );
};

export default AutoCompleteDropdown;