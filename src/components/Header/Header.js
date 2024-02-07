/** @format */

import ThemePicker from 'components/Header/ThemePicker/ThemePicker';
import { HeaderWrapper, UserWrapper } from './Header.styled';
import BurgenMenu from './BurgerMenu/BurgerMenu';
import UserBlock from './UserBlock/UserBlock';

const Header = () => {
	return (
		<HeaderWrapper>
			<BurgenMenu />
			<UserWrapper>
        <ThemePicker />
				<UserBlock />
			</UserWrapper>
		</HeaderWrapper>
	);
};

export default Header;
