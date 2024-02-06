/** @format */

// import { useDispatch, useSelector } from 'react-redux';
import { Button, IconMenu } from './BurgerMenu.styled';

const BurgenMenu = () => {

	// const dispatch = useDispatch();
	// const menuMode = useSelector;
const handleBurger = () => `dispatch(isOpen()) напишіть вірний код`
	return (
		<Button type='button' onClick={handleBurger}>
			<IconMenu name='menu' />
		</Button>
	);

};

export default BurgenMenu;
