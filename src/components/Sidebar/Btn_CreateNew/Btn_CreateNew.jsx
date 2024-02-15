/** @format */

import React, { useContext } from 'react';
import { BtnAdd, Text, IconContainer, BtnIcon } from './Btn_CreateNew.styled';
import { MainContext } from 'components/Helpers';

export const BtnNewBoard = () => {
	const { setIsOpenAddBoard } = useContext(MainContext);

	return (
		<>
			<BtnAdd>
				<Text>Create a new board</Text>
				<IconContainer
					onClick={() => {
						setIsOpenAddBoard(true);
					}}
				>
					<BtnIcon name='add-board' />
				</IconContainer>
			</BtnAdd>
		</>
	);
};
