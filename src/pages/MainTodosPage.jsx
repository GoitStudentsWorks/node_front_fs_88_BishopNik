/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainComponent from 'components/MainComponent/MainComponent';
import Board from 'components/MainComponent/Board';
import { ModalFilter } from 'components/Filter';
import {
	ButtonFilter,
	FiltersIcon,
	TextButton,
} from 'components/MainComponent/MainComponent.styled';

function MainTodosPage() {
	const { board } = useParams(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [idBoard, setIdBoard] = useState(null);

	useEffect(() => {
		setIdBoard(board);
	}, [board]);

	const openModal = () => {
		setIsModalOpen(true);
	};

	return (
		// <ThemeProvider>
			<>
			<ButtonFilter type='button' onClick={openModal}>
				<FiltersIcon name='filters' />
				<TextButton>Filters</TextButton>
			</ButtonFilter>
			<ModalFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<Board titleBoard={idBoard} />
			<MainComponent>{idBoard}</MainComponent>
		</>
		/* </ThemeProvider> */
	);
}

export default MainTodosPage;
