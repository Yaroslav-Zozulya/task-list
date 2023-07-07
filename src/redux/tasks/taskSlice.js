import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';
import {
  pendingReducer,
  rejectedReducer,
  fulfilledReducer,
  fetchTasksSuccessReducer,
  addTaskSuccessReducer,
  deleteTaskSuccessReducer,
  toggleCompletedSuccessReducer,
} from './reducers';

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchTasks, addTask, deleteTask, toggleCompleted];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.fulfilled, fetchTasksSuccessReducer)
      .addCase(addTask.fulfilled, addTaskSuccessReducer)
      .addCase(deleteTask.fulfilled, deleteTaskSuccessReducer)
      .addCase(toggleCompleted.fulfilled, toggleCompletedSuccessReducer)
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const tasksReducer = tasksSlice.reducer;
