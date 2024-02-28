import { TextField } from '@mui/material';
import { Grid } from '../../../node_modules/@mui/material/index';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CustomButton from 'components/buttons/CustomButton';
import ReusableCard from 'components/cards/ResuableCard';
import Successmodal from 'components/modals/contentmodal/Successmodal';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useState } from 'react';
import { useMediaQuery } from '../../../node_modules/@mui/material/index';
import './AddOutlet.css';

const AddOutlet = () => {
  const theme = useTheme();
  const { currentTheme } = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid className="top_container" style={{ color: currentTheme.textColor }}>
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        // onClick={() => navigate('/dashboard/GRNScreen')}
        className="head_container_cont"
      >
        <IconButton className="icon_btn">
          <ArrowBack sx={{ color: '#fff', fontSize: '1.5rem' }} />
        </IconButton>
        <Grid className="txtstyles">Outlet 360 Profile</Grid>
      </Grid>
      <ReusableCard
        backgroundColor={'#ffffff'}
        border="#f8f8f8"
        padding={'2%'}
        borderRadius={15}
        content={
          <>
            <Grid item xs={12} md={6} lg={4} className="secondary_head_cont">
              {/* Your content for the first column */}
              <div className="mainnn_cont_business">
                <div className="businessName_inputlabel">
                  <InputLabel className="inputs_styles_">Business name</InputLabel>
                  <TextField size="small" variant="standard" InputProps={{ disableUnderline: true }} className="txtinputs_styling" />
                </div>

                <div className="businessaddress_inputlabel">
                  <InputLabel className="inputs_styles_">Business address</InputLabel>
                  <TextField size="small" variant="standard" InputProps={{ disableUnderline: true }} className="txtinputs_styling" />
                </div>
              </div>
            </Grid>

            {/* ... Your existing code ... */}
            <Grid item xs={12} md={6} lg={4}>
              {/* Your content for the second column */}
              <div className="mainn_container_person ">
                <div className="contact_person_inputlabel">
                  <InputLabel className="inputs_styles_">Contact Person</InputLabel>
                  <TextField
                    size="small"
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    placeholder="First Name"
                    className="txtinputs_styling"
                  />
                </div>

                <div className="empty_inputlabel">
                  <InputLabel className="inputs_styles_"></InputLabel>
                  <TextField
                    size="small"
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    placeholder="Last Name"
                    className="txtinputs_styling_empty"
                  />
                </div>

                <div className="email_address_input">
                  <InputLabel className="inputs_styles_">Email Address</InputLabel>
                  <TextField size="small" variant="standard" InputProps={{ disableUnderline: true }} className="txtinputs_styling" />
                </div>
              </div>
            </Grid>

            {/* ... Your existing code ... */}
            <Grid item xs={12} md={6} lg={4}>
              {/* Your content for the third column */}

              <div className="mainn_container_phone">
                <div className="phone_number_input">
                  <InputLabel className="inputs_styles_">Phone Number</InputLabel>
                  <TextField size="small" variant="standard" InputProps={{ disableUnderline: true }} className="txtinputs_styling" />
                </div>

                <div className="gst_number_input">
                  <InputLabel className="inputs_styles_"> Business GST Number </InputLabel>
                  <TextField size="small" variant="standard" InputProps={{ disableUnderline: true }} className="txtinputs_styling" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ margin: '15px 5px 0px 5px' }}>
                  <CustomButton
                    backgroundColor={'#0174bf'}
                    color={'#ffffff'}
                    label={'Submit'}
                    width={85}
                    height={35}
                    fontSize={13}
                    borderRadius={12}
                    fontWeight={600}
                  />
                </div>
                <div style={{ margin: '15px 5px 0px 5px' }}>
                  <CustomButton
                    backgroundColor={'#ffffff'}
                    color={'#000000'}
                    label={'Cancel'}
                    width={85}
                    height={35}
                    fontSize={13}
                    borderRadius={12}
                    fontWeight={600}
                  />
                </div>
              </div>
              {
                <Successmodal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  // handleCloseModal={handleCloseModal}
                  title="Outlet Request Success"
                  subtitle="Your outlet adding request has been successfully received!"
                />
              }
            </Grid>
          </>
        }
      />
    </Grid>
  );
};
export default AddOutlet;
