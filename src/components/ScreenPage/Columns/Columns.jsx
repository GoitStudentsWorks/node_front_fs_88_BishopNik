/** @format */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { Column } from 'components/Column/Column';
import { Styled } from './Columns.styled';
import { useColomns } from 'hooks';

export const Columns = ({ board }) => {
	const dispatch = useDispatch();

import { useColumns } from 'hooks';

export const Columns = ({ board }) => {
	const dispatch = useDispatch();
	const { allColumns } = useColumns();

	useEffect(() => {
		dispatch(fetchColumnsByIdBoards(board));
	}, [dispatch, board]);
	const { aLLColomns } = useColomns()
	return (
		<Styled>
			{allColumns.map(item => (
				<Column name={item.name} id={item._id} key={item._id} column={item} />
			))}
		</Styled>
	);
};
