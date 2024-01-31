/** @format */

import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
	return (
		<>
			<div>
				<NavLink to='/register' end>
					Register
				</NavLink>
				<NavLink to='/login' end>
					Login
				</NavLink>
			</div>
		</>
	);
};
