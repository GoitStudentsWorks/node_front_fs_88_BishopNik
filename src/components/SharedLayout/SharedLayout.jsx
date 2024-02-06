/** @format */

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import {
  Container,
  Main,
  SideBar,
  Header,
} from 'components/styled.component/MainTodosPage.styled';
import { SidebarComponent } from '../Sidebar/Sidebar';

import HeaderComponent from 'components/Header/Header';
import { useAuth } from 'hooks';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Container>
      <SideBar>
        <SidebarComponent />
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
