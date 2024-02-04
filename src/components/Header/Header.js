import ThemePicker from 'components/Header/ThemePicker/ThemePicker';
import { HeaderWrapper, UserWrapper } from './Header.styled';

import BurgenMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <HeaderWrapper>
      <BurgenMenu />

      <UserWrapper>
        <ThemePicker />
  
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;