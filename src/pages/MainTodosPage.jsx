/** @format */

import React, { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { MainComponent } from 'components/MainComponent';
import { FilterBtn } from 'components/Filter';
import { HeaderDashboard, MainDashboard } from 'components/ScreenPage';
import { SayNameBoard } from 'components/Helpers';
import { fetchAllBoards } from 'redux/boards/operations';
import { useBoards } from 'hooks';
import { MainContext } from 'components/Helpers';
import { setActiveBoard } from 'redux/boards/boardsSlice';

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
			dispatch(setActiveBoard(''));
		}
	}, [allBoards, dispatch, navigate]);

	useEffect(() => {
		if (!deleted) return;
		if (!allBoards[0]?._id) {
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
