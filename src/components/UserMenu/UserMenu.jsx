/** @format */

import { NavLink } from 'react-router-dom';
import Menu from 'components/Menu';

export const UserMenu = () => {
	return (
		<>
			<nav>
				<NavLink to='/todos' end>
					Boards
				</NavLink>
				<button
					id='avatar_menu'
					onClick={() => console.log('Click')}
					style={{ width: '300px', height: '50px' }}
				>
					Click me
				</button>
				<Menu />
			</nav>
		</>
	);
};
