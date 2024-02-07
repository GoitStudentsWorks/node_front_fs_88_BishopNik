/** @format */

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import filterSlice from './filter/filterSlice';
import { todosReducer } from './todos/todosSlice';
import { authReducer } from './auth/authSlice';
import { boardsReducer } from './boards/boardsSlice';
import { modalsReducer } from './modals/modalSlice';

const persistConfig = {
	key: 'token',
	storage,
	whitelist: ['token'],
};

const tokenPersistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		boards: boardsReducer,
		todos: todosReducer,
		auth: tokenPersistedReducer,
		modals: modalsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
