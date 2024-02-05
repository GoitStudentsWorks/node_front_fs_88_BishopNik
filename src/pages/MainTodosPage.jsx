/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { statusError } from 'redux/todos/selectors';
import { resetError } from 'redux/todos/todosSlice';
import { toastError } from 'components/Helpers';
import MainComponent from 'components/MainComponent/MainComponent';
import { ModalFilter } from 'components/Filter';
import {
	ButtonFilter,
	FiltersIcon,
	TextButton,
} from 'components/MainComponent/MainComponent.styled';
import Board from 'components/MainComponent/Board';
// import { ThemeProvider } from 'styled-components';

function MainTodosPage() {
	const error = useSelector(statusError);
	const dispatch = useDispatch();
	const { board } = useParams(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [idBoard, setIdBoard] = useState(null);

	useEffect(() => {
		if (error !== null) toastError(`Error loading data: ${error}`);
		dispatch(resetError());
	}, [dispatch, error]);

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
