/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import { MainComponent } from 'components/MainComponent';
import { FilterBtn } from 'components/Filter';
import MainDashboard from 'components/ScreenPage/MainDashboard/MainDashboard';
import { HeaderDashboard } from 'components/ScreenPage/HeaderDashboard/HeaderDashboard';
import { SayNameBoard } from 'components/Helpers';

function MainTodosPage() {
	const { board } = useParams();
	const nameBoard = SayNameBoard(board);

	return (
		<>
			<FilterBtn />
			{nameBoard && <HeaderDashboard title={nameBoard} />}
			<MainComponent>{board && <MainDashboard />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
