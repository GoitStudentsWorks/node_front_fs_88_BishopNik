/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBoards, fetchPostBoard, fetchPutBoard, fetchDelBoard } from './operations';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllBoards.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchAllBoards.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = payload;
			})
			.addCase(fetchAllBoards.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchPostBoard.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchPostBoard.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.filter(item => item._id !== payload.id);
			})
			.addCase(fetchPostBoard.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchPutBoard.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchPutBoard.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = [...state.items, payload];
			})
			.addCase(fetchPutBoard.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchDelBoard.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchDelBoard.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.map(item => {
					if (item._id === payload._id) return payload;
					return item;
				});
			})
			.addCase(fetchDelBoard.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			});
	},
});

export const boardsReducer = boardsSlice.reducer;

export const { resetError } = boardsSlice.actions;
