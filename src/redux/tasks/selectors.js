import { createSelector } from '@reduxjs/toolkit';
import { selectFilterStatus } from 'redux/filters/selectors';
import { statusFilters } from 'redux/filters/constants';

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

export const selectVisibleTasks = createSelector(
  [selectFilterStatus, selectTasks],
  (statusFilter, tasks) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector(
  [selectTasks],

  tasks => {
    return tasks.reduce(
      (acc, task) => {
        if (task.completed) {
          acc.completed += 1;
        } else {
          acc.active += 1;
        }
        return acc;
      },

      { active: 0, completed: 0 }
    );
  }
);