
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { getAppToken,SERVER_URL } from 'helper/utils';
import { API } from '../../api/API';

export const orderstatusAPI = createApi({
  reducerPath: 'orderstatusAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: async (headers, {getState}) => {
      const apptoken = await getAppToken();
      headers.set('Content-Type','application/json');
      headers.set('apptoken', apptoken);
      
      return headers;
    },
  }),


  endpoints: builder => ({
    getOrderStatus: builder.query({
      queryFn: async () => {
        const baseURL = await SERVER_URL();
        const apptoken = await getAppToken();
        const response = await fetch(`${baseURL}${API.getOrderStatus}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            apptoken: apptoken,
          },
        });
        // console.log('api called in redux ---> getOrderStatus',response);
        if (!response.ok) {
          throw new Error('Failed to fetch getOrderStatus status');
        }
        const data = await response.json();
        return {data};
      },
   
     
    }),
 
 


 
  }),
});
 
export const {
  useGetOrderStatusQuery,
 
} = orderstatusAPI;
 