/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { statusError } from 'redux/todos/selectors';
import { resetError } from 'redux/todos/todosSlice';
import { toastError } from 'components/Helpers';
import MainComponent from 'components/MainComponent/MainComponent';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { ModalEditProfile } from 'components/Modal/ModalEditProfile';
import { ModalFilter } from 'components/Filter';
import {
	ButtonFilter,
	FiltersIcon,
	TextButton,
} from 'components/MainComponent/MainComponent.styled';

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
		<>
			<ButtonFilter type='button' onClick={openModal}>
				<FiltersIcon name='filters' />
				<TextButton>Filters</TextButton>
			</ButtonFilter>
			<ModalFilter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<UserInfo />
			<ModalEditProfile />
			<MainComponent>{idBoard}</MainComponent>
		</>
	);
}

export default MainTodosPage;
