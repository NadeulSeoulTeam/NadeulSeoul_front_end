import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'userReducer',
  initialState: [],
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
  },
});

export const { add, remove } = user.actions;

export default user.reducer;
