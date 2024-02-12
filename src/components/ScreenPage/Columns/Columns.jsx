/** @format */

import React, { useEffect } from 'react';
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

	return (
		<Styled>
			{allColumns.map(item => (
				<Column columnData={item} key={item._id} />
			))}
			{children}
		</Styled>
	);
};
