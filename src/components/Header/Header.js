import ThemePicker from 'components/Header/ThemePicker/ThemePicker';
import { HeaderWrapper, UserWrapper } from './Header.styled';
import BurgenMenu from './BurgerMenu/BurgerMenu';
import data from '../../img/list_img.json';
import { UserInfo } from 'components/UserInfo/UserInfo';

const Header = () => {
  return (
    <HeaderWrapper>
      <BurgenMenu />

      <UserWrapper>
        <ThemePicker />
        <UserInfo />
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;
