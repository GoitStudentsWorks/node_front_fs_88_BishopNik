/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';
import { useBoards } from 'hooks';
import { sortByIDFirst } from 'components/Helpers';

export const BoardsList = () => {
	const navigate = useNavigate();
	const { allBoards } = useBoards();
	const { board } = useParams();
	const [sortedBoards, setSortedBoards] = useState([]);
	const listRef = useRef(null);

	useEffect(() => {
		if (allBoards.length >= 1) {
			setSortedBoards(sortByIDFirst(allBoards, board));
		} else {
			navigate(`/todos`);
		}
	}, [allBoards, board, navigate]);

	const handleScroll = event => {
		const delta = event.deltaY;
		listRef.current.scrollTop += delta;
	};

	return (
		<>
			<ListContainer onWheel={handleScroll} ref={listRef}>
				{allBoards.length >= 1 &&
					sortedBoards.map(({ _id: id, name }) => (
						<BoardItem key={id} boardId={id} nameBoard={name} />
					))}
			</ListContainer>
		</>
	);
};
