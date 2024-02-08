/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { columnsState } from 'redux/columns/selectors';

export const Columns = ({ board }) => {
	const dispatch = useDispatch();

	const allColumns = useSelector(columnsState);
	useEffect(() => {
		dispatch(fetchColumnsByIdBoards(board));
	}, [dispatch, board]);

	return (
		<>
			{allColumns.map(({ _id: id, name }) => (
				<li key={id}>{name}</li>
			))}
		</>
	);
};
