/** @format */

import React, { useEffect, useRef } from 'react';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';
import { useDispatch } from 'react-redux';
import { fetchAllBoards } from 'redux/boards/operations';
import { useAuth } from 'hooks';

export const BoardsList = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllBoards());
	}, [dispatch]);


	const { allBoards } = useAuth();

	const listRef = useRef(null);

	const handleScroll = event => {
		const delta = event.deltaY;
		listRef.current.scrollTop += delta;
	};

	return (
		<>
			<ListContainer onWheel={handleScroll} ref={listRef}>
				{allBoards.map(({ _id: id, name }) => (
					<BoardItem key={id} boardId={id} nameBoard={name} />
				))}
			</ListContainer>
		</>
	);
};
