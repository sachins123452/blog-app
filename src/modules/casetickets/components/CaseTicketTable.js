import { API } from 'api/API';
import useApiCall from 'api/useApiCall';
import { showDanger } from 'components/nudges/Alert';
import { useCaseTicketState } from 'context/CaseTicketProvider';
import BasicTabel from 'pages/dashboard/BasicTabel';
import React, { useEffect } from 'react';
import moment from 'moment-timezone';
function CaseTicketTable() {
  const { makeRequest } = useApiCall();
  const { getAllTicketData, setGetAllTicketData } = useCaseTicketState();

  const outlet_ID = localStorage?.getItem('@user');
  const data = JSON?.parse(outlet_ID);

  const columns = [
    { id: '#', label: '#', minWidth: 90 },
    { id: 'caseType', label: 'Case Type', minWidth: 170 },
    {
      id: 'description',
      label: 'Description',
      minWidth: 170,
      align: 'center'

      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'createdOn',
      label: 'Created on',
      minWidth: 170,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 150,
      align: 'center'
      // format: (value) => value.toLocaleString('en-US'),
    },

    {
      id: 'Action',
      label: 'Action',
      //  minWidth: 50,
      align: 'center'
      // format: (value) => value.toFixed(2),
    }
  ];

  const formatDateTime = (dateTimeString) => {
    const date = moment(dateTimeString).tz('Asia/Kolkata');
    return date.format('D MMM YYYY, h:mm A');
  };

  const rows = getAllTicketData?.map((getTicket) => ({
    '#': getTicket?.Id,
    description: getTicket?.Description,
    caseType: getTicket?.TicketType.TicketType,
    createdOn: formatDateTime(getTicket?.CreatedAt),
    status: getTicket?.Status
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        let getAllTicketParams = {
          employee_id: data?.EmployeeId
        };
        let getAllTicket = await makeRequest({ method: 'GET', url: API.getAllTicket, params: getAllTicketParams });

        if (getAllTicket?.statusCode === 200) {
          console.log('getAllTicket', getAllTicket);
          setGetAllTicketData(getAllTicket.data);
        } else {
          showDanger(`${getAllTicket?.message}`);
        }
      } catch (productError) {
        showDanger(`${productError}`);
      }
    };

    fetchData();
  }, [rows]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Open':
        return { color: '#8260e0' };
      case 'Closed':
        return { color: '#55ba51' };

      default:
        return { color: 'black' };
    }
  };

  return (
    <div>
      <BasicTabel columns={columns} rows={rows} statusColorFun={getStatusStyle} statusKey={'status'} />
    </div>
  );
}

export default CaseTicketTable;
