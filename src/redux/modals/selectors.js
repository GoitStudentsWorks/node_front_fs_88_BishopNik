/** @format */

export const todosState = state => state.modals;

export const statusLoadingState = state => state.todos.isLoading;

export const statusError = state => state.todos.error;


export const needModalState = (state) => state.modals.needHelp; 
