/** @format */

import React, { useState } from 'react';
import { BtnAdd, Text, IconContainer, BtnIcon } from './Btn_CreateNew.styled';
// import { useNavigate } from 'react-router-dom';
import { ModalCreateNewBoard } from '../../Modal/createNewBoard/ModalCreateNewBoard';

export const BtnNewBoard = () => {
	// const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

  // const changeBoard = newBoardValue => {
  // 	navigate(`/todos/${newBoardValue}`);
  // };

  return (
    <>
      <BtnAdd onClick={() => setIsOpen(true)}>
        <Text>Create a new board</Text>
        <IconContainer>
          <BtnIcon name="add-board" />
        </IconContainer>
      </BtnAdd>
      <ModalCreateNewBoard isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
