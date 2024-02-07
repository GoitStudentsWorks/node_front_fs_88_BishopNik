/** @format */

import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllBoards,
  addBoard,
  fetchPutBoard,
  fetchDelBoard,
} from './operations';

const initialState = {
  items: [
    { _id: `11`, name: `Main board` },
    { _id: `22`, name: `App board` },
    { _id: `33`, name: `Index board` },
    { _id: `44`, name: ` board` },
  ],
  isLoading: false,
	createEditBoardModal: {
		isOpen: false,
		boardId: null,
	},
  error: null,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    resetError: state => {
      state.error = null;
    },
    openCreateEditBoardModal: (state, action) => {
      state.createEditBoardModal.isOpen = action.payload.isOpen;
      state.createEditBoardModal.boardId = action.payload.boardId;
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
      .addCase(addBoard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBoard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addBoard.rejected, (state, { error }) => {
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
          if (item.__id === payload.__id) return payload;
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

