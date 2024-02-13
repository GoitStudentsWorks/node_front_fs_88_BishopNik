/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastError, toastSuccess } from 'components/Helpers';

export const fetchColumnsByIdBoards = createAsyncThunk(
  'column/fetchColumns',
  async (columnId, thunkAPI) => {
    try {
      const res = await axios.get(`/column/${columnId}`);
      return res.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
export const addColumn = createAsyncThunk(
  'column/addColum',
  async (newColum, thunkAPI) => {
    try {
      const res = await axios.post('/column', newColum);
      toastSuccess(`Column has been created`);
      return res.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
export const delColumn = createAsyncThunk(
  'column/delColumn',
  async (columnId, thunkAPI) => {
    try {
      await axios.delete(`/column/${columnId}`);
      toastSuccess('Successful removal');
      return columnId;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
export const updateColumn = createAsyncThunk(
  'column/updateColumn',
  async (updColumn, thunkAPI) => {
    try {
      const { id, ...rest } = updColumn;
      const res = await axios.put(`/column/${id}`, rest);
      return res.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
