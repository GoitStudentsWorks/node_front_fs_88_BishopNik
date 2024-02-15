/** @format */

import { Suspense, useContext, useEffect, useState, useRef } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import {
  Container,
  Main,
  SideBar,
  Header,
} from 'components/styled.component/MainTodosPage.styled';
import { SidebarComponent } from '../Sidebar/Sidebar';
import { MainContext } from 'components/Helpers';
import { CreateNewBoardModal } from 'components/Modal';
import { StyleSheetManager } from 'styled-components';

import HeaderComponent from 'components/Header';
import { useAuth, useBoards } from 'hooks';

const SharedLayout = () => {
  const { allBoards } = useBoards();
  const { board } = useParams();
  const { isLoggedIn } = useAuth();
  const selectedBoard = allBoards.find(item => item._id === board);

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
		const handlerOnCloseWindow = ({ target }) => {
			if (sidebarRef.current && !sidebarRef.current.contains(target)) {
				setIsOpenSidebar(false);
			}
		};

    window.addEventListener('click', handlerOnCloseWindow);

    return () => {
      window.removeEventListener('click', handlerOnCloseWindow);
    };
  }, [setIsOpenSidebar]);

  const bg =
    selectedBoard?.background !== '100' ? selectedBoard?.background : undefined;

  return isLoggedIn ? (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'backgroundId'}>
      <Container>
        {status && (
          <SideBar ref={sidebarRef}>
            <SidebarComponent />
          </SideBar>
        )}
        <Header>
          <HeaderComponent />
        </Header>
        <Main backgroundId={bg}>
          <CreateNewBoardModal
            isOpen={isOpenAddBoard}
            setIsOpen={setOpenIsAddBoard}
          />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
      </Container>
    </StyleSheetManager>
  ) : (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
