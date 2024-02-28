import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAppToken, getEmployeeOutletId, SERVER_URL } from 'helper/utils';
import { API } from '../../api/API';

export const getWarehouseAPI = createApi({
  reducerPath: 'getWarehouseAPI',
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
    getWarehouse: builder.query({
      queryFn: async () => {
        const baseURL = await SERVER_URL();
        const apptoken = await getAppToken();
        let outletId = await getEmployeeOutletId();
        const response = await fetch(`${baseURL}${API.getWarehouse}?OutletId=${outletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset+utf-8',
            apptoken: apptoken
          }
        });
        console.log('api called in redux -----> getwarehouse ::::', response);
        if (!response.ok) {
          throw new Error('Failed to fetch getWarehouse status');
        }
        const data = await response.json();
        return { data };
      },
      keepUnusedDataFor: 0,

    })
  })
});

export const { useGetWarehouseQuery } = getWarehouseAPI;
