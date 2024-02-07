/** @format */

export const todosState = state => state.modals;

export const statusLoadingState = state => state.todos.isLoading;

export const statusError = state => state.todos.error;


export const needHelpModalState = (state) => state.modals.needHelp; 
export const createEditBoardModalState = (state) => state.modals.createEditBoard; 
