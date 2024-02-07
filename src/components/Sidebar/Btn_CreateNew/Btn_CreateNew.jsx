/** @format */

import React from 'react';
import { BtnAdd, Text, IconContainer, BtnIcon } from './Btn_CreateNew.styled';
import { useDispatch } from 'react-redux';
import  {boardsSlice} from 'redux/boards/boardsSlice';

export const BtnNewBoard = () => {
  const dispatch = useDispatch();

  return (
    <>
      <BtnAdd>
        <Text>Create a new board</Text>
        <IconContainer
          onClick={() => {
            dispatch(boardsSlice.actions.openCreateEditBoardModal({isOpen: true}));
          }}
        >
          <BtnIcon name="add-board" />
        </IconContainer>
      </BtnAdd>
    </>
  );
};
