/** @format */

import React, { useState } from 'react';
import { BoardContainer, BtnAddColumn, SvagAddColumn, StyledIconAdd } from './MainDashboard.styled';
import { AddColumnModal } from 'components/Modal';
import { Columns } from '../Columns/Columns';
import { useParams } from 'react-router-dom';

const MainDashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { board } = useParams();
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	return (
		<BoardContainer>
			<Columns board={board} />
			<BtnAddColumn type='button' onClick={handleOpenModal}>
				<StyledIconAdd>
					<SvagAddColumn name='icon-plus' />
				</StyledIconAdd>
				<span>Add another column</span>
			</BtnAddColumn>
			<AddColumnModal board={board} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
		</BoardContainer>
	);
};

export default MainDashboard;
