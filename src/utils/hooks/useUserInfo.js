// // import React from 'react';

// import { makeRequest } from "api/Request";

// const useUserInfo = ({id}) => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState([]);
//   const [accountId, setAccountId] = useState(null);

//   useEffect(() => {
//     const getProfileDetails = async () => {
//       try {
//         let res = await makeRequest({url:'/api/profile',params:{employee_id:id}});
//         if (res.statusCode == 200) {
//           setResponse(response.data);
//           setAccountId(response.data.accountid)
//         }
//       } catch (err) {
//         setError(err);
//       }
//     };
//     getProfileDetails();
//   }, []);

//   return [response, error,accountId];
// };

// export default useUserInfo;
