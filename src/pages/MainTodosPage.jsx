/** @format */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { MainComponent } from 'components/MainComponent';
import { FilterBtn } from 'components/Filter';
import MainDashboard from 'components/ScreenPage/MainDashboard/MainDashboard';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { SayNameBoard } from 'components/Helpers';
import { fetchAllBoards } from 'redux/boards/operations';
import { useBoards } from 'hooks';

function MainTodosPage() {
	const dispatch = useDispatch();
	const { board } = useParams();
	const navigate = useNavigate();
	const nameBoard = SayNameBoard(board);
	const { allBoards } = useBoards();

	useEffect(() => {
		dispatch(fetchAllBoards());
	}, [dispatch]);

	useEffect(() => {
		navigate(`/todos/${allBoards[0]?._id}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allBoards]);

	return (
		<>
			<FilterBtn />
			{nameBoard && <HeaderDashboard title={nameBoard} />}
			<MainComponent>{board && <MainDashboard />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
