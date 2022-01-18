import { createSlice } from '@reduxjs/toolkit';

const course = createSlice({
  name: 'courseReducer',
  initialState: [],
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
  },
});

export const { add, remove } = course.actions;

export default course.reducer;
