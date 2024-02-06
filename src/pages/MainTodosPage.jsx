/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainComponent from 'components/MainComponent/MainComponent';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/ScreenPage/MainDashboard/MainDashboard';
import { ModalFilter } from 'components/Filter';
import {
	ButtonFilter,
	FiltersIcon,
	TextButton,
} from 'components/MainComponent/MainComponent.styled';

function MainTodosPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { board } = useParams();

	const openModal = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<ButtonFilter type='button' onClick={openModal}>
				<FiltersIcon name='filters' />
				<TextButton>Filters</TextButton>
			</ButtonFilter>
			<ModalFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<MainComponent>
				{'board' && (
					<>
						<HeaderDashboard title={'board'} />
						<MainDashboard />
					</>
				)}
			</MainComponent>
		</>
	);
}

export default MainTodosPage;
