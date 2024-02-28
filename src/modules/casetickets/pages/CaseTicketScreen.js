import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Rightsidebar from 'components/rightsidebar/Rightsidebar';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import LocalSee from '@mui/icons-material/LocalSee';
import '../../../../src/components/dropdown/DropDown.css';
import { Grid } from '../../../../node_modules/@mui/material/index';
import '../../../modules/casetickets/styles/CaseTicketScreen.css';
import SubHeader from 'components/subHeader/SubHeader';
import CaseTicketTable from '../components/CaseTicketTable';
import { CaseTicketStateProvider, useCaseTicketState } from 'context/CaseTicketProvider';
import DropDown from 'components/dropdown/DropDown';
import { showSuccess } from 'components/nudges/Alert';
import CaseTicketMainSearch from '../components/CaseTicketMainSearch';

const Rcontent = ({ setShow }) => {
  console.log('setShow', setShow);
  const {
    getTicketTypes,
    selectedTicketType,
    setSelectedTicketType,
    createTicket,
    capturedImage,
    setCapturedImage,
    options,
    setOptions,
    inputValue,
    setInputValue
  } = useCaseTicketState();

  const outlet_ID = localStorage?.getItem('@user');
  const data = JSON?.parse(outlet_ID);
  const staffId = data?.staff[0]?.Id;

  useEffect(() => {
    try {
      if (getTicketTypes?.isSuccess) {
        let d = getTicketTypes?.data?.data?.map((item) => ({
          id: item?.Id,
          label: item?.TicketType
        }));
        setOptions(d);
      }
    } catch (e) {
      console.error('Error while getting Ticket Type Data ', e);
    }
  }, [getTicketTypes]);

  const handleTicketTypeChange = (selectedOption) => {
    setSelectedTicketType(selectedOption.id);
  };

  const handleSubmit = async () => {
    try {
      const requestBody = {
        ticket_type_id: selectedTicketType,
        outlet_id: staffId,
        note: inputValue,
        upload_media_id: capturedImage?.map((_, index) => index + 1)?.join(',')
      };
      const response = await createTicket(requestBody);
      console.log('VVVVV <<<<<:::::>>>>>>', response);
      if (response?.data?.statusCode == 200) {
        setShow(false);
        showSuccess('Ticket Created SuccessFully !');
      }
      console.log('createTicket response:', response);
    } catch (error) {
      // setShow(false);
      console.error('Error creating ticket:', error);
    }
  };

  const handleCamera = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.multiple = true;
    fileInput.addEventListener('change', handleFileSelection);
    fileInput.click();
  };

  const handleFileSelection = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newImages = Array.from(selectedFiles).map((file) => ({
        url: URL.createObjectURL(file),
        size: file.size,
        name: file.name
      }));
      const filteredImages = newImages.filter((newImage) => {
        return !capturedImage.some((capturedImage) => capturedImage.size == newImage.size && capturedImage.name == newImage.name);
      });
      setCapturedImage((prevImages) => [...prevImages, ...filteredImages.map((image) => image.url)]);
    } else {
      alert('No file selected');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // alert('handleKeyPress');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCross = () => {
    setShow(false);
  };
  const closeSidebar = () => setShow(false);

  return (
    // Main Div
    <div style={{ width: '100%' }}>
      {/* Header With Cross Mark */}

      <div className="recontent_maindivCss_case_ticket">
        <div className="createTicke_text_css_case_ticket">Create Case</div>
        <div className="crossCss_case_ticket" onClick={handleCross} onKeyDown={handleKeyPress} role="button" tabIndex="0">
          x
        </div>
      </div>

      {/* horizontal line  */}
      <hr width={'100%'} />

      {/* Case Types Text With DropDown */}
      <div className="caseType_textCss_case_ticket">Case Type</div>
      <DropDown options={options} placeholder={'Ticket Type'} onValueChange={handleTicketTypeChange} width={'95%'} />

      {/* Case Description with textinput */}
      <div className="caseDiscription_textCss_case_ticket">Case Description</div>
      <form noValidate autoComplete="off">
        <FormControl sx={{ marginLeft: '5%', width: '98%' }}>
          <OutlinedInput className="inputCss_case_ticket" multiline rows={5} value={inputValue} onChange={handleChange} />
        </FormControl>
      </form>

      {/* Camera with icon */}
      <div className="Mediatext_css_case_ticket">Media</div>
      <Grid style={{ padding: '5px' }}>
        <IconButton onClick={handleCamera} className="cameraCss_case_ticket">
          <LocalSee />
        </IconButton>
      </Grid>

      {/* Image with map */}
      {capturedImage.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Captured ${index + 1}`}
          style={{
            width: '20%',
            height: '8%',
            margin: '1%',
            borderRadius: '8px'
          }}
        />
      ))}

      {/* Buttons */}
      <div className="submitButtonCss_case_ticket">
        <Button size="small" sx={{ borderRadius: 2 }} variant="contained" onClick={() => handleSubmit()}>
          Submit
        </Button>
        <Button size="small" className="cancelButtonCss_case_ticket" onClick={handleCross}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

const CaseTicketActiveComponent = () => {
  const [show, setShow] = useState(false);
  // const getAllTickets = useGetAllTicketQuery({employeeId, ticketstatus})

  // const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);

  return (
    <div style={{ height: '100vh' }}>
      <SubHeader
        title={'Case & Tickets'}
        isRightEnable={true}
        rightComponent={
          <Button size="small" style={{ backgroundColor: '#0174bf', borderRadius: '7px' }} onClick={showSidebar} variant="contained">
            + Create New
          </Button>
        }
      />
      <CaseTicketMainSearch />
      <CaseTicketTable />
      {<Rightsidebar show={show} Rcontent={<Rcontent setShow={setShow} />} />}
    </div>
  );
};

const CaseTicketScreen = () => {
  return (
    <CaseTicketStateProvider>
      <CaseTicketActiveComponent />
    </CaseTicketStateProvider>
  );
};
export default CaseTicketScreen;
