import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAppToken, SERVER_URL } from 'helper/utils';
import { API } from '../../api/API';

export const TicketTypesAPI = createApi({
  reducerPath: 'TicketTypesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: async (headers, { getState }) => {
      const apptoken = await getAppToken();
      headers.set('Content-Type', 'application/json');
      headers.set('apptoken', apptoken);

      return headers;
    }
  }),

  endpoints: (builder) => ({
    getTicketTypes: builder.query({
      queryFn: async () => {
        const baseURL = await SERVER_URL();
        const apptoken = await getAppToken();
        const response = await fetch(`${baseURL}${API.getTicketTypes}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            apptoken: apptoken
          }
        });
        console.log('api called in redux ---> getTicketTypes', response);
        if (!response.ok) {
          throw new Error('Failed to fetch getTicketTypes status');
        }
        const data = await response.json();
        return { data };
      }
    })
  })
});

export const CreateTicketAPI = createApi({
  reducerPath: 'CreateTicketAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: async (headers, { getState }) => {
      const apptoken = await getAppToken();
      headers.set('Content-Type', 'application/json');
      headers.set('apptoken', apptoken);
      return headers;
    }
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    createTicket: builder.mutation({
      queryFn: async (requestedData) => {
        const baseURL = await SERVER_URL();
        const apptoken = await getAppToken();
        const response = await fetch(`${baseURL}${API.createTicket}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            apptoken: apptoken
          },
          body: JSON.stringify(requestedData)
        });
        console.log('api called in redux ---> createTicket', response);
        if (!response.ok) {
          throw new Error('Failed to fetch createTicket status');
        }
        const data = await response.json();
        return { data };
      },
      invalidatesTags: ['Post']
    })
  })
});

export const GetAllTicketAPI = createApi({
  reducerPath: 'GetAllTicketAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: async (headers, { getState }) => {
      const apptoken = await getAppToken();
      headers.set('Content-Type', 'application/json');
      headers.set('apptoken', apptoken);

      return headers;
    }
  }),

  endpoints: (builder) => ({
    getAllTicket: builder.query({
      queryFn: async (employeeId, ticketstatus) => {
        if (employeeId && ticketstatus) {
          const baseURL = await SERVER_URL();
          const apptoken = await getAppToken();
          const response = await fetch(`${baseURL}${API.getAllTicket}?employee_id=${employeeId}&ticket_status=${ticketstatus}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              apptoken: apptoken
            }
          });
          console.log('api called in redux ---> getAllTicket', response);
          if (!response.ok) {
            throw new Error('Failed to fetch getAllTicket status');
          }
          const data = await response.json();
          return { data };
        }
      }
    })
  })
});

export const { useGetTicketTypesQuery } = TicketTypesAPI;
export const { useCreateTicketMutation } = CreateTicketAPI;
export const { useGetAllTicketQuery } = GetAllTicketAPI;
