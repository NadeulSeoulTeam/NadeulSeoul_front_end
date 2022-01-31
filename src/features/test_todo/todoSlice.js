import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'toDoReducer',
  initialState: {
    toDos: [],
  },
  reducers: {
    add: (state, action) => {
      state.toDos.push({
        text: action.payload,
        id: Date.now(),
      });
    },
    remove: (state, action) => {
      // 아 이렇게 해야 대네,,
      state.toDos = state.toDos.filter((v) => v.id !== action.payload.todoId);
    },
  },
});

const { actions, reducer } = todoSlice;

export const { add, remove } = actions;

export default reducer;
