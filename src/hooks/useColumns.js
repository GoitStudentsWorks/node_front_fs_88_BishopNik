/** @format */

import { useSelector } from 'react-redux';

import { columnsState, columnsLoading, columnsError } from 'redux/columns/selectors';

export const useColumns = () => {
	const allColumns = useSelector(columnsState);
	const statusColumn = useSelector(columnsLoading);
	const statusError = useSelector(columnsError);

	return {
		allColumns,
		statusColumn,
		statusError,
	};
};
