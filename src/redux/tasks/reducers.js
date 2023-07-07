export const pendingReducer = state => {
  state.isLoading = true;
};

export const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

export const fetchTasksSuccessReducer = (state, action) => {
  state.items = action.payload;
};

export const addTaskSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

export const deleteTaskSuccessReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  if (index !== -1) {
    state.items.splice(index, 1);
  }
};

export const toggleCompletedSuccessReducer = (state, action) => {
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items[index].completed = action.payload.completed;
};
