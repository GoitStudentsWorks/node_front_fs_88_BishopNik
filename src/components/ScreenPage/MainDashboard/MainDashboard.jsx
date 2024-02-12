/** @format */

import React, { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import {
	BoardContainer,
	BtnAddColumn,
	SvagAddColumn,
	StyledIconAdd,
	// WrapperBoardContainer,
} from './MainDashboard.styled';
import { AddColumnModal } from 'components/Modal';
import { Columns } from '../Columns';
import { useParams } from 'react-router-dom';
import { useColumns, useBoards } from 'hooks';

const MainDashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { board } = useParams();
	const { allColumns } = useColumns();
	const { allBoards } = useBoards();
	const selectedBoard = allBoards.find(item => item._id === board);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	return (
		<StyleSheetManager shouldForwardProp={prop => prop !== 'backgroundId'}>
			{/* <WrapperBoardContainer> */}
			<BoardContainer backgroundId={selectedBoard?.background}>
				<Columns board={board}>
					<BtnAddColumn type='button' onClick={handleOpenModal}>
						<StyledIconAdd>
							<SvagAddColumn name='plus' />
						</StyledIconAdd>
						<span>Add {allColumns.length ? 'another' : null} column</span>
					</BtnAddColumn>
				</Columns>
				<AddColumnModal board={board} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
			</BoardContainer>
			{/* </WrapperBoardContainer> */}
		</StyleSheetManager>
	);
};

export default MainDashboard;
