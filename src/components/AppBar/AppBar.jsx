/** @format */

import { UserMenu } from '../UserMenu';
// import { AuthNavigation } from '../AuthNavigation';
// import { useAuth } from 'hooks';

export const AppBar = () => {
	// const { isLoggedIn } = useAuth();

	return (
		<>
			<div>
				<UserMenu />
				{/* <AuthNavigation /> */}
			</div>
		</>
	);
};
