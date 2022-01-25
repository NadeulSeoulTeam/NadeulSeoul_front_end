import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
