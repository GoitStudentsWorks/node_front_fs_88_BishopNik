/** @format */

import { createSlice } from '@reduxjs/toolkit';

import {
  sendHelpReq,
} from './operations';

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
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendHelpReq.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, payload];
      })
      .addCase(sendHelpReq.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export const modalsReducer = modalsSlice.reducer;

export const { resetError } = modalsSlice.actions;
