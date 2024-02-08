/** @format */

import React, { useContext } from 'react';
import { BtnAdd, Text, IconContainer, BtnIcon } from './Btn_CreateNew.styled';
import { useDispatch } from 'react-redux';
import { boardsSlice } from 'redux/boards/boardsSlice';
import { MainContext } from 'components/Helpers';

export const BtnNewBoard = () => {
	const dispatch = useDispatch();
	const { setIsOpenSidebar } = useContext(MainContext);

	return (
		<>
			<BtnAdd>
				<Text>Create a new board</Text>
				<IconContainer
					onClick={() => {
						setIsOpenSidebar(true);
						dispatch(boardsSlice.actions.openCreateEditBoardModal({ isOpen: true }));
					}}
				>
					<BtnIcon name='add-board' />
				</IconContainer>
			</BtnAdd>
		</>
	);
};
