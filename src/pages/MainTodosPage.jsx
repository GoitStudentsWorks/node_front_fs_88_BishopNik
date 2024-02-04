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
	Header,
} from '../components/styled.component/MainTodosPage.styled';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { ModalEditProfile } from 'components/Modal/ModalEditProfile';

import { Logo } from 'components/Sidebar/Logo/Logo';
import { Title } from 'components/Sidebar/Title/Title';
import { BtnNewBoard } from 'components/Sidebar/Btn_CreateNew/Btn_CreateNew';
import { BoardsList } from 'components/Sidebar/BoardsList/BoardList';
import { Help } from 'components/Sidebar/Help/Help';
import { BtnLogout } from 'components/Sidebar/Logout/Logout';

// import HeaderComponent from 'components/Header';

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
				<SideBar>
					<Logo />
					<Title />
					<BtnNewBoard />
					<BoardsList />
					<Help />
					<BtnLogout />
				</SideBar>
				<Header>
					Header
					{/* <HeaderComponent /> */}
					<UserInfo />
					<ModalEditProfile />
				</Header>
				<Main>
					<MainComponent>{/* <h2>Sey Hello</h2> */}</MainComponent>
				</Main>
			</Container>
		</>
	);
}

export default MainTodosPage;
