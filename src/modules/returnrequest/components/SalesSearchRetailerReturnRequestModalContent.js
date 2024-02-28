import React from 'react';
import { useSalesReturnRequestState } from 'context/SalesReturnRequestProvider';
import { Returnrequest_style } from '../style/Returnrequest_style';
import { TextField } from '@mui/material';
import returnRequest from '../../../assets/images/users/returnRequest.png';
import CustomButton from 'components/buttons/CustomButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ReusableModal from 'components/modals/routemodal/ResuableModal';
import { useNavigate } from 'react-router-dom';
const SalesSearchRetailerReturnRequestModalContent = (props) => {
  const navigate = useNavigate();
  const { setIsOpen, isOpen } = useSalesReturnRequestState();

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  function ModalContent() {
    const handleClick = () => {
      navigate('/dashboard/SalesChooseProduct');
    };
    return (
      <div style={Returnrequest_style.modalContainer}>
        <div style={Returnrequest_style.modalContent}>
          <img src={returnRequest} alt="warehouse" style={Returnrequest_style.modalImage} />
          <div style={Returnrequest_style.formContainer}>
            <span style={Returnrequest_style.invoiceIdLabel}>Enter Invoice ID</span>
            <span style={Returnrequest_style.invoiceIdDescription}>Enter the invoice ID to select products for return.</span>

            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
                disableUnderline: true
              }}
              style={Returnrequest_style.textField}
            />
          </div>
        </div>
        <div style={Returnrequest_style.buttonContainer}>
          <CustomButton label="Search & Find" width={'35%'} borderRadius={'10px'} onClick={handleClick} />
          <div
            role="button"
            tabIndex={0}
            style={Returnrequest_style.cancelButton}
            onClick={handleCloseModal}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCloseModal();
              }
            }}
          >
            Cancel
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ReusableModal
        isOpen={isOpen}
        showCloseButton={false}
        height="350px"
        width="330px"
        ModalContent={<ModalContent />}
      />
    </div>
  );
};

export default SalesSearchRetailerReturnRequestModalContent;
