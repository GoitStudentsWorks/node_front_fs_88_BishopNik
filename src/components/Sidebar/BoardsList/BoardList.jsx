/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';
import { useBoards } from 'hooks';
import { sortByIDFirst } from 'components/Helpers';
import { useDispatch } from 'react-redux';
import { fetchAllBoards } from 'redux/boards/operations';

export const BoardsList = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAllBoards())
	}, [dispatch])
	const { allBoards } = useBoards();
	const { board } = useParams();
	const [sortedBoards, setSortedBoards] = useState([]);

	const listRef = useRef(null);

	const handleScroll = event => {
		const delta = event.deltaY;
		listRef.current.scrollTop += delta;
	};

	useEffect(() => {
		if (allBoards.length) setSortedBoards(sortByIDFirst(allBoards, board));
	}, [allBoards, board]);

	return (
		<>
			<ListContainer onWheel={handleScroll} ref={listRef}>
				{sortedBoards.map(({ _id: id, name }) => (
					<BoardItem key={id} boardId={id} nameBoard={name} />
				))}
			</ListContainer>
		</>
	);
};
