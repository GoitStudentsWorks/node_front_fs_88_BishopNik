/** @format */

import { Suspense, useContext, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { Container, Main, SideBar, Header } from 'components/styled.component/MainTodosPage.styled';
import { SidebarComponent } from '../Sidebar/Sidebar';
import { MainContext } from 'components/Helpers';
import { CreateNewBoardModal } from 'components/Modal';

import HeaderComponent from 'components/Header';
import { useAuth } from 'hooks';

const SharedLayout = () => {
	const { isLoggedIn } = useAuth();
	const { isOpenSidebar, setIsOpenSidebar, isOpenAddBoard, setOpenIsAddBoard } =
		useContext(MainContext);
	const [status, setStatus] = useState(false);
	const sidebarRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setStatus(isOpenSidebar || window.innerWidth > 1439);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isOpenSidebar]);

	useEffect(() => {
		if (window.innerWidth > 1439) return;
		const handlerOnCloseWindow = e => {
			if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
				setIsOpenSidebar(false);
			}
		};

		window.addEventListener('click', handlerOnCloseWindow);

		return () => {
			window.removeEventListener('click', handlerOnCloseWindow);
		};
	}, [setIsOpenSidebar]);

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
				<CreateNewBoardModal isOpen={isOpenAddBoard} setIsOpen={setOpenIsAddBoard} />

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
