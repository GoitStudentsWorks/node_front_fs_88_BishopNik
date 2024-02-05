/** @format */

import React from 'react';
import { BtnAdd, Text, IconContainer, BtnIcon } from './Btn_CreateNew.styled';
import { useDispatch } from 'react-redux';
import { addBoard } from 'redux/boards/operations';

export const BtnNewBoard = () => {
	const dispatch = useDispatch()
	const newBoard = (newBoard) => {
		dispatch(addBoard(newBoard))
}
	return (
		<BtnAdd
			onClick={() => newBoard({ name: `${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`, icon:`href` })}
		>
			<Text>Create a new board</Text>
			<IconContainer>
				<BtnIcon name='add-board' />
			</IconContainer>
		</BtnAdd>
	);
};
