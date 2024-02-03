/** @format */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusError } from 'redux/todos/selectors';
import { resetError } from 'redux/todos/todosSlice';
import { toastError } from 'components/Helpers';
import MainComponent from 'components/MainComponent/MainComponent';
import {
	Container,
	Main,
	SideBar,
} from '../components/styled.component/MainTodosPage.styled';
import { AppBar } from 'components/AppBar';

import Header from 'components/Header/Header'

function MainTodosPage() {
	const error = useSelector(statusError);
	const dispatch = useDispatch();

	useEffect(() => {
		if (error !== null) toastError(`Error loading data: ${error}`);
		dispatch(resetError());
	}, [dispatch, error]);

	return (
		<>
			<Container>
				<SideBar>Header</SideBar>
				<Header>
					<AppBar />
				</Header>
				<Main>
					<MainComponent>{/* <h2>Sey Hello</h2> */}</MainComponent>
				</Main>
			</Container>
		</>
	);
}

export default MainTodosPage;
