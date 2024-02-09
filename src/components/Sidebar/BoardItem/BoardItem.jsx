/** @format */

import React, { useContext } from 'react';
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
// import { useAuth } from 'hooks';
import { MainContext } from 'components/Helpers';

export const BoardItem = ({ nameBoard, boardId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { board } = useParams();
	// const { allBoards } = useAuth();
	const { setIsOpenAddBoard, setBoardEdit } = useContext(MainContext);

	const getById = boardId => {
		dispatch(getBoardById(boardId));
	};

	const editBoard = boardId => {
		setIsOpenAddBoard(true);
		setBoardEdit(boardId);
	};

	const delBoard = boardId => {
		dispatch(fetchDelBoard(boardId));
		navigate(`/todos`);
	};

	const status = board === boardId;

	return (
		<Link to={`/todos/${boardId}`} onClick={() => getById(boardId)}>
			<StyleSheetManager shouldForwardProp={prop => prop !== 'active'}>
				<BoardContainer active={status}>
					<BoardNameContainer>
						<BoardIcon name='type-6' active={status} />
						<BoardText active={status}>{nameBoard}</BoardText>
					</BoardNameContainer>

					<IconsContainer active={status}>
						<EditIcon name='edit' type='button' onClick={() => editBoard(boardId)} />
						<DelIcon name='delete' type='button' onClick={() => delBoard(boardId)} />
					</IconsContainer>

					<BoardLine active={status} />
				</BoardContainer>
			</StyleSheetManager>
		</Link>
	);
};
