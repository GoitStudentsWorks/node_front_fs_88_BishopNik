/** @format */

import React from 'react';
import { BtnAdd, Text, IconContainer, BtnIcon } from './Btn_CreateNew.styled';
import { useNavigate } from 'react-router-dom';

export const BtnNewBoard = () => {
	const navigate = useNavigate();

	const changeBoard = newBoardValue => {
		navigate(`/todos/${newBoardValue}`);
	};

	return (
		<BtnAdd
			onClick={() => {
				changeBoard(Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000);
			}}
		>
			<Text>Create a new board</Text>
			<IconContainer>
				<BtnIcon name='add-board' />
			</IconContainer>
		</BtnAdd>
	);
};
