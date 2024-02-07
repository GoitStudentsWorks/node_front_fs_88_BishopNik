/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllTodos = createAsyncThunk('todos/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/api/todos');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const sendHelpReq = createAsyncThunk('modals/needHelp', async (todo, thunkAPI) => {
	try {
		const response = await axios.post('/api/todos', todo);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const fetchPutTodo = createAsyncThunk(
	'todos/fetchPut',
	async ({ _id, name, gender, email, phone }, thunkAPI) => {
		try {
			const response = await axios.put(`/api/todos/${_id}`, {});
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchDelTodo = createAsyncThunk('todos/fetchDel', async (id, thunkAPI) => {
	try {
		const response = await axios.delete(`/api/todos/${id}`);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
