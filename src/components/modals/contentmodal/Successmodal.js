// Successmodal.js

import React from "react";
import ReusableModal from '../routemodal/ResuableModal';
import { Button } from '@mui/material';
import confirmation from '../../../assets/images/users/confirmation.png';
import '../../../assets/fonts/Fonts.css';
import { successModalStyles } from "../modalcss/Successmodal_style";

export default function Successmodal(props) {
  return (
    <div style={successModalStyles.modalContainer}>
      <ReusableModal
        showCloseButton={false}
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        height="315px"
        width='325px'
        borderRadius="10px"
        ModalContent={
          <div style={successModalStyles.contentContainer}>
            <img src={confirmation} alt="confirmation" style={successModalStyles.image} />
            <div style={successModalStyles.textContainer}>
              <span style={successModalStyles.title}>{props.title}</span>
              <span style={successModalStyles.subtitle}>{props.subtitle}</span>
            </div>
            <Button
              size="normal"
              sx={successModalStyles.button}
              variant="contained"
              onClick={props.handleCloseModal}
            >
              Thank You
            </Button>
          </div>
        }
      />
    </div>
  );
}
