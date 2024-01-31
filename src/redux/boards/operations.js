/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllBoards = createAsyncThunk('boards/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/api/boards');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const fetchPostBoard = createAsyncThunk('boards/fetchPost', async (board, thunkAPI) => {
	try {
		const response = await axios.post('/api/boards', board);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

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

export const fetchDelBoard = createAsyncThunk('boards/fetchDel', async (id, thunkAPI) => {
	try {
		const response = await axios.delete(`/api/boards/${id}`);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
