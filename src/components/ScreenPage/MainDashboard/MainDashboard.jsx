/** @format */

import React, { useState } from 'react';
// import { StyleSheetManager } from 'styled-components';
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
import { useColumns } from 'hooks';

const MainDashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { board } = useParams();
	const { allColumns } = useColumns();

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	return (
		<BoardContainer>
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
	);
};

export default MainDashboard;
