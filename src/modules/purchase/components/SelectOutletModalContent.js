import ReusableModal from 'components/modals/routemodal/ResuableModal'
import React from 'react'
import warehouse from '../../../assets/images/users/warehouse.png';
import CustomButton from 'components/buttons/CustomButton';
import '../../../assets/fonts/Fonts.css';
import { usePurchaseState } from 'context/PurchaseProvider';
import { showDanger } from 'components/nudges/Alert';
import { useNavigate } from 'react-router-dom';



function RenderItem () {
    let { getOutletMappingData,setSelectedOutletId,selectOutletId} = usePurchaseState();

    const handleSelectOutlet = (e, option) =>{
        console.log("option.Id ===>",option?.Id)
        setSelectedOutletId(option.Id)
    }

    return (
        <>
          {getOutletMappingData?.data?.data?.map((option, index) => {
            return (
              <div key={option.Id} style={{ display: 'flex', flexDirection: 'column', width: '96%', marginLeft: 6, overflow: 'hidden' }}>
                <hr />
                <div
                  style={{
                    fontFamily: 'Regular',
                    fontSize: 12,
                    fontWeight: '800',
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    marginLeft: '4%'
                  }}
                >
                  <input
                    type="radio"
                    name="option"
                    value={option.Id}
                    checked={selectOutletId == option?.Id}
                    onChange={(e) => {
                        handleSelectOutlet(e, option);
                    }}
                    style={{ marginRight: '5px', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <div
                      style={{
                        marginLeft: '32px',
                        fontFamily: 'Regular',
                        fontSize: 10,
                        fontWeight: '600'
                      }}
                    >
                      {option?.OutletName}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )
}


function ModalContent (){
const navigate = useNavigate();
let { selectOutletId} = usePurchaseState();


const handleClickOnSubmit = () =>{

    if(selectOutletId == ''){
      showDanger("Please select primary outlet.");
    }else{
        navigate('/dashboard/AddProducts',{
          primaryOutlet:selectOutletId
        });
    }

}

    return(  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '95%',
        padding: '5px',
        marginTop: 5
      }}
    >
      <img src={warehouse} alt="warehouse" style={{ width: '100%', maxWidth: '210px', maxHeight: '150px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', marginTop: 15 }}>
        <span style={{ fontSize: 14, color: '#000', fontFamily: 'Regular', fontWeight: '700' }}>You are mapped to</span>
        <span style={{ fontFamily: 'Regular', fontSize: 15, color: '#68C264', fontWeight: '700' }}>Zydus Wellness Gujarat</span>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '300px', marginTop: 5 }}>
      <span style={{ fontFamily: 'GilroyBold', fontSize: 16, marginLeft: '4%' }}>Ship from</span>
      <span style={{ fontFamily: 'Regular', fontSize: 13, fontWeight: '600', marginLeft: '4%' }}>
        Choose where you want to ship the order
      </span>
    </div>
    <div style={{maxHeight: '145px', width: '300px', marginTop: 15, }}>
      <RenderItem/>
    </div>
    <div style={{ width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
      <CustomButton label="Verify & Place Order"
       onClick={()=>handleClickOnSubmit()} 
       style={{ width: '100%' }} />
    </div>
  </div>)
} 


function SelectWarehouseModalContent() {
    let {  setIsOpen, isOpen } = usePurchaseState();

  return (
    <div style={{ overflow: 'hidden' }}>
    <ReusableModal
      showCloseButton={true}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={()=>setIsOpen(!isOpen)}
      height="470px"
      width="400px"
      borderRadius="10px"
      ModalContent={<ModalContent/>}
    />
  </div>
  )
}

export default SelectWarehouseModalContent



