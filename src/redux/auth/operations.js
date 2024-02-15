/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'components/Helpers';

axios.defaults.baseURL = `https://todos-api-i1vi.onrender.com/api`;
// axios.defaults.baseURL = `http://localhost:4000/api`;

// Utility to add JWT
const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
	try {
		const res = await axios.post('auth/register', credentials);
		setAuthHeader(res.data.token);
		toastSuccess(`Registration successful`);
		return res.data;
	} catch ({ response }) {
		return toastError(response?.data?.message);
	}
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
	try {
		const res = await axios.post('/auth/login', credentials);
		// After successful login, add the token to the HTTP header
		setAuthHeader(res.data.token);
		toastSuccess(`Login successful`);
		return res.data;
	} catch ({ response }) {
		toastError(response?.data?.message);
		return thunkAPI.rejectWithValue(response);
	}
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await axios.post('/auth/logout');
		toastSuccess(`Logout successful`);
		clearAuthHeader();
		window.location.reload();
	} catch ({ response }) {
		return toastError(response?.data?.message);
	}
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
	// Reading the token from the state via getState()
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;

	if (persistedToken === null) {
		// If there is no token, exit without performing any request
		return thunkAPI.rejectWithValue(`Not valid token`);
	}

	try {
		// If there is a token, add it to the HTTP header and perform the request
		setAuthHeader(persistedToken);
		const res = await axios.get('/auth/current');
		return res.data;
	} catch ({ response }) {
		toastError(`Please log in`);
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const changeTheme = createAsyncThunk('auth/theme', async (thema, thunkAPI) => {
	try {
		const res = await axios.patch('users/thema', { thema });
		return res.data;
	} catch ({ response }) {
		toastError(response?.data?.message);
		return thunkAPI.rejectWithValue(response?.data?.message);
	}
});

export const changeUserInfo = createAsyncThunk(
	'user/update',
	async ({ avatarURL, email, name, password }, thunkAPI) => {
		try {
			const formData = new FormData();
			formData.append('avatarURL', avatarURL);
			formData.append(`email`, email);
			formData.append('password', password);
			formData.append('name', name);
			if (avatarURL) {
				const res = await axios.patch(`users/update-user`, formData);
				toastSuccess(`Success update`);
				return res.data;
			} else {
				const res = await axios.patch(`users/update-user`, {
					email,
					password,
					name,
				});
				setAuthHeader(res.data.token);
				toastSuccess(`Success update`);
				return res.data;
			}
		} catch ({ response }) {
			toastError(response?.data?.message);
			return thunkAPI.rejectWithValue(response?.data?.message);
		}
	}
);
