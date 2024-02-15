/** @format */

import { createSlice } from '@reduxjs/toolkit';

import { sendHelpReq } from './operations';

const initialState = {
  needHelp: {
    isOpen: false,
    isLoading: false,
    error: null,
  },
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    resetError: state => {
      state.error = null;
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
      .addCase(sendHelpReq.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.needHelp.error = payload;
      });
  },
});

export const modalsReducer = modalsSlice.reducer;

export const { resetError } = modalsSlice.actions;
