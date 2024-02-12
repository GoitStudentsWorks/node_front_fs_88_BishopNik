/** @format */

import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { Column } from 'components/Column';
import { Styled } from './Columns.styled';
import { useColumns } from 'hooks';

export const Columns = ({ board, children }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();

	useEffect(() => {
		dispatch(fetchColumnsByIdBoards(board));
	}, [dispatch, board]);

	const memoizedColumns = useMemo(() => allColumns, [allColumns]);

	return (
		<Styled>
			{memoizedColumns.length > 0 &&
				memoizedColumns.map(item => <Column columnData={item} key={item._id} />)}
			{children}
		</Styled>
	);
};
