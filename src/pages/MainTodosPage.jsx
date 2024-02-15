/** @format */

import React, { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { MainComponent } from 'components/MainComponent';
import { FilterBtn } from 'components/Filter';
import MainDashboard from 'components/ScreenPage/MainDashboard/MainDashboard';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { SayNameBoard } from 'components/Helpers';
import { fetchAllBoards } from 'redux/boards/operations';
import { useBoards } from 'hooks';
import { MainContext } from 'components/Helpers';

function MainTodosPage() {
	const dispatch = useDispatch();
	const { board } = useParams();
	const navigate = useNavigate();
	const nameBoard = SayNameBoard(board);
	const { allBoards, activeBoard } = useBoards();
	const [firstRun, setFirstRun] = useState(true);
	const { deleted, setDeleted } = useContext(MainContext);

	useEffect(() => {
		dispatch(fetchAllBoards());
	}, [dispatch]);

	useEffect(() => {
		if (firstRun && allBoards.length > 0) {
			if (!activeBoard) {
				navigate(`/todos/${allBoards[0]?._id}`);
			} else {
				navigate(`/todos/${activeBoard}`);
			}
			setFirstRun(false);
		}
	}, [firstRun, allBoards, navigate, activeBoard]);

	useEffect(() => {
		if (allBoards.length === 0) {
			navigate('/todos');
		}
	}, [allBoards, navigate]);

	useEffect(() => {
		if (!deleted) return;
		console.log(allBoards);
		if (!allBoards[0]._id) {
			navigate(`/todos`);
		} else {
			navigate(`/todos/${allBoards[0]._id}`);
		}
		setDeleted(false);
	}, [allBoards, board, deleted, navigate, setDeleted]);

	return (
		<>
			<FilterBtn />
			{nameBoard && <HeaderDashboard title={nameBoard} />}
			<MainComponent>{board && <MainDashboard />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
