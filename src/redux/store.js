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
import { authReducer } from './auth/authSlice';
import { boardsReducer } from './boards/boardsSlice';
import { modalsReducer } from './modals/modalSlice';
import { columnsReducer } from './columns/columnsSlice';
import { cardsReducer } from './cards/cardsSlice';

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

const tokenPersistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		auth: tokenPersistedReducer,
		filter: filterSlice,
		modals: modalsReducer,
		boards: boardsReducer,
		columns: columnsReducer,
		cards: cardsReducer,
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
