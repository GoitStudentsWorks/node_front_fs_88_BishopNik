import ThemePicker from 'components/Header/ThemePicker/ThemePicker';
import { HeaderWrapper, UserWrapper } from './Header.styled';
import BurgenMenu from './BurgerMenu/BurgerMenu';
import data from '../../img/list_img.json';

const Header = () => {
  return (
    <HeaderWrapper>
      <BurgenMenu />

      <UserWrapper>
        <ThemePicker />
       <img src={data.user.dark} alt="DarkUser" width={32} />
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;