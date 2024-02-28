import React from 'react';
import ReusableModal from '../routemodal/ResuableModal';
import CustomButton from 'components/buttons/CustomButton';
import '../../../assets/fonts/Fonts.css';
import { useNavigate } from 'react-router-dom';
import { Resetpassword_style } from '../modalcss/Resetpassword_style';
export default function Resetpasswordmodal(props) {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    props.setIsOpenmodal(false);
    navigate('/Login');
  };

  return (
    <div>
      <ReusableModal
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        showCloseButton={false}
        height="350px"
        width="340px"
        borderRadius="10px"
        ModalContent={
          <div style={Resetpassword_style.modalContainer}>
            <span style={Resetpassword_style.title}>Reset Password</span>
            <span style={Resetpassword_style.message}>
              We have successfully dispatched a password reset link to your registered email address.
            </span>
            <span style={Resetpassword_style.resetProcessMessage}>Kindly proceed with the reset process.</span>
            <div style={Resetpassword_style.buttonContainer}>
              <CustomButton width={'38%'} label="Thank You" onClick={handleCloseModal} />
            </div>
          </div>
        }
      />
    </div>
  );
}
