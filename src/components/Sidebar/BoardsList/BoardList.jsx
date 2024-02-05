/** @format */

import React, { useEffect } from 'react';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';
import { useDispatch } from 'react-redux';
import { fetchAllBoards } from 'redux/boards/operations';
import { useAuth } from 'hooks';

export const BoardsList = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		(fetchAllBoards())
	}, [dispatch])
	const { allBoards } = useAuth()
	return (
		<>
			<ListContainer>
				{allBoards.map(({ _id: id, name }) => (
					<BoardItem key={id} boardId={id} nameBoard={name} />
					
				))}
			</ListContainer>
		</>
	);
};
