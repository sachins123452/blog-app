import {Button } from '@mui/material';
import React from 'react';
import ReusableModal from '../routemodal/ResuableModal';
import orderplaced from '../../../assets/images/users/orderplaced.png';
import '../../../assets/fonts/Fonts.css';
import { Orderplaced_style } from '../modalcss/Orderplaced_style';
// import { useNavigate } from 'react-router-dom';

export default function Orderplacedmodal(props) {
    return (
      <div>
        <ReusableModal
          showCloseButton={false}
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
          height="305px"
          width="330px"
          borderRadius="10px"
          backgroundColor="#F4FDFE"
          ModalContent={
            <div style={Orderplaced_style.modalContainer}>
              <div style={Orderplaced_style.modalContent}>
                <img src={orderplaced} alt="warehouse" style={Orderplaced_style.image} />
                <div style={Orderplaced_style.textContainer}>
                  <span style={Orderplaced_style.title}>{props.title}</span>
                  <span style={Orderplaced_style.subtitle}>{props.subtitle}</span>
                </div>
              </div>
              <Button size="normal" sx={Orderplaced_style.button} variant="contained" onClick={props.handleCloseModal}>
                Thank You
              </Button>
            </div>
          }
        />
      </div>
    );
  }
  