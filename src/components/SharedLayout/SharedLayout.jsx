/** @format */

import { Suspense, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { Container, Main, SideBar, Header } from 'components/styled.component/MainTodosPage.styled';
import { SidebarComponent } from '../Sidebar/Sidebar';
import { MainContext } from 'components/Helpers';

import HeaderComponent from 'components/Header';
import { useAuth } from 'hooks';

const SharedLayout = () => {
	const { isLoggedIn } = useAuth();
	const { isOpen } = useContext(MainContext);
	const [status, setStatus] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setStatus(isOpen || window.innerWidth > 1439);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isOpen]);

	return isLoggedIn ? (
		<Container>
			{status && (
				<SideBar>
					<SidebarComponent />
				</SideBar>
			)}
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
