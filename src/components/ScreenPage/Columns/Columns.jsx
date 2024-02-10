/** @format */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchColumnsByIdBoards } from 'redux/columns/operations';
import { Column } from 'components/Column/Column';
import { Styled } from './Columns.styled';
import { useColomns } from 'hooks';

export const Columns = ({ board }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchColumnsByIdBoards(board));
	}, [dispatch, board]);
	const { aLLColomns } = useColomns()
	return (
		<Styled>
			{aLLColomns.map(({ _id: id, name }) => (
				<Column name={name} id={id} key={id} />
			))}
		</Styled>
	);
};
