// Confirmationmodal.js

import { Button } from '@mui/material';
import React from 'react';
import ReusableModal from '../routemodal/ResuableModal';
import QuestionMark from '../../../assets/images/users/QuestionMark.gif';
import '../../../assets/fonts/Fonts.css';
import { confirmationModalStyles } from '../modalcss/Confirmationmodal_style';

export default function Confirmationmodal(props) {
  return (
    <div>
      <ReusableModal
        onClose={props.handleCloseModal}
        showCloseButton={false}
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        height="325px"
        width="320px"
        borderRadius="10px"
        ModalContent={
          <div style={confirmationModalStyles.modalContainer}>
            <div style={confirmationModalStyles.imageContainer}>
              <img src={QuestionMark} alt="QuestionMark" style={confirmationModalStyles.questionMarkImage} />
              <div style={confirmationModalStyles.infoContainer}>
                <span style={confirmationModalStyles.title}>{props.title}</span>
                <span style={confirmationModalStyles.subtitle}>{props.subtitle}</span>
              </div>
              <div style={confirmationModalStyles.buttonContainer}>
                <Button size="normal" style={confirmationModalStyles.yesButton} variant="contained" onClick={props.handleCloseModal}>
                  Yes
                </Button>
                <Button size="normal" style={confirmationModalStyles.noButton} variant="contained" onClick={props.handleNo}>
                  No
                </Button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
