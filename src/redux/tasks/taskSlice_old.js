import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';
const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,

  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [deleteTask.pending](state) {
      state.isLoading = true;
    },
    [toggleCompleted.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteTask.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [toggleCompleted.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items[index].completed = action.payload.completed;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
