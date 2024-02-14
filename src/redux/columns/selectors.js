/** @format */

import { createSelector } from '@reduxjs/toolkit';

export const columnsState = state => state.columns.items;

export const columnsLoading = state => state.columns.isLoading;

export const columnsError = state => state.columns.error;

export const modalData = state => state.columns.createEditColumnModal;

// export const editModalOpen = state => state.columns.editColumnModalOpen;

// export const createModalOpen = state => state.columns.createColumnModalOpen;
