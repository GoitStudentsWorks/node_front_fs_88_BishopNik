import React from 'react';
import { BoardItem } from '../BoardItem/BoardItem';
import { ListContainer } from './BoardList.styled';

export const BoardsList = () => {
  return (
    <>
      <ListContainer>
        <BoardItem />
      </ListContainer>
    </>
  );
};
