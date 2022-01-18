import { createSlice } from '@reduxjs/toolkit';

const search = createSlice({
  name: 'searchReducer',
  initialState: [],
  reducers: {
    // add: (state, action) => {
    //   state.push({ text: action.payload, id: Date.now() });
    // },
  },
});

export const { add, remove } = search.actions;

export default search.reducer;
