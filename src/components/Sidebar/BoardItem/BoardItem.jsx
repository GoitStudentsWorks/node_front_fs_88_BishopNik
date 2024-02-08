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
import { Link, useNavigate, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDelBoard, getBoardById } from 'redux/boards/operations';

export const BoardItem = ({ nameBoard, boardId }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { board } = useParams();
  
  const getById = boardId => {
    dispatch(getBoardById(boardId));
  };
  
  const delBoard = boardId => {
    dispatch(fetchDelBoard(boardId));
     return navigate('/')
  };

	return (
		<Link to={`/todos/${boardId}`} onClick={() => getById(boardId)}>
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
