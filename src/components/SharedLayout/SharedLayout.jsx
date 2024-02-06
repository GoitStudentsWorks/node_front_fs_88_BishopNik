/** @format */

import { Suspense, useContext, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { Container, Main, SideBar, Header } from 'components/styled.component/MainTodosPage.styled';
import { SidebarComponent } from '../Sidebar/Sidebar';
import { MainContext } from 'components/Helpers';

import HeaderComponent from 'components/Header';
import { useAuth } from 'hooks';

const SharedLayout = () => {
	const { isLoggedIn } = useAuth();
	const { isOpen, setIsOpen } = useContext(MainContext);
	const [status, setStatus] = useState(false);
	const sidebarRef = useRef(null);

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

	useEffect(() => {
		if (window.innerWidth > 1439) return;
		const handlerOnCloseWindow = e => {
			if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		window.addEventListener('click', handlerOnCloseWindow);

		return () => {
			window.removeEventListener('click', handlerOnCloseWindow);
		};
	}, [setIsOpen]);

	return isLoggedIn ? (
		<Container>
			{status && (
				<SideBar ref={sidebarRef}>
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
