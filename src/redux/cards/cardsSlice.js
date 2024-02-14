/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { addCard, delCard, fetchCardsByColumnId, updateCard } from './operations';

const initialState = {
	items: {}, // было[]
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
		updateStateAfterDeleteColumn: (state, { payload }) => {
			const { id } = payload;
			const { [id]: deletedColumn, ...restColumns } = state.items;
			state.items = restColumns;
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
				const { columnId, data } = payload;
				state.items[columnId] = data;

				// for (let i = 0; i < payload.length; i++) {
				// 	for (let k = 0; k < state.items.length; k++) {
				// 		if (k !== i) {
				// 			if (payload[i]._id === state.items[k]._id) state.items[k] = '';
				// 		}
				// 	}
				// }
				// for (let i = 0; i < payload.length; i++) {
				// 	if (state.items[i] === '') continue;
				// 	else state.items.push(payload[i]);
				// }
			})
			.addCase(fetchCardsByColumnId.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
				state.createCardModal = true;
			})
			.addCase(addCard.fulfilled, (state, { payload }) => {
				state.error = null;
				state.createCardModal = false;
				const { columnId } = payload;
				state.items[columnId].push(payload);

				// state.items = [...state.items, payload];
			})
			.addCase(addCard.rejected, (state, { payload }) => {
				state.error = payload;
			})
			.addCase(delCard.fulfilled, (state, { payload }) => {
				state.error = null;
				state.isLoading = false;
				const { cardId, columnId } = payload;
				state.items[columnId] = state.items[columnId].filter(item => item._id !== cardId);

				// state.items = state.items.map(item => {
				// 	if (item._id === payload) return payload;
				// 	return item;
				// });
			})
			.addCase(delCard.rejected, (state, { payload }) => {
				state.error = payload;
				state.isLoading = false;
			})
			.addCase(updateCard.pending, (state, { payload }) => {
				state.error = null;
				state.isLoading = true;
			})
			.addCase(updateCard.fulfilled, (state, { payload }) => {
				state.error = null;
				state.createCardModal = false;
				state.isLoading = false;
				const { data, oldColumnId } = payload;
				const { columnId: newColumnId, _id } = data;
				if (oldColumnId !== newColumnId) {
					state.items[oldColumnId] = state.items[oldColumnId]?.filter(
						item => item._id !== _id
					);
					state.items[newColumnId].push(data);
				} else {
					state.items[newColumnId] = state.items[newColumnId].map(item => {
						if (item._id === _id) return data;
						return item;
					});
				}

				// state.items = state.items.map(item => {
				// 	if (item._id === payload._id) return payload;
				// 	return item;
				// });
			})
			.addCase(updateCard.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const cardsReducer = cardsSlice.reducer;

export const { resetError, updateStateAfterDeleteColumn } = cardsSlice.actions;
