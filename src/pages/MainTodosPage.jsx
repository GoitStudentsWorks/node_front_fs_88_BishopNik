/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainComponent from 'components/MainComponent/MainComponent';
import { ModalFilter } from 'components/Filter';
import ScreenPage from 'components/ScreenPage/ScreenPage';
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
			<MainComponent>{board && <ScreenPage />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
