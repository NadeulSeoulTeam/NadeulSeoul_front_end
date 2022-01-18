import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'AuthReducer',
  initialState: [],
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
  },
});

export const { add, remove } = auth.actions;

export default auth.reducer;
