/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllBoards = createAsyncThunk(
  'boards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/boards');
      console.log(response);
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getBoardById = createAsyncThunk(
  'boards/:boardName',
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get(`/boards/${boardId}`);
      // console.log(response)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (newBoard, thunkAPI) => {
    try {
      const response = await axios.post('/boards', newBoard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPutBoard = createAsyncThunk(
  'boards/fetchPut',
  async ({ _id, name, gender, email, phone }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/boards/${_id}`, {});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDelBoard = createAsyncThunk(
  'boards/fetchDel',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/boards/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
