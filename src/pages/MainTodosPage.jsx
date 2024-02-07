/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainComponent from 'components/MainComponent/MainComponent';
import { FilterModal, FilterBtn } from 'components/Filter';
import ScreenPage from 'components/ScreenPage/ScreenPage';

function MainTodosPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { board } = useParams();

	const openModal = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<FilterBtn onClick={openModal} />
			<FilterModal isModalOpen={isModalOpen} setIsOpen={setIsModalOpen} />
			<MainComponent>{board && <ScreenPage />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
