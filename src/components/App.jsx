/** @format */

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import SharedLayout from './SharedLayout';
import Loader from 'components/Loader';
import { resetError } from 'redux/auth/authSlice';
import { toastError } from 'components/Helpers';

const StartPage = lazy(() => import('pages/StartPage'));
const MainTodosPage = lazy(() => import('pages/MainTodosPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UnknownPage = lazy(() => import('pages/UnknownPage'));

function App() {
	const dispatch = useDispatch();
	const { isRefreshing, errorUser } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	useEffect(() => {
		if (errorUser !== null && errorUser !== 'Unable to fetch user') toastError(`${errorUser}`);
		dispatch(resetError());
	}, [dispatch, errorUser]);

	return isRefreshing ? (
		<Loader />
	) : (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					{/* <Route
						path='todos'
						element={<PrivateRoute redirectTo='/login' component={<MainTodosPage />} />}
					/> */}
					<Route path='todos' element={<MainTodosPage />} />

					<Route index element={<StartPage />} />
					<Route
						path='register'
						element={
							<RestrictedRoute redirectTo='/todos' component={<RegisterPage />} />
						}
					/>
					<Route
						path='login'
						element={<RestrictedRoute redirectTo='/todos' component={<LoginPage />} />}
					/>
					<Route path='*' element={<UnknownPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
