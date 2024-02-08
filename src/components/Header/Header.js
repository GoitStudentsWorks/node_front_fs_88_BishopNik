/** @format */

import ThemePicker from 'components/Header/ThemePicker/ThemePicker';
import { HeaderWrapper, UserWrapper } from './Header.styled';
import BurgenMenu from './BurgerMenu/BurgerMenu';
import UserBlock from './UserBlock/UserBlock';
import { UserInfo } from 'components/UserInfo/UserInfo';

const Header = () => {
  return (
    <HeaderWrapper>
      <BurgenMenu />
      <UserWrapper>
        <ThemePicker />
        <UserBlock />
        <UserInfo />
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;
