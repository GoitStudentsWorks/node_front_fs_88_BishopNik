/** @format */

import { useNavigate } from 'react-router-dom';
import {
	AuthNavContainer,
	Button,
	IconLogo,
	IconLogoBox,
	LogoBox,
	LogoTitle,
	Text,
} from './AuthNavigation.styled';
import Avatar from 'components/Avatar';

export const AuthNavigation = () => {
	const navigate = useNavigate();

	const goToPage = page => {
		navigate(`/auth/${page}`);
	};

	return (
		<>
			<AuthNavContainer>
				<Avatar />
				<LogoBox>
					<IconLogoBox>
						<IconLogo name='iconapp' />
					</IconLogoBox>
					<LogoTitle>Task Pro</LogoTitle>
				</LogoBox>
				<Text>
					Supercharge your productivity and take control of your tasks with Task Pro -
					Don't wait, start achieving your goals now!
				</Text>

				<Button type='button' onClick={() => goToPage('register')}>
					Registation
				</Button>

				<Button type='button' onClick={() => goToPage('login')}>
					Log In
				</Button>
			</AuthNavContainer>
		</>
	);
};
