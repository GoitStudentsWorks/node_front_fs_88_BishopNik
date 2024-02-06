/** @format */

import React, { useState } from 'react';
import { BtnAdd, Text, IconContainer, BtnIcon } from './Btn_CreateNew.styled';
import { useDispatch } from 'react-redux';
import { addBoard } from 'redux/boards/operations';
import { ModalCreateNewBoard } from '../../Modal/createNewBoard/ModalCreateNewBoard';

export const BtnNewBoard = () => {
	
  const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);


  const newBoard = (newBoard) => {
		dispatch(addBoard(newBoard))
  }
  
		 // bilo 	onClick={() => newBoard({ name: `${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`, icon:`href` })}
     

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