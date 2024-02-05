/** @format */

import React from 'react';
import { TitleBoard } from './Board.styled';

const Board = ({ titleBoard }) => {
	return (
		<>
			<TitleBoard>Board: {titleBoard}</TitleBoard>
		</>
	);
};

export default Board;
