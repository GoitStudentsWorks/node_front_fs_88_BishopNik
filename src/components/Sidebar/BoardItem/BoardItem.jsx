/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import {
	BoardContainer,
	BoardNameContainer,
	IconsContainer,
	BoardIcon,
	BoardText,
	EditIcon,
	DelIcon,
	BoardLine,
} from './BoardItem.styled';

export const BoardItem = ({ idBoard }) => {
	const { board } = useParams(null);

	return (
		<BoardContainer active={board === idBoard}>
			<BoardNameContainer>
				<BoardIcon active={board === idBoard} name='type-6' />
				<BoardText active={board === idBoard}>board id: {idBoard}</BoardText>
			</BoardNameContainer>
			{board === idBoard && (
				<IconsContainer>
					<EditIcon name='edit' />
					<DelIcon name='delete' />
				</IconsContainer>
			)}
			<BoardLine active={board === idBoard} />
		</BoardContainer>
	);
};
