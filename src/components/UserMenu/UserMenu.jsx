/** @format */

import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
	return (
		<>
			<nav>
				<NavLink to='/todos' end>
					Boards
				</NavLink>
			</nav>
		</>
	);
};
