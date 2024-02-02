/** @format */

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks';
import { RestrictedRoute } from 'components/RestrictedRoute';
import SharedLayout from './SharedLayout';
import Loader from 'components/Loader';
import { PrivateRoute } from 'components/PrivateRoute';

const StartPage = lazy(() => import('pages/StartPage'));
const MainTodosPage = lazy(() => import('pages/MainTodosPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UnknownPage = lazy(() => import('pages/UnknownPage'));

function App() {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);


	return isRefreshing ? (
		<Loader />
	) : (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route
						path='todos'
						element={<PrivateRoute redirectTo='/login' component={<MainTodosPage />} />}
					/>
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
