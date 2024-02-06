import { Logo } from './Logo/Logo';
import { Title } from './Title/Title';
import { BtnNewBoard } from './Btn_CreateNew/Btn_CreateNew';
import { BoardsList } from './BoardsList/BoardList';
import { Help } from './Help/Help';
import { BtnLogout } from './Logout/Logout';

export const SidebarComponent = () => {
  return (
    <>
      <Logo />
      <Title />
      <BtnNewBoard />
      <BoardsList />
      <Help />
      <BtnLogout />
    </>
  );
};
