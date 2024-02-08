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
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDelBoard, getBoardById } from 'redux/boards/operations';
import { StyleSheetManager } from 'styled-components';

export const BoardItem = ({ nameBoard, boardId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { board } = useParams();

	const getById = boardId => {
		dispatch(getBoardById(boardId));
	};

	const delBoard = boardId => {
		dispatch(fetchDelBoard(boardId));
		navigate('/');
	};

	const status = Number(board) === boardId;

	return (
		<Link to={`/todos/${boardId}`} onClick={() => getById(boardId)}>
			<StyleSheetManager shouldForwardProp={prop => prop !== 'active'}>
				<BoardContainer active={status}>
					<BoardNameContainer>
						<BoardIcon name='type-6' active={status} />
						<BoardText active={status}>{nameBoard}</BoardText>
					</BoardNameContainer>

					<IconsContainer active={status}>
						<EditIcon
							name='edit'
							type='button'
							onClick={evt => console.log(`${nameBoard} edit`)}
						/>
						<DelIcon name='delete' type='button' onClick={() => delBoard(boardId)} />
					</IconsContainer>

					<BoardLine active={status} />
				</BoardContainer>
			</StyleSheetManager>
		</Link>
	);
};
