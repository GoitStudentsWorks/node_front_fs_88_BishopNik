/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainComponent from 'components/MainComponent/MainComponent';
import { FilterBtn } from 'components/Filter';
import ScreenPage from 'components/ScreenPage/ScreenPage';
import { AddCardModal } from 'components/Modal';

function MainTodosPage() {
	const [isOpen, setIsOpen] = useState(false);
	const { board } = useParams();
	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				style={{ position: 'absolute', right: '50px', top: '150px' }}
			>
				Add card
			</button>
			<AddCardModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />

			<FilterBtn />
			<MainComponent>{board && <ScreenPage />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
