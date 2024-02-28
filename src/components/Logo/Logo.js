import React from 'react';
import { useTheme } from 'components/Theme/ThemeProvider';
import { SERVER_URL } from 'helper/utils';
const Logo = () => {
  const {currentTheme}=useTheme()
  const serverURL = SERVER_URL();
  return (
    <div style={{ width: '100%'}}>
      
        <img
          src={`${serverURL}media?id=${currentTheme.LogoUrl}`}
          alt="Zydus_Wellness"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '90px',
            marginTop:"10px"
           // Center the image
          }}
        />
      
    </div>
  );
};

export default Logo;
