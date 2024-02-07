/** @format */

import { createSlice } from '@reduxjs/toolkit';

import { sendHelpReq, createEditBoard } from './operations';

const initialState = {
  needHelp: {
    isOpen: false,
    isLoading: false,
    error: null,
  },
  createEditBoard: {
    isOpen: false,
    isLoading: false,
    error: null,
    data: null,
  },
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    resetError: state => {
      state.error = null;
    },
    openNeedHeplModal: (state, action) => {
      state.needHelp.isOpen = action.payload;
    },
    openCreateEditBoardModal: (state, action) => {
      state.createEditBoard.isOpen = action.payload.isOpen;
      state.createEditBoard.data = action.payload.data;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendHelpReq.pending, state => {
        state.needHelp.isLoading = true;
        state.needHelp.error = null;
      })
      .addCase(sendHelpReq.fulfilled, (state, { payload }) => {
        state.needHelp.isLoading = false;
        state.needHelp.error = null;
        state.needHelp.isOpen = false;
      })
      .addCase(sendHelpReq.rejected, (state, { error }) => {
        state.isLoading = false;
      })

      .addCase(createEditBoard.pending, state => {
        state.createEditBoard.isLoading = true;
        state.createEditBoard.error = null;
      })
      .addCase(createEditBoard.fulfilled, (state, { payload }) => {
        state.createEditBoard.isLoading = false;
        state.createEditBoard.error = null;
        state.createEditBoard.isOpen = false;
      })
      .addCase(createEditBoard.rejected, (state, { error }) => {
        state.createEditBoard.isLoading = false;
      });
  },
});

export const modalsReducer = modalsSlice.reducer;

export const { resetError } = modalsSlice.actions;
