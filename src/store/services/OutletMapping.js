import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAppToken, SERVER_URL } from 'helper/utils';
import { API } from '../../api/API';


export const getOutletMappingAPI = createApi({
  reducerPath: 'getOutletMappingAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: async (headers) => {
      const apptoken = await getAppToken();
      headers.set('Content-Type', 'application/json');
      headers.set('apptoken', apptoken);

      return headers;
    }
  }),

  endpoints: (builder) => ({
    getOutletMapping: builder.query({
      queryFn: async () => {
        const baseURL = await SERVER_URL();
        const apptoken = await getAppToken();
        const response = await fetch(`${baseURL}${API.getOutletMapping}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset+utf-8',
            apptoken: apptoken
          }
        });
        console.log('api called in redux -----> getOutletMapping ::::', response);
        if (!response.ok) {
          throw new Error('Failed to fetch getOutletMapping status');
        }
        const data = await response.json();
        return { data };
      },
      keepUnusedDataFor: 0,
    })
  })
});

export const { useGetOutletMappingQuery } = getOutletMappingAPI;



