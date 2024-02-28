// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  selectedWarehouseObj: {},
  shipToWrhsId:[],
  

};

// ==============================|| SLICE - MENU ||============================== //

const placeOrder = createSlice({
  name: 'placeOrder',
  initialState,
  reducers: {
    addWarehouse(state, action) {
      // console.log("selectedWarehouseObj===",action.payload)
      state.selectedWarehouseObj = action.payload;
    },
    getWarehouseId(state, action){
state.shipToWrhsId= action.payload;
// console.log('value in redux warehouseId',state.shipToWrhsId);
    },
    removeData(state) {
      return { 
        selectedWarehouseObj: {},
      shipToWrhsId:[]}
  }
  }
});

export default placeOrder.reducer;

export const { addWarehouse,getWarehouseId,removeData } = placeOrder.actions;
