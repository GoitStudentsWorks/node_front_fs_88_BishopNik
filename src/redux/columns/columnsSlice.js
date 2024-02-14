/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { addColumn, delColumn, fetchColumnsByIdBoards, updateColumn } from './operations';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
	createEditColumnModal: {
		isOpen: true,
		columnId: null,
	},
	// createColumnModalOpen: false,
	// editColumnModalOpen: false,
};

const columnsSlice = createSlice({
	name: 'columns',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
			state.createCardModal = null;
			state.createEditColumnModal = { isOpen: true, columnId: null };
		},
		// setCreateModalOpen: (state, { payload }) => {
		// 	state.createColumnModalOpen = payload;
		// },
		// setEditModalOpen: (state, { payload }) => {
		// 	state.editColumnModalOpen = payload;
		// },
		updateStateAfterDeleteBoard: (state, { payload }) => {
			const { id } = payload;
			state.items = state.items.filter(item => item.boarderId !== id);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchColumnsByIdBoards.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchColumnsByIdBoards.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = payload;
			})
			.addCase(fetchColumnsByIdBoards.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(addColumn.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addColumn.fulfilled, (state, { payload }) => {
				state.error = null;
				state.items.push(payload);
				state.createEditColumnModal.isOpen = false;
				state.createEditColumnModal.boardId = payload._id;
			})
			.addCase(addColumn.rejected, (state, { payload }) => {
				state.error = payload;
			})
			.addCase(delColumn.fulfilled, (state, { payload }) => {
				state.error = null;
				state.items = state.items.filter(item => item._id !== payload);
			})
			.addCase(delColumn.rejected, (state, { payload }) => {
				state.error = payload;
			})
			.addCase(updateColumn.fulfilled, (state, { payload }) => {
				state.error = null;
				state.items = state.items.map(item => {
					if (item._id === payload._id) return payload;
					return item;
				});
				state.createEditColumnModal.isOpen = false;
				state.createEditColumnModal.boardId = payload._id;
				// state.editColumnModalOpen = false;
			})
			.addCase(updateColumn.rejected, (state, { payload }) => {
				state.error = payload;
			});
	},
});

export const columnsReducer = columnsSlice.reducer;

export const { resetError, updateStateAfterDeleteBoard } = columnsSlice.actions;
