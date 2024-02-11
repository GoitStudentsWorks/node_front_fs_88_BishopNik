/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { addCard, delCard, fetchCardsByColumnId, updateCard } from './operations';

const initialState = {
	items: [],
	createCardModal: null,
	isLoading: false,
	error: null,
};

const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
			state.createCardModal = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCardsByColumnId.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchCardsByColumnId.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				for (let i = 0; i < payload.length; i++)  {
					state.items.push(payload[i])
				};
				
			})
			.addCase(fetchCardsByColumnId.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
				state.createCardModal = true;
			})
			.addCase(addCard.fulfilled, (state, { payload }) => {
				state.error = null;
				state.createCardModal = false;
				state.items = [...state.items, payload];
			})
			.addCase(addCard.rejected, (state, { payload }) => {
				state.error = payload;
			})
			.addCase(delCard.fulfilled, (state, { payload }) => {
				state.error = null;
				const index = state.items.findIndex(item => item.id === payload);
				state.items.splice(index, 1);
			})
			.addCase(delCard.rejected, (state, { payload }) => {
				state.error = payload;
			})
			.addCase(updateCard.fulfilled, (state, { payload }) => {
				state.error = null;
				state.items = state.items.map(item => {
					if (item._id === payload._id) return payload;
					return item;
				});
			})
			.addCase(updateCard.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const cardsReducer = cardsSlice.reducer;

export const { resetError } = cardsSlice.actions;
