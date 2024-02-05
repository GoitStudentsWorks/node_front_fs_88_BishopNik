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
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDelBoard, getBoardById } from 'redux/boards/operations';

export const BoardItem = ({ nameBoard, boardId }) => {
	const dispatch = useDispatch()
	const getById = (boardId) => {
	dispatch(getBoardById(boardId))
	}
	const delBoard = (boardId) => {
		dispatch(fetchDelBoard(boardId))
	}
	return (
		<BoardContainer >
			<Link to={`/todos/${boardId}`} onClick={evt =>getById(boardId)}>
				<BoardNameContainer>
				<BoardIcon  name='type-6' />
				<BoardText >board name: {nameBoard}</BoardText>
			</BoardNameContainer></Link>
			<IconsContainer>
				<EditIcon name='edit' type="button" onClick={evt => console.log(`${nameBoard} edit`)}/>
					<DelIcon name='delete' type="button" onClick={() => delBoard(boardId)}/>
				</IconsContainer>
		
			<BoardLine  />
		</BoardContainer>
	);
};
