// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
logo:{}
};

// ==============================|| SLICE - MENU ||============================== //

const logo = createSlice({
  name: 'logo',
  initialState,
  reducers: {
    checkLogo(state, action) {
      state.logo = action.payload.status;
    }
  }
});

export default logo.reducer;

export const { checkLogo } = logo.actions;
