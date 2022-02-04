import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
<<<<<<< HEAD
  name: 'todoReducer',
  initialState: [],
=======
  name: 'toDoReducer',
  initialState: {
    test: [
      {
        text: '',
        id: '',
      },
    ],
  },
>>>>>>> dd219033470a465a43ad423b3143233ebc84baba
  reducers: {
    add: (state, action) => {
      state.test.push([{ text: action.payload, id: Date.now() }]);
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
