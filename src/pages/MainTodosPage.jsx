/** @format */

import React, { useEffect, useState } from 'react';
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
	const [firstRun, setFirstRun] = useState(true);

	useEffect(() => {
		dispatch(fetchAllBoards());
	}, [dispatch]);

	useEffect(() => {
		if (firstRun && allBoards.length > 0) {
			navigate(`/todos/${allBoards[0]?._id}`);
			setFirstRun(false);
		}
	}, [firstRun, allBoards, navigate]);

	return (
		<>
			<FilterBtn />
			{nameBoard && <HeaderDashboard title={nameBoard} />}
			<MainComponent>{board && <MainDashboard />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
