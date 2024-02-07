/** @format */

import { useContext } from 'react';
import { MainContext } from 'components/Helpers';
import { Button, IconMenu } from './BurgerMenu.styled';

const BurgenMenu = () => {
	const { setIsOpen } = useContext(MainContext);

	const handleBurger = () => setIsOpen(true);

	return (
		<Button type='button' onClick={handleBurger}>
			<IconMenu name='menu' />
		</Button>
	);
};

export default BurgenMenu;
