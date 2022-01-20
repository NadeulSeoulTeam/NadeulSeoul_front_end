import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'toDoReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const { actions, reducer } = todoSlice;

export const { add, remove } = actions;

export default reducer;
