import MainSearch from 'components/main_search_header_bar/MainSearch';
import { useCaseTicketState } from 'context/CaseTicketProvider';
import React, { useState } from 'react';
import { useGetAllTicketQuery } from 'store/services/TicketServices';

function CaseTicketMainSearch() {
  const { getAllTicket } = useGetAllTicketQuery();
  const [options,setOptions]=useState([])
  console.log('TTTTTT:::>>><<<', getAllTicket);

  return (
    <div className="mainSearchdiv_case_ticket">
      <MainSearch height={'auto'} options={options}/>
    </div>
  );
}

export default CaseTicketMainSearch;
