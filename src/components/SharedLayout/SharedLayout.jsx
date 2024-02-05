/** @format */

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { Container, Main, SideBar, Header } from 'components/styled.component/MainTodosPage.styled';
import { Logo } from 'components/Sidebar/Logo/Logo';
import { Title } from 'components/Sidebar/Title/Title';
import { BtnNewBoard } from 'components/Sidebar/Btn_CreateNew/Btn_CreateNew';
import { BoardsList } from 'components/Sidebar/BoardsList/BoardList';
import { Help } from 'components/Sidebar/Help/Help';
import { BtnLogout } from 'components/Sidebar/Logout/Logout';

import HeaderComponent from 'components/Header/Header';
import { useAuth } from 'hooks';

const SharedLayout = () => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? (
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
				<HeaderComponent />
			</Header>
			<Main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</Main>
		</Container>
	) : (
		<Suspense fallback={<Loader />}>
			<Outlet />
		</Suspense>
	);
};

export default SharedLayout;
