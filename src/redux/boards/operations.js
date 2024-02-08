/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'components/Helpers';

export const fetchAllBoards = createAsyncThunk('boards/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/boards');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
export const getBoardById = createAsyncThunk('boards/:boardName', async (boardId, thunkAPI) => {
	try {
		const response = await axios.get(`/boards/${boardId}`);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const addBoard = createAsyncThunk('boards/addBoard', async (newBoard, thunkAPI) => {
	try {
		const response = await axios.post('/boards', newBoard);
		toastSuccess('Board has been created');
		return response.data;
	} catch ({ response }) {
		toastError(response?.data?.message);

		return thunkAPI.rejectWithValue(response?.data.message);
	}
});

export const fetchPutBoard = createAsyncThunk(
	'boards/fetchPut',
	async ({ _id, name, icon, background }, thunkAPI) => {
		try {
			const response = await axios.put(`/boards/${_id}`, {});
			console.log(response);
			// return response.data;
		} catch ({ response }) {
			toastError(response?.data?.message);
			return thunkAPI.rejectWithValue(response?.data?.message);
		}
	}
);

export const fetchDelBoard = createAsyncThunk('boards/fetchDel', async (id, thunkAPI) => {
	try {
		const response = await axios.delete(`/boards/${id}`);
		toastSuccess(`Successful removal`);
		return response.data;
	} catch ({ response }) {
		toastError(response?.data?.message);
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});
