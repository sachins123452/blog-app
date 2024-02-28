import React from 'react';

const ReusableModal = (props) => {
  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && props.onClose) {
      props.onClose();
    }
  };
  return (
    <>
      {props.isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 99999,
            
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
             
              
            }}
          >
            {props.showCloseButton && (
              <div
                style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  borderRadius: 30,
                  width: 40,       
                  height: 39,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  top:props.top
                  
                }}
                onClick={handleClose}
                onKeyDown={handleKeyPress}
                role="button"
                tabIndex={0}
              >
                <div style={{ fontSize: 26, fontWeight: '700', color: '#949494' }}>&times;</div>
              </div>
            )}
            <div
              style={{
                backgroundColor: props.backgroundColor,
                padding: props.padding,
                borderRadius: props.borderRadius,
                width: props.width,
                height: props.height,
                maxWidth: props.maxWidth,
                margin: props.margin,
                border: props.border,
                maxHeight: props.maxHeight,
                boxShadow:props.boxShadow,
                marginTop: 0
              }}
            >
              <div style={{ marginBottom: props.marginBottom }}>{props.ModalContent}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ReusableModal.defaultProps = {
  isOpen: false,
  showCloseButton: true,
  height: '320px',
  width: '400px',
  maxWidth: '1500px',
  maxHeight: '1000px',
  // boxShadow: "2px 2px 2px 2px  #F7F7F8",
  border: '1px solid #ddd',
  backgroundColor: '#fff',
  borderRadius: '13px',
  ModalContent: <div>ModalContent</div>,
  top:'-10%'
};

export default ReusableModal;
