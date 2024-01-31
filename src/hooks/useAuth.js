/** @format */

import { useSelector } from 'react-redux';
import {
	selectUser,
	selectIsLoggedIn,
	selectIsRefreshing,
	statusUserError,
} from 'redux/auth/selectors';

export const useAuth = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const isRefreshing = useSelector(selectIsRefreshing);
	const user = useSelector(selectUser);
	const errorUser = useSelector(statusUserError);

	return {
		isLoggedIn,
		isRefreshing,
		user,
		errorUser,
	};
};
