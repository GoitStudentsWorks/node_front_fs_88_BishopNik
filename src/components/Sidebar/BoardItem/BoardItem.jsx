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
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delBoard, getBoardById } from 'redux/boards/operations';
import { updateStateAfterDeleteBoard } from 'redux/columns/columnsSlice';
import { setActiveBoard } from 'redux/boards/boardsSlice';
import { updateStateAfterDeleteColumn } from 'redux/cards/cardsSlice';
import { StyleSheetManager } from 'styled-components';
import { useBoards, useColumns } from 'hooks';
import { MainContext } from 'components/Helpers';

export const BoardItem = ({ nameBoard, boardId }) => {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const { board } = useParams();
	const { statusLoading } = useBoards();
	const { allColumns } = useColumns();
	const { setIsOpenAddBoard, setBoardEdit, setDeleted } = useContext(MainContext);

	const getById = boardId => {
		dispatch(getBoardById(boardId));
		dispatch(setActiveBoard(boardId));
	};

	const handlerEditBoard = boardId => {
		if (statusLoading) return;
		setIsOpenAddBoard(true);
		setBoardEdit(boardId);
	};

	const handlerDelBoard = boardId => {
		if (statusLoading) return;
		// dispatch(delBoard(boardId));
		const deletedColumns = allColumns.filter(column => column.boardId === boardId);
		deletedColumns.forEach(column => {
			dispatch(updateStateAfterDeleteColumn({ id: column._id }));
		});

		dispatch(delBoard(boardId)).then(() => {
			dispatch(updateStateAfterDeleteBoard({ id: boardId }));
			setDeleted(true);
		});
	};

	const status = board === boardId;

	return (
		<Link
			to={`/todos/${boardId}`}
			onClick={() => getById(boardId)}
			style={{ textDecoration: 'none' }}
		>
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
							onClick={() => handlerEditBoard(boardId)}
						/>
						<DelIcon
							name='delete'
							type='button'
							onClick={() => handlerDelBoard(boardId)}
						/>
					</IconsContainer>

					<BoardLine active={status} />
				</BoardContainer>
			</StyleSheetManager>
		</Link>
	);
};
