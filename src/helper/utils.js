
import { store } from 'store/index';

//When we want to use redux state outside the hooks so there is a function to get the redux global state
export const getValueFromRedux = (slice) => {
  const value = store.getState();
  const {persistedReducer} = value; 
  console.log("value==>",value)
  return persistedReducer[slice];
};


export const getAppToken = async() =>{
 
  try {
    var appToken =  localStorage.getItem('@login');
    // console.log('appToken',appToken);
    var token=JSON.parse(appToken)
    console.log('token',token.AppToken);
    return token.AppToken;
  } catch (e) {
    console.log('Error:', e);
  }
}

export const getUserDetails = async() =>{
  try {
    let getData =  localStorage.getItem('@user');
    // console.log('getData',getData);
    let employee = JSON.parse(getData)
    return employee;
  } catch (e) {
    console.error('erro in getUserDetails utils', e);
  }
}

  function SERVER_URL() {
  try{
   let serverurl = ('https://hamilton-dev-d2261358fbb2.herokuapp.com/');
   return serverurl;
  }catch(e){
    console.log('Error:', e);
  
  }
}

export const RemoveLocalData = async() =>{
  try{
   const clearData= localStorage.clear('@login');
   return clearData
  }catch(e){
    console.log('Error:', e);
  
  }
}


export const getEmployeeOutletId = async() =>{
  try{
   const userData = localStorage.getItem('@user');
   let parseData = await JSON.parse(userData)
     return parseData.staff[0]?.Id
  }catch(e){
    return null;
  }
}

export const getEmployeeOutletName = async() =>{
  try{
   const userData = localStorage.getItem('@user');
   let parseData = await JSON.parse(userData)
     return parseData?.staff[0]?.OutletName
  }catch(e){
    return null;
  }
}



export {SERVER_URL }