/** @format */

import { createSlice } from '@reduxjs/toolkit';

import { sendHelpReq } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
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
    openNeedHeplModal: (state, action) => {
      state.needHelp.isOpen = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendHelpReq.pending, state => {
        state.needHelp.isLoading = true;
        state.error = null;
      })
      .addCase(sendHelpReq.fulfilled, (state, { payload }) => {
        state.needHelp.isLoading = false;
        state.needHelp.error = null;
        state.needHelp.isOpen = false;
      })
      .addCase(sendHelpReq.rejected, (state, { error }) => {
        state.isLoading = false;
      });
  },
});

export const modalsReducer = modalsSlice.reducer;

export const { resetError } = modalsSlice.actions;
