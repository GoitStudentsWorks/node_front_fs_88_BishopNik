import React from 'react';
import { BtnAdd, Text, IconContainer, BtnIcon } from './Btn_CreateNew.styled';

export const BtnNewBoard = () => {
  return (
    <BtnAdd>
      <Text>Create a new board</Text>
      <IconContainer>
        <BtnIcon name="add-board" />
      </IconContainer>
    </BtnAdd>
  );
};
