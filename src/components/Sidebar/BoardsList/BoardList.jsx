/** @format */

import React, { useRef } from 'react';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';
import { useBoards } from 'hooks';

export const BoardsList = () => {
	const { allBoards } = useBoards();

	const listRef = useRef(null);

	const handleScroll = event => {
		const delta = event.deltaY;
		listRef.current.scrollTop += delta;
	};

	return (
		<>
			<ListContainer onWheel={handleScroll} ref={listRef}>
				{allBoards?.map(({ _id: id, name }) => (
					<BoardItem key={id} boardId={id} nameBoard={name} />
				))}
			</ListContainer>
		</>
	);
};
