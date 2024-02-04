/** @format */

import { useDispatch, useSelector } from 'react-redux';
import { Button, IconMenu } from './BurgerMenu.styled';

const BurgenMenu = () => {
	const dispatch = useDispatch();
	const menuMode = useSelector;

	return (
		<Button type='button' onClick={() => dispatch} isOpen={menuMode}>
			<IconMenu name='menu' />
		</Button>
	);
};

export default BurgenMenu;
