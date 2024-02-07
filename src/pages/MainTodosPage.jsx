/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import MainComponent from 'components/MainComponent/MainComponent';
import { FilterBtn } from 'components/Filter';
import ScreenPage from 'components/ScreenPage/ScreenPage';

function MainTodosPage() {
	const { board } = useParams();

	return (
		<>
			<FilterBtn />
			<MainComponent>{board && <ScreenPage />}</MainComponent>
		</>
	);
}

export default MainTodosPage;
