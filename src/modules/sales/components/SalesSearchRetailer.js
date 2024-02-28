// import SearchRetailermodal from 'components/modals/contentmodal/SearchRetailermodal';
// import { useSalesState } from 'context/SalesProvider';
// import React from 'react';

// const SalesSearchRetailer = () => {
//   const { isOpen, setIsOpen, setIsOpenSecondaryModal } = useSalesState();

//   const handleCloseModal = () => {
//     setIsOpen(false);
//     setIsOpenSecondaryModal(true);
//   };

//   return (
//     <div>
//       <SearchRetailermodal isOpen={isOpen} setisOpen={setIsOpen} handleCloseModal={handleCloseModal} />
//     </div>
//   );
// };

// export default SalesSearchRetailer;
import React from 'react';
import ReusableModal from 'components/modals/routemodal/ResuableModal';
// import CustomButton from 'components/buttons/CustomButton';
import { TextField,Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../../assets/fonts/Fonts.css';
import { useTheme } from 'components/Theme/ThemeProvider';
import { useSalesState } from 'context/SalesProvider';

const contacts = [
  { companyName: 'Mediserv Pvt Ltd', phoneNumber: '6202115968', address: 'A 12,Yogeshwar Complex,Satellite Road,Ahemdabad 380029,Gujrat', name: 'Ashok Sharma' },
  { companyName: 'Wellness Mart', phoneNumber: '6202115968', address: 'A 12,Yogeshwar Complex,Satellite Road,Ahemdabad 380029,Gujrat', name: 'Vikram Malik' },
  { companyName: 'Wellness Word', phoneNumber: '6202115968', address: 'A 12,Yogeshwar Complex,Satellite Road,Ahemdabad 380029,Gujrat', name: 'Ayush Pandit' },
  { companyName: 'Vitality Plus', phoneNumber: '6202115968', address: 'A 12,Yogeshwar Complex,Satellite Road,Ahemdabad 380029,Gujrat', name: 'John Deo' },
];

export default function SearchRetailermodal(props) {

   let { currentTheme, setIsOpen, isOpen ,setIsOpenSecondaryModal} = useSalesState();
  
   const handleCard=()=>{
    setIsOpen(false)
    setIsOpenSecondaryModal(true)
   }

 const Cards = ({ cards }) => {
    return (
        <div   role="button"
        tabIndex={0}
        onClick={()=>{handleCard()}}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            // props.handleCloseModal();
          }
        }} style={{ display: 'flex', flexWrap: 'wrap',padding:8,justifyContent:'space-around',marginTop:4}}>
        {cards.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 300, marginBottom: '10px',width:260,boxShadow:'none', backgroundColor: currentTheme.bodyColor,
          border: '1px solid #E6E6E6',borderRadius:4 }}>
            <CardContent style={{padding:'10px'}}>
              <Grid style={{fontSize:13,fontFamily:'GilroyBold',color:currentTheme.textColor}}>
                {card.companyName}
              </Grid>
              <div style={{display:'flex',flexDirection:'row',marginTop:5}}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <AccountCircleIcon style={{color:'#4CB748',fontSize:16}}/>
                <Grid sx={{ marginLeft: '5px',fontSize:12,fontFamily:'SemiBold',color:currentTheme.textColor }}>
                {card.name}
              </Grid>

              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px',marginLeft:10 }}>
                <PhoneAndroidIcon style={{color:'#4CB748',fontSize:16}}/>
                <Grid variant="body2" color="textSecondary" component="span" sx={{ marginLeft: '5px',fontSize:12,fontFamily:'SemiBold',color:currentTheme.textColor }}>
                  {card.phoneNumber}
                </Grid>
              </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                <LocationOnIcon style={{color:'#4CB748',fontSize:16}} />
                <Grid  sx={{ marginLeft: '5px',fontSize:12,fontFamily:'SemiBold',color:currentTheme.textColor }}>
                  {card.address}
                </Grid>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div>

      <ReusableModal
        showCloseButton={false}
        isOpen={isOpen}
        // setIsOpen={props.setIsOpen}
        height="335px"
        width="570px"
        borderRadius="10px"
        backgroundColor={currentTheme.bodyColor}
        ModalContent={
          <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TextField
                variant="standard"
                placeholder="Search Retailer..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
                style={{ backgroundColor: '#F6F6F6', borderRadius: '5px', width: '94%', padding: '3px', marginTop: 20}}
              />
            </div>
            <div style={{fontSize:13,fontFamily:'SemiBold',color:'#0375C0',marginLeft:16,marginTop:10}}>Recently Searched</div>
            <Cards cards={contacts} />
           
          </>
        }
      />
    </div>
  );
}

