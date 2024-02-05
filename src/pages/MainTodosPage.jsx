/** @format */

import React, {useState } from 'react';
import MainComponent from 'components/MainComponent/MainComponent';
import { ModalFilter } from 'components/Filter';
import {
	ButtonFilter,
	FiltersIcon,
	TextButton,
} from 'components/MainComponent/MainComponent.styled';

function MainTodosPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);

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
			<MainComponent></MainComponent> 
		</>
	);
}

export default MainTodosPage;
