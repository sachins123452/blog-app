
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { getAppToken,SERVER_URL } from 'helper/utils';
import { API } from '../../api/API';
 

export const SubcategoriesAPI = createApi({
  reducerPath: 'SubcategoriesAPI',
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
    getSubCategories: builder.query({
      queryFn: async ({CategoryId}) => {
        // let  CategoryId=1416
        if(CategoryId){
        const baseURL = await SERVER_URL();
        const apptoken = await getAppToken();
        const response = await fetch(`${baseURL}${API.getCategories}?CategoryId=${CategoryId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            apptoken: apptoken,
          },
        });
        console.log('api called in redux ---> getCategories',response);
        if (!response.ok) {
          throw new Error('Failed to fetch getSubCategories status');
        }
        const data = await response.json();
        return {data};
      }
      },   
    }),
 
 


 
  }),
});
 
export const {
  useGetSubCategoriesQuery,
 
} = SubcategoriesAPI;
 