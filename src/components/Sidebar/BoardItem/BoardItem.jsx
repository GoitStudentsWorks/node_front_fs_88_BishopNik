/** @format */

import React from 'react';
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
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDelBoard, getBoardById } from 'redux/boards/operations';

export const BoardItem = ({ nameBoard, boardId }) => {
	const { board } = useParams();

	const dispatch = useDispatch();

	const getById = boardId => {
		dispatch(getBoardById(boardId));
	};

	const delBoard = boardId => {
		dispatch(fetchDelBoard(boardId));
	};

	return (
		<Link to={`/todos/${boardId}`} onClick={evt => getById(boardId)}>
			<BoardContainer active={boardId === board?.toString()}>
				<BoardNameContainer>
					<BoardIcon name='type-6' active={boardId === board?.toString()} />
					<BoardText active={boardId === board?.toString()}>{nameBoard}</BoardText>
				</BoardNameContainer>

				<IconsContainer active={boardId === board?.toString()}>
					<EditIcon
						name='edit'
						type='button'
						onClick={evt => console.log(`${nameBoard} edit`)}
					/>
					<DelIcon name='delete' type='button' onClick={() => delBoard(boardId)} />
				</IconsContainer>

				<BoardLine active={boardId === board?.toString()} />
			</BoardContainer>
		</Link>
	);
};
