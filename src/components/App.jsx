/** @format */

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Routes, Route} from 'react-router-dom';
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
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route
					index
					element={<RestrictedRoute component={StartPage} redirectTo='/todos' />}
				/>
				<Route
					path='register'
					element={<RestrictedRoute component={RegisterPage} redirectTo='/todos' />}
				/>
				<Route
					path='login'
					element={<RestrictedRoute component={LoginPage} redirectTo='/todos' />}
				/>
				<Route
					path='/todos'
					element={<PrivateRoute component={MainTodosPage} redirectTo='/' />}
				>
					<Route path='/todos/:board' element={<MainTodosPage />} />
				</Route>
				
				<Route path='*' element={<UnknownPage />} />
			</Route>
		</Routes>
	);
}

export default App;
