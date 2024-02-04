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

export const BoardItem = () => {
  return (
    <BoardContainer>
      <BoardNameContainer>
        <BoardIcon />
        <BoardText>board name</BoardText>
      </BoardNameContainer>
      <IconsContainer>
        <EditIcon name="edit" />
        <DelIcon name="delete" />
      </IconsContainer>
      <BoardLine />
    </BoardContainer>
  );
};
