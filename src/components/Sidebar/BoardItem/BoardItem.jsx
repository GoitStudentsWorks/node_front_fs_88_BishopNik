/** @format */

import React, { useContext, useEffect } from 'react';
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
import { delBoard, getBoardById } from 'redux/boards/operations';
import { StyleSheetManager } from 'styled-components';
import { useBoards } from 'hooks';
import { MainContext } from 'components/Helpers';

export const BoardItem = ({ nameBoard, boardId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { board } = useParams();
  const { allBoards } = useBoards();
  const { setIsOpenAddBoard, setBoardEdit } = useContext(MainContext);

  useEffect(() => {
    navigate(`/todos/${allBoards[0]._id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allBoards]);
  const getById = boardId => {
    dispatch(getBoardById(boardId));
  };
  const handlerEditBoard = boardId => {
    setIsOpenAddBoard(true);
    setBoardEdit(boardId);
  };
  const handlerDelBoard = boardId => {
    dispatch(delBoard(boardId));
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
            <BoardIcon name="type-6" active={status} />
            <BoardText active={status}>{nameBoard}</BoardText>
          </BoardNameContainer>

          <IconsContainer active={status}>
            <EditIcon
              name="edit"
              type="button"
              onClick={() => handlerEditBoard(boardId)}
            />
            <DelIcon
              name="delete"
              type="button"
              onClick={() => handlerDelBoard(boardId)}
            />
          </IconsContainer>

          <BoardLine active={status} />
        </BoardContainer>
      </StyleSheetManager>
    </Link>
  );
};
