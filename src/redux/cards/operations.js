/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastError, toastSuccess } from 'components/Helpers';

export const fetchCardsByColumnId = createAsyncThunk(
	'card/fetchCards',
	async (columnId, thunkAPI) => {
		try {
			const { data } = await axios.get(`/card/${columnId}`);
			return { columnId, data };
		} catch ({ response }) {
			toastError(response?.data?.message);
			return thunkAPI.rejectWithValue(response?.data?.message);
		}
	}
);

export const addCard = createAsyncThunk('card/addCard', async (newCard, thunkAPI) => {
	try {
		const res = await axios.post('/card', newCard);
		toastSuccess(`Card has been created`);
		return res.data;
	} catch ({ response }) {
		toastError(response?.data?.message);
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const delCard = createAsyncThunk(
	'card/delCard',
	async ({ id: cardId, _id: columnId }, thunkAPI) => {
		try {
			await axios.delete(`/card/${cardId}`);
			toastSuccess('Successful removal');
			return { cardId, columnId };
		} catch ({ response }) {
			toastError(response?.data?.message);
			return thunkAPI.rejectWithValue(response?.data?.message);
		}
	}
);

export const updateCard = createAsyncThunk(
	'card/updateCard',
	async ({ id, columnId, name, oldColumnId }, thunkAPI) => {
		try {
			const { data } = await axios.patch(`/card/${id}`, { columnId, name });
			toastSuccess('Update Card');
			return { data, oldColumnId };
		} catch ({ response }) {
			toastError(response?.data?.message);
			return thunkAPI.rejectWithValue(response?.data?.message);
		}
	}
);
