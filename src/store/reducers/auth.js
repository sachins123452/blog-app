// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
 isLogin:false,
 user:{}
};

// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth(state, action) {
      state.isLogin = action.payload.status;
    },
  }
});

export default auth.reducer;

export const { updateAuth } = auth.actions;
