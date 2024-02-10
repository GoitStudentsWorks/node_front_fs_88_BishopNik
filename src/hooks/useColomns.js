/** @format */

import { useSelector } from 'react-redux';

import { columnsState, columnsLoading, columnsError } from 'redux/columns/selectors';

export const useColomns = () => {
	const aLLColomns = useSelector(columnsState);
	const statusColomn = useSelector(columnsLoading);
	const statusError = useSelector(columnsError);

	return {
		aLLColomns,
		statusColomn,
		statusError,
	};
};
