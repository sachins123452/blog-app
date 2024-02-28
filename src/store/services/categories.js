
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { getAppToken,SERVER_URL } from 'helper/utils';
import { API } from '../../api/API';
 

export const categoriesAPI = createApi({
  reducerPath: 'categoriesAPI',
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
    getCategories: builder.query({
      queryFn: async () => {
        const baseURL = await SERVER_URL();
        const apptoken = await getAppToken();
        const response = await fetch(`${baseURL}${API.getCategories}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            apptoken: apptoken,
          },
        });
        console.log('api called in redux ---> getCategories',response);
        if (!response.ok) {
          throw new Error('Failed to fetch getCategories status');
        }
        const data = await response.json();
        return {data};
      },
   
     
    }),
 
 


 
  }),
});
 
export const {
  useGetCategoriesQuery,
 
} = categoriesAPI;
 