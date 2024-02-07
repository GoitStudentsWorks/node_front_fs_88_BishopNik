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


