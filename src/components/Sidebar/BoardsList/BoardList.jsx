/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';

export const BoardsList = () => {
	const { board } = useParams(null);
	return (
		<>
			<ListContainer>
				{/* -----Here map---- */}
				<BoardItem idBoard={board} />
				<BoardItem idBoard={'00000'} />
				<BoardItem idBoard={'33255'} />
			</ListContainer>
		</>
	);
};
