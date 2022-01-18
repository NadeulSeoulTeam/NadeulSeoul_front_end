import { createSlice } from '@reduxjs/toolkit';

const location = createSlice({
  name: 'locationReducer',
  initialState: [],
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
  },
});

export const { add, remove } = location.actions;

export default location.reducer;
