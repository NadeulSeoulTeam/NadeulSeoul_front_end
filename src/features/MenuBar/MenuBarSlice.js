import { createSlice } from '@reduxjs/toolkit';

const menuBar = createSlice({
  name: 'menuBarReducer',
  initialState: [],
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
  },
});

export const { add, remove } = menuBar.actions;

export default menuBar.reducer;
