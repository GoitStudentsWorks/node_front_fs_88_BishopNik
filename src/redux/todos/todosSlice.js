/** @format */

import { createSlice } from '@reduxjs/toolkit';

import { fetchAllTodos, fetchDelTodo, fetchPostTodo, fetchPutTodo } from './fetchApi';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllTodos.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = payload;
			})
			.addCase(fetchAllTodos.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchDelTodo.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchDelTodo.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.filter(item => item._id !== payload.id);
			})
			.addCase(fetchDelTodo.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchPostTodo.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchPostTodo.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = [...state.items, payload];
			})
			.addCase(fetchPostTodo.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchPutTodo.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchPutTodo.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.map(item => {
					if (item._id === payload._id) return payload;
					return item;
				});
			})
			.addCase(fetchPutTodo.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			});
	},
});

export const todosReducer = todosSlice.reducer;

export const { resetError } = todosSlice.actions;
