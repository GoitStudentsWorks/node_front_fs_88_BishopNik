/** @format */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusError } from 'redux/todos/selectors';
import { resetError } from 'redux/todos/todosSlice';
import { toastError } from 'components/Helpers';

function MainTodosPage() {
	const error = useSelector(statusError);
	const dispatch = useDispatch();

	useEffect(() => {
		if (error !== null) toastError(`Error loading data: ${error}`);
		dispatch(resetError());
	}, [dispatch, error]);

	return (
		<>
			<h1>Hello Developer (Main page Todos)</h1>
		</>
	);
}

export default MainTodosPage;
