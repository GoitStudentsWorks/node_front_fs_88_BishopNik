/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'components/Helpers';

export const sendHelpReq = createAsyncThunk(
  'modals/needHelp',
  async (todo, thunkAPI) => {
    try {
      const { email } = todo;
      const response = await axios.post('/help', { email, text: todo.comment });
      toastSuccess(response.data.message);
      return response.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);

// (get)/api/boards/ - get boards all (get)/api/boards/:boardId - get boards by id (post)/api/boards/ - add boards (put)/api/boards/:boardId - update boards by id (delete)/api/boards/:boardId - delete boards by id

export const createEditBoard = createAsyncThunk(
  'modals/createEditBoard',
  async (data, thunkAPI) => {
    try {
      const { icon, background } = data;
      const response = await axios.post('/boards', { name: data.title, icon  });
      toastSuccess(response.data.message);
      return response.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
