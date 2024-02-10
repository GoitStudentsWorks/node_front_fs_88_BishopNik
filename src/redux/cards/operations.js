import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastError, toastSuccess } from 'components/Helpers';

export const fetchCardsByColumnId = createAsyncThunk(
  'card/fetchCards',
  async (columnId, thunkAPI) => {
    try {
      const res = await axios.get('/card', columnId);
      return res.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
export const addCard = createAsyncThunk(
  'card/addCard',
  async (newCard, thunkAPI) => {
    try {
      const res = await axios.post('/card', newCard);
      toastSuccess(`Card has been created`);
      return res.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
export const delCard = createAsyncThunk(
  'card/delCard',
  async (cardId, thunkAPI) => {
    try {
      const res = await axios.delete(`/card/${cardId}`);
      toastSuccess('Successful removal');
      return cardId;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
export const updateCard = createAsyncThunk(
  'card/updateCard',
  async (updCard, thunkAPI) => {
    try {
      const { id, ...rest } = updCard;
      const res = await axios.put(`/card/${id}`, rest);
      toastSuccess('Update Card');
      return res.data;
    } catch ({ response }) {
      toastError(response?.data?.message);
      return thunkAPI.rejectWithValue(response?.data?.message);
    }
  }
);
